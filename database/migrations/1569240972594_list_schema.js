'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ListSchema extends Schema {
  up() {
    this.create('lists', table => {
      table.increments();
      table.timestamps();
      table.integer('user_id').unsigned();
      table
        .foreign('user_id')
        .references('users.id')
        .onDelete('cascade');
    });
  }

  down() {
    this.drop('lists');
  }
}

module.exports = ListSchema;
