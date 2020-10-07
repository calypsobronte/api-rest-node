const TodoList = require("../models/TodoList");

const todoListController = {};

todoListController.all = async (req, res) => {
  	await TodoList.find({}, (err, todoList) => {
  		res.json(todoList);
  	});
};

todoListController.create = async (req, res) => {
  	const todolist = new TodoList(req.body);
	await todolist.save();
  	res.json({ response: "La lista se creo con exito" });
};

todoListController.selectForId = async (req, res) => {
	let { id } = req.params;
	await TodoList.findOne({_id: id}).exec((err, todoList) => {
	res.json(todoList)
	});
};

todoListController.update = async (req, res) => {
  	const { id } = req.params;
  	await TodoList.findOneAndUpdate({_id: id}, { $set: { isComplete: req.body.isComplete} }, { new: true });
	res.json({ response: "La lista se actualizo con exito" });
};

todoListController.delete = async (req, res) => {
	let { id } = req.params;
	await TodoList.remove({_id: id});
	res.json({ response: "La lista se elimino con exito" });
};

module.exports = todoListController;

