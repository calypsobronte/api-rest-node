const { Router } = require('express');
const router = Router();

//import
const todoList = require('../controllers/todoListController.js');

//routes
router.get('/', todoList.all);
router.get('/:id', todoList.selectForId);
router.post('/create', todoList.create);
router.post('/update/:id', todoList.update);
router.delete('/delete/:id', todoList.delete);

module.exports = router;
