import Knex from "knex";

// Which changes we want in our db
export async function up(knex: Knex) {
    return knex.schema.createTable("classes", (table) => {
        table.increments("id").primary();
        table.string("subject").notNullable();
        table.decimal("cost").notNullable();

        // Creating foreign key to "user_id" on "users" table
        table
            .integer("user_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
    });
}

// Undo changes
export async function down(knex: Knex) {
    return knex.schema.dropTableIfExists("classes");
}
