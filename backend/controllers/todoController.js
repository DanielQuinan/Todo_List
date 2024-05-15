const Todo = require('../models/todo');

exports.getTodos = (req, res) => {
  res.json(Todo.getAll());
};

exports.addTodo = (req, res) => {
  const { text } = req.body;
  const newTodo = new Todo(text);
  Todo.add(newTodo);
  res.json(newTodo);
};

exports.deleteTodo = (req, res) => {
  const { id } = req.params;
  Todo.remove(parseInt(id));
  res.sendStatus(204);
};

exports.toggleTodo = (req, res) => {
  const { id } = req.params;
  Todo.toggleComplete(parseInt(id));
  res.sendStatus(200);
};
