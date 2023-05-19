const { createTodo, getSpecificTodo } = require('./todo.service');
const TodoModel = require('../database/models/todo.model.')

module.exports = {
    createTodo: createTodo(TodoModel),
    getSpecificTodo: getSpecificTodo(TodoModel),
}