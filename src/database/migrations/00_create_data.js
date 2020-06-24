const Knex = require('knex');

async function up(knex) {
    return knex.schema.createTable('data', table => {
        table.increments('Id').primary();
        table.string('Name').notNullable();
        table.string('Title').notNullable();
        table.float('Salary').notNullable();
    })
}

async function down(knex) {
    return knex.schema.dropTable('data');
}

module.exports = {up, down};