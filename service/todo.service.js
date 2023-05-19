function createTodo(TodoModel) {

    return async function ({ title, description, completed }) {
        const todo = new TodoModel({
            title,
            description,
            completed
        });
        return todo.save()
    }
}

function getSpecificTodo(TodoModel) {

    return async function ({ todoId }) {
        return TodoModel.findById(todoId)
    }
}


module.exports = {
    createTodo,
    getSpecificTodo,
}