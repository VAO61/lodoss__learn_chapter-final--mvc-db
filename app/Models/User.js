'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class User extends Model {
  lists() {
    return this.belongsToMany('App/Models/List');
  }
}

module.exports = User;
