import Knex from 'knex';

export async function up(knex: Knex) {
  // CREATE TABLE
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();
  });
}

export async function down(knex: Knex) {
  // DROP TABLE
  return knex.schema.dropTable('users');
}
