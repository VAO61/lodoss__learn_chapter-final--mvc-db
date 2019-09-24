'use strict';
// !important
// https://github.com/adonisjs/adonis-framework/issues/1118

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Factory = use('Factory');

Factory.blueprint('App/Models/User', faker => {
  return {
    name: faker.name()
    // description: faker.sentence()
  };
});

Factory.blueprint('App/Models/List', faker => {
  return {
    name: faker.word()
    // description: faker.sentence()
  };
});
