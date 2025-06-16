import TodoList from '../features/TodoList/TodoList.jsx';
import TodoForm from '../features/TodoForm.jsx';
import TodosViewForm from '../features/TodosViewForm.jsx';

function TodosPage({
  handleAddTodo,
  todoState,
  completeTodo,
  updateTodo,
  sortDirection,
  setSortDirection,
  sortField,
  setSortField,
  queryString,
  setQueryString,
}) {
  return (
    <div>
      <TodoForm onAddTodo={handleAddTodo} isSaving={todoState.isSaving} />
      <TodoList
        todoList={todoState.todoList}
        onCompleteTodo={completeTodo}
        onUpdateTodo={updateTodo}
        isLoading={todoState.isLoading}
        isSaving={todoState.isSaving}
      />
      <hr />
      <TodosViewForm
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
        sortField={sortField}
        setSortField={setSortField}
        queryString={queryString}
        setQueryString={setQueryString}
      />
    </div>
  );
}

export default TodosPage;
