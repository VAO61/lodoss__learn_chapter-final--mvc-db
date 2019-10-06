'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ListSchema extends Schema {
  up() {
    this.create('email_user', table => {
      table.increments();
      table.timestamps();
      table
        .integer('user_id')
        .unsigned()
        .references('users.id');
      table
        .integer('email_id')
        .unsigned()
        .references('emails.id');
      // table
      //   .integer('label_id')
      //   .unsigned()
      //   .foreign('list_label_id')
      //   .references('emails.id')
      //   .onDelete('cascade');
    });
  }

  down() {
    this.drop('email_user');
  }
}

module.exports = ListSchema;
