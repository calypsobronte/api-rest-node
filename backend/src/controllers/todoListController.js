const TodoList = require("../models/TodoList");

const todoListController = {};

todoListController.all = async (req, res) => {
  	await TodoList.find({}, (err, todoList) => {
  		res.json(todoList);
  	});
};

todoListController.create = async (req, res, next) => {
  	const todolist = new TodoList(req.body);
	await todolist.save();
  	//res.redirect('/');
  	res.json({ response: "La lista se creo con exito" });
};

todoListController.selectForId = async (req, res, next) => {
	let { id } = req.params;
	await TodoList.findOne({_id: id}).exec((err, todoList) => {
	//res.redirect('/');
	res.json(todoList)
	});
};

todoListController.update = async (req, res, next) => {
  	const { id } = req.params;
  	await TodoList.findOneAndUpdate({_id: id}, { $set: { isComplete: req.body.isComplete} }, { new: true });
	//res.redirect('/');
	res.json({ response: "La lista se actualizo con exito" });
};

todoListController.delete = async (req, res, next) => {
	let { id } = req.params;
	await TodoList.remove({_id: id});
	//res.redirect('/');
	res.json({ response: "La lista se elimino con exito" });
};

module.exports = todoListController;

