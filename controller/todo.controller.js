const todoService = require('../service/index');
class TodoController{
    constructor(){}

    async createTodo(req, res){
        const { title, description, completed } = req.body;
        const result = await todoService.createTodo({title, description, completed})
        res.json(result);
    }

    async getSpecificTodo(req, res) {
        const {id: todoId} = req.params;
        const result = await todoService.getSpecificTodo({todoId})
        result ? res.json(result) : res.status(404).json({error : `todo with id ${todoId} not found `})
    }
}

module.exports = TodoController;