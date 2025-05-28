import TodoListItem from './TodoListItem.jsx';
import styles from './TodoList.module.css';

function TodoList({ todoList, onCompleteTodo, onUpdateTodo, isLoading }) {
  const filteredTodoList = todoList.filter((todo) => !todo.isCompleted);

  return (
    <>
      {isLoading ? (
        <p className={styles.loadingMessage}>Todo list loading...</p>
      ) : filteredTodoList.length === 0 ? (
        <p className={styles.addTodoMessage}>Add todo above to get started</p>
      ) : (
        <>
          <ul className={styles.list}>
            {filteredTodoList.map((todo) => (
              <TodoListItem
                key={todo.id}
                todo={todo}
                onCompleteTodo={onCompleteTodo}
                onUpdateTodo={onUpdateTodo}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default TodoList;
