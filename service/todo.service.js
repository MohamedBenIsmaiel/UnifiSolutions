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


module.exports = {
    createTodo,
}