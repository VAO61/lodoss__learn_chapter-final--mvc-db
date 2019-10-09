'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class User extends Model {
  // lists() {
  //   return this.hasMany('App/Models/List');
  // }

  emails() {
    return this.belongsToMany('App/Models/Email');
    // return this.belongsToMany('App/Models/Email', 'lists');
  }
}

module.exports = User;
