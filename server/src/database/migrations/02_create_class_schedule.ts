import Knex from "knex";

// Which changes we want in our db
export async function up(knex: Knex) {
    return knex.schema.createTable("class_schedule", (table) => {
        table.increments("id").primary();

        table.integer("week_day").notNullable();
        table.integer("from").notNullable();
        table.integer("to").notNullable();

        // Creating foreign key to "user_id" on "users" table
        table
            .integer("class_id")
            .notNullable()
            .references("id")
            .inTable("classes")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
    });

}

// Undo changes
export async function down(knex: Knex) {
    return knex.schema.dropTableIfExists("class_schedule");
}
