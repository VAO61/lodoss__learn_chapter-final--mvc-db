// adonis migration:run
'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ListUserSchema extends Schema {
  up() {
    this.create('list_user', table => {
      table
        .integer('list_id')
        .unsigned()
        .index('list_id');
      table
        .integer('user_id')
        .unsigned()
        .index('user_id');
      table
        .foreign('project_id')
        .references('project_id')
        .onDelete('cascade');
      table
        .foreign('tag_id')
        .references('tag_id')
        .onDelete('cascade');
    });
  }

  down() {
    this.drop('list_user');
  }
}

module.exports = ListUserSchema;
