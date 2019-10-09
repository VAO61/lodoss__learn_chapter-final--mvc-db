'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class List extends Model {
  users() {
    return this.belongsToMany('App/Models/User');
  }

  emails() {
    return this.belongsToMany('App/Models/Email');
  }

  // labels() {
  //   return this.hasMany('App/Models/Label');
  // }
}

module.exports = List;
