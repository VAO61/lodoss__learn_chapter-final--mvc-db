'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LabelSchema extends Schema {
  up () {
    this.create('labels', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('labels')
  }
}

module.exports = LabelSchema
