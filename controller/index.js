const TodoController  = require('./todo.controller');
const  todoService  = require('../service/index');

const todoController = new TodoController(todoService);
module.exports = todoController;