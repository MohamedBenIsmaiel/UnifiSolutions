const todoService = require('../service/index');
class TodoController{
    constructor(){}

    async createTodo(req, res){
        const { title, description, completed } = req.body;
        const result = await todoService.createTodo({title, description, completed})
        res.json(result);
    }
}

module.exports = TodoController;