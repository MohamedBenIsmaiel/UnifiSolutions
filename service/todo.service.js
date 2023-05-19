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

function updateTodo(TodoModel) {

    return async function ({ todoId, title, description, completed }) {
        const updatedTodo = await TodoModel.findByIdAndUpdate(todoId, {
            title,
            description,
            completed
        }, { new: true });

        if (!updatedTodo) {
            throw new Error(`todo with id ${todoId} not found !`)
        }
        return updatedTodo;
    }
}




module.exports = {
    createTodo,
    getSpecificTodo,
    updateTodo,
}