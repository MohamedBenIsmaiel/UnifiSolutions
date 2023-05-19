const express = require('express');
const todoController = require('../controller/index');
const router = express.Router();

router.post('/', todoController.createTodo)

module.exports = router;