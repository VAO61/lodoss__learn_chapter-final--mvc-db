'use strict';

/*
|--------------------------------------------------------------------------
| CustomerSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory');

class UserSeeder {
  async run() {
    const user = await Factory.model('App/Models/User').create();
    const list = await Factory.model('App/Models/List').make();
    // const email = await Factory.model('App/Models/Email').make();

    await user.lists().save(list);
    await lists.users().save(user);
  }
}

module.exports = UserSeeder;
