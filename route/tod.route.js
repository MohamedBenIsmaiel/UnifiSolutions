const express = require('express');
const todoController = require('../controller/index');
const router = express.Router();

router.post('/', todoController.createTodo)
router.get('/:id', todoController.getSpecificTodo)
router.put('/:id', todoController.updateTodo)


module.exports = router;