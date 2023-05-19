const { 
    createTodo, 
    getSpecificTodo, 
    updateTodo, 
    deleteTodo,
    getTodos,
} = require('./todo.service');

const TodoModel = require('../database/models/todo.model.')

module.exports = {
    createTodo: createTodo(TodoModel),
    getSpecificTodo: getSpecificTodo(TodoModel),
    updateTodo: updateTodo(TodoModel),
    deleteTodo: deleteTodo(TodoModel),
    getTodos: getTodos(TodoModel),
}