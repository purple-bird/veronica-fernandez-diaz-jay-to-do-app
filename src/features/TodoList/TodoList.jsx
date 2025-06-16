import TodoListItem from './TodoListItem.jsx';
import styles from './TodoList.module.css';
import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router';

function TodoList({ todoList, onCompleteTodo, onUpdateTodo, isLoading }) {
  const filteredTodoList = todoList.filter((todo) => !todo.isCompleted);

  const [searchParams, setSearchParams] = useSearchParams();
  const itemsPerPage = 15;
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const indexOfFirstTodo = (currentPage - 1) * itemsPerPage;
  const totalPages = Math.ceil(filteredTodoList.length / itemsPerPage);

  const currentTodos = filteredTodoList.slice(
    indexOfFirstTodo,
    indexOfFirstTodo + itemsPerPage
  );

  const navigate = useNavigate();

  function handlePreviousPage() {
    const page = Math.max(currentPage - 1, 1);
    setSearchParams({ page: page.toString() });
  }

  function handleNextPage() {
    const page = Math.min(currentPage + 1, totalPages);
    setSearchParams({ page: page.toString() });
  }

  useEffect(() => {
    if (totalPages > 0) {
      if (isNaN(currentPage) || currentPage < 1 || currentPage > totalPages) {
        navigate('/');
      }
    }
  }, [currentPage, totalPages, navigate]);

  return (
    <>
      {isLoading ? (
        <p className={styles.loadingMessage}>Todo list loading...</p>
      ) : filteredTodoList.length === 0 ? (
        <p className={styles.addTodoMessage}>Add todo above to get started</p>
      ) : (
        <>
          <ul className={styles.list}>
            {currentTodos.map((todo) => (
              <TodoListItem
                key={todo.id}
                todo={todo}
                onCompleteTodo={onCompleteTodo}
                onUpdateTodo={onUpdateTodo}
              />
            ))}
          </ul>
          <div className="paginationControls">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default TodoList;
