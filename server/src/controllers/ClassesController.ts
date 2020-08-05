import { Request, Response } from "express";
import db from "../database/connection";
import convertHourToMinutes from "../utils/convertHourToMinutes";

// Creating an interface to tell each type from each props of schedule
interface scheduleItem {
    week_day: number;
    from: string;
    to: string;
}

export default class ClassesController {
    async index(request: Request, response: Response) {
        const filters = request.query;

        if (!filters.week_day || !filters.subject || !filters.time) {
            return response.status(400).json({
                erro: "Missing filters to search classes.",
            });
        }

        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        const timeInMinutes = convertHourToMinutes(time);

        const classes = await db("classes")
            .whereExists(function () {
                this.select("class_schedule.*")
                    .from("class_schedule")
                    .whereRaw("`class_schedule`.`class_id` = `classes`.`id`")
                    .whereRaw("`class_schedule`.`week_day` = ??", [
                        Number(week_day),
                    ])
                    .whereRaw("`class_schedule`.`from` <= ??", [timeInMinutes])
                    .whereRaw("`class_schedule`.`from` > ??", [timeInMinutes]);
            })
            .where("classes.subject", "=", subject)
            .join("users", "classes.user_id", "=", "users.id")
            .select(["classes.*", "users.*"]);

        return response.json(classes);
    }

    async create(request: Request, response: Response) {
        // Destructuring javascript object to get response parsed data
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule,
        } = request.body;

        // Identifying running transaction
        const trx = await db.transaction();

        // Avoid error by using try-catch
        try {
            // Creating users and returning its IDs to insertedUsersIds const var
            const insertedUsersIds = await trx("users").insert({
                name,
                avatar,
                whatsapp,
                bio,
            });

            // Getting first user_id
            const user_id = insertedUsersIds[0];

            // Creating classes and returning its IDs to isnertedClassesIds const var
            const insertedClassesIds = await trx("classes").insert({
                subject,
                cost,
                user_id,
            });

            // Getting first class_id
            const class_id = insertedClassesIds[0];

            const classSchedule = schedule.map((scheduleItem: scheduleItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                };
            });

            await trx("class_schedule").insert(classSchedule); // Insert recently created class_schedule row

            await trx.commit(); // Do/commit above changes on db

            return response.status(201).send(); // Returning a success response
        } catch (err) {
            // If got an error, rollback above changes and print an error message
            await trx.rollback();
            return response.status(400).json({
                error: "Unexpected error while creating new class",
            });
        }
    }
}
