'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

// Route.on('/').render('welcome')

Route.group(() => {
  // Route.get('tasks', 'TaskController.index');
  // Route.get('task/:id', 'TaskController.show');
  // Route.post('task', 'TaskController.store');
  // Route.put('task/:id', 'TaskController.update');
  // Route.delete('task/:id', 'TaskController.delete');
  Route.get('all', 'UserController.getAll');
  Route.get('/:id', 'UserController.get');
  Route.post('/', 'UserController.post');
  Route.put('/:id', 'UserController.update');
  Route.delete('/:id', 'UserController.delete');
}).prefix('user');

Route.group(() => {
  Route.get('all', 'EmailController.getAll');
  Route.get('/:id', 'EmailController.get');
  Route.post('/', 'EmailController.post');
  Route.put('/:id', 'EmailController.update');
  // Route.post('/', 'EmailController.post').middleware(['emailValidator']);
  // Route.put('/:id', 'EmailController.update').middleware(['emailValidator']);
  Route.delete('/:id', 'EmailController.delete');
}).prefix('email');
