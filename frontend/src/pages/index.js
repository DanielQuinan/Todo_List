import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from '../components/TodoList';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []);

  const addTodo = () => {
    axios.post('http://localhost:3001/todos', { text: newTodo })
      .then(response => {
        setTodos([...todos, response.data]);
        setNewTodo('');
      })
      .catch(error => console.error(error));
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3001/todos/${id}`)
      .then(() => setTodos(todos.filter(todo => todo.id !== id)))
      .catch(error => console.error(error));
  };

  const toggleTodo = (id) => {
    axios.patch(`http://localhost:3001/todos/${id}`)
      .then(() => setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
      .catch(error => console.error(error));
  };

  return (
    <div className={styles.container}>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
        className={styles.input}
      />
      <button onClick={addTodo} className={styles.button}>Add</button>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}
