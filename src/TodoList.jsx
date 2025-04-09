import TodoListItem from './TodoListItem.jsx';

function TodoList({ todoList }) {
  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
