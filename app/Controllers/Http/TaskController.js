'use strict';

const Task = use('App/Models/Task');

class TaskController {
  async index({ response }) {
    let tasks = await Task.all();
    // console.log(tasks);
    return response.json(tasks);
  }

  async store({ request, response }) {
    const taskInfo = request.only(['task_name']);

    const task = new Task();
    task.task_name = taskInfo.task_name;

    await task.save();

    return response.status(201).json(task);
  }

  async show({ params, response }) {
    const task = await Task.find(params.id);

    return response.json(task);
  }
}

module.exports = TaskController;
