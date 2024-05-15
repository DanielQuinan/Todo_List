import TodoItem from './TodoItem';
import styles from '../styles/Home.module.css';

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <ul className={styles.ul}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
