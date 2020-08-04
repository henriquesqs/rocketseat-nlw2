import Knex from "knex";

// Which changes we want in our db
export async function up(knex: Knex) {
    return knex.schema.createTable("connections", (table) => {
        table.increments("id").primary();
        table.timestamp("created_at").defaultTo("now()").notNullable();

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
    return knex.schema.dropTableIfExists("connections");
}
