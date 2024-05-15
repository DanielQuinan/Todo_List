let todos = [];
let id = 1;

class Todo {
  constructor(text) {
    this.id = id++;
    this.text = text;
    this.completed = false;
  }
  
  static getAll() {
    return todos;
  }
  
  static add(todo) {
    todos.push(todo);
  }
  
  static remove(id) {
    todos = todos.filter(todo => todo.id !== id);
  }
  
  static toggleComplete(id) {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}

module.exports = Todo;
