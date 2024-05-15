import styles from '../styles/Home.module.css';

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <li className={styles.li}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className={styles.checkbox}
      />
      <span
        className={styles.span}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)} className={styles.button}>Delete</button>
    </li>
  );
};

export default TodoItem;
