'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Email extends Model {
  users() {
    return this.belongsToMany('App/Models/User');
    // return this.belongsToMany('App/Models/User', 'lists');
  }
}

module.exports = Email;
