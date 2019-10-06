'use strict';

const User = use('App/Models/User');

class UserController {
  async getAll({ response }) {
    // let users = await User.all();
    let users = await User.query()
      // .with('lists')
      .with('emails')
      .fetch();

    return response.json(users);
  }

  async get({ params, response }) {
    const user = await User.find(params.id);

    return response.json(user);
  }

  async post({ request, response }) {
    const obj = request.only(['name', 'emails']);

    const user = new User();
    user.name = obj.name;
    user.emails = obj.emails ? JSON.parse(obj.emails) : [];

    await user.save();

    return response.status(201).json(user);
  }

  async update({ params, request, response }) {
    const userName = request.only(['name']);

    const user = await User.find(params.id);

    if (!user) {
      return response.status(404).json({ data: 'User not found' });
    }

    user.name = userName.name;

    await user.save();

    return response.status(200).json(user);
  }

  async delete({ params, response }) {
    const user = await User.find(params.id);

    if (!user) {
      return response.status(404).json({ data: 'User not found' });
    }

    await user.delete();

    return response.status(204).json(null);
  }
}

module.exports = UserController;
