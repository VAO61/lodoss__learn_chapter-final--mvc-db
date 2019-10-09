'use strict';

const Email = use('App/Models/Email');
const User = use('App/Models/User');

class EmailController {
  async getAll({ response }) {
    let emails = await Email.query()
      // .with('lists')
      .with('users')
      .fetch();

    return response.json(emails);
  }

  async get({ params, response }) {
    const email = await Email.with('users').find(params.id);

    return response.json(email);
  }

  async post({ request, response }) {
    const obj = request.only(['emailAdress', 'users']);

    const email = new Email();
    email.emailAdress = obj.emailAdress;
    await email.save();

    const users = obj.users ? JSON.parse(obj.users) : [];
    if (users.length) {
      users.forEach(async user => {
        const userModel = new User();
        userModel.name = user;
        await userModel.save();
        await email.users().save(userModel);
      });
    }

    return response.status(201).json(email);

    // const emailSource = request.only(['emailAdress']);

    // const email = new Email();
    // email.emailAdress = emailSource.emailAdress;

    // await email.save();

    // return response.status(201).json(email);
  }

  async update({ params, request, response }) {
    const emailSource = request.only(['emailAdress']);

    const email = await Email.find(params.id);

    if (!email) {
      return response.status(404).json({ data: 'Email not found' });
    }

    email.emailAdress = emailSource.emailAdress;

    await email.save();

    return response.status(200).json(email);
  }

  async delete({ params, response }) {
    const email = await Email.find(params.id);

    if (!email) {
      return response.status(404).json({ data: 'Email not found' });
    }

    await email.delete();

    return response.status(204).json(null);
  }
}

module.exports = EmailController;
