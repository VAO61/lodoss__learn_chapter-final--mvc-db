'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UpdateListSchema extends Schema {
  up() {
    // console.dir(this.table);

    this.table('email_user', table => {
      table
        .after('email_id')
        .integer('label_id')
        .unsigned()
        .references('labels.id');
    });
  }

  down() {
    this.table('email_user', table => {
      table.dropColumn('label_id');
    });
  }
}

module.exports = UpdateListSchema;
