const { createTodo, getSpecificTodo, updateTodo, deleteTodo } = require('./todo.service');
const TodoModel = require('../database/models/todo.model.')

module.exports = {
    createTodo: createTodo(TodoModel),
    getSpecificTodo: getSpecificTodo(TodoModel),
    updateTodo: updateTodo(TodoModel),
    deleteTodo: deleteTodo(TodoModel),
}