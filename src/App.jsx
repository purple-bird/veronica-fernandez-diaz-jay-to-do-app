import './App.css';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  function handleAddTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
