'use strict';

const List = use('App/Models/List');

class ListController {
  async getAll({ response }) {
    // let lists = await List.all();
    let lists = await List.query()
      .with('users')
      .fetch();

    // return response.json(lists);

    return response.status(200).json({
      message: 'Here are your lists',
      data: lists
    });
  }

  //   async get({ params, response }) {
  //     const list = await List.find(params.id);

  //     return response.json(list);
  //   }

  //   async post({ request, response }) {
  //     const listName = request.only(['name']);

  //     const list = new List();
  //     list.name = listName.name;

  //     await list.save();

  //     return response.status(201).json(list);
  //   }

  //   async update({ params, request, response }) {
  //     const listName = request.only(['name']);

  //     const list = await List.find(params.id);

  //     if (!list) {
  //       return response.status(404).json({ data: 'List not found' });
  //     }

  //     list.name = listName.name;

  //     await list.save();

  //     return response.status(200).json(list);
  //   }

  //   async delete({ params, response }) {
  //     const list = await List.find(params.id);

  //     if (!list) {
  //       return response.status(404).json({ data: 'List not found' });
  //     }

  //     await list.delete();

  //     return response.status(204).json(null);
  //   }
}

module.exports = ListController;
