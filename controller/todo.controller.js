const todoService = require('../service/index');
class TodoController {
    constructor() { }

    async createTodo(req, res, next) {
        try {
            const { title, description, completed } = req.body;
            const result = await todoService.createTodo({ title, description, completed })
            res.json(result);
        } catch (err) {
            next(err)
        }
    }

    async getSpecificTodo(req, res, next) {
        try {
            const { id: todoId } = req.params;
            const result = await todoService.getSpecificTodo({ todoId })
            result ? res.json(result) : res.status(404).json({ error: `todo with id ${todoId} not found ` })
        } catch (err) {
            next(err)
        }
    }

    async updateTodo(req, res, next) {
        try {
            const { id: todoId } = req.params;
            const { title, description, completed } = req.body;
            const result = await todoService.updateTodo({ todoId, title, description, completed })

            if(result && result.msg && result.status){
                res.status(404)
                res.json({err: result.msg} )
                return;
            }
            res.json(result);
        } catch (err) {
            next(err)
        }
    }

    async deleteTodo(req, res, next) {
        try {
            const { id: todoId } = req.params;
            const result = await todoService.deleteTodo({ todoId })
            result ? res.json(result) : res.status(404).json({ error: `todo with id ${todoId} not found ` })
        } catch (err) {
            next(err)
        }
    }

    async getTodos(req, res, next) {
        try {
            const result = await todoService.getTodos()
            res.json(result);
        } catch (err) {
            next(err)
        }
    }

}

module.exports = TodoController;