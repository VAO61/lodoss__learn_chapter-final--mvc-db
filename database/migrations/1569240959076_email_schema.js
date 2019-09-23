'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class EmailSchema extends Schema {
  up() {
    this.create('emails', table => {
      table.increments();
      table.timestamps();
      table.string('emailAdress');
    });
  }

  down() {
    this.drop('emails');
  }
}

module.exports = EmailSchema;
