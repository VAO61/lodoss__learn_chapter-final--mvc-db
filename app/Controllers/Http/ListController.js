'use strict';

const List = use('App/Models/List');

class ListController {
  async getAll({ response }) {
    // let lists = await List.all();
    let lists = await List.query()
      .with('users')
      // .with('email')
      .fetch();

    // return response.json(lists);

    return response.status(200).json({
      message: 'Here are your lists',
      data: lists
    });
  }

  async get({ params, response }) {
    const list = await List.find(params.id);

    return response.json(list);
  }

  async post({ request, response }) {
    // const listName = request.only(['name']);
    // const listName = request.only(['name']);

    // const { name, user_id, email_id, label_id } = request.post();
    const { name, user_id } = request.post();
    const list = await List.create({ name, user_id });

    return response.status(201).json({
      message: 'Successfully created a new list',
      data: list
    });
  }

  async update({ params, request, response }) {
    // const {name, user_id, email_id, label_id } = request.post()
    const { name, user_id } = request.post();

    const list = await List.find(params.id);

    list.name = name;
    list.user_id = user_id;

    await list.save();

    if (!list) {
      return response.status(404).json({ data: 'List not found' });
    }

    return response.status(200).json({
      message: 'Successfully updated this list.',
      data: list
    });
  }

  async delete({ params, response }) {
    const list = await List.find(params.id);

    if (!list) {
      return response.status(404).json({ data: 'List not found' });
    }

    await list.delete();

    return response.status(204).json(null);
  }
}

module.exports = ListController;
