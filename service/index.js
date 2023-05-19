const { createTodo, getSpecificTodo, updateTodo } = require('./todo.service');
const TodoModel = require('../database/models/todo.model.')

module.exports = {
    createTodo: createTodo(TodoModel),
    getSpecificTodo: getSpecificTodo(TodoModel),
    updateTodo: updateTodo(TodoModel)
}