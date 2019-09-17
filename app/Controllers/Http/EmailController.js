'use strict';

const Email = use('App/Models/Email');

class EmailController {
  async getAll({ response }) {
    let emails = await Email.all();
    return response.json(emails);
  }

  async get({ params, response }) {
    const email = await Email.find(params.id);

    return response.json(email);
  }

  async post({ request, response }) {
    const emailSource = request.only(['emailAdress']);

    const email = new Email();
    email.emailAdress = emailSource.emailAdress;

    await email.save();

    return response.status(201).json(email);
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
