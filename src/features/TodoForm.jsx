import { useState, useRef } from 'react';
import TextInputWithLabel from '../shared/TextInputWithLabel';

function TodoForm({ onAddTodo, isSaving }) {
  const [workingTodoTitle, setWorkingTodoTitle] = useState('');
  const todoTitleInput = useRef('');

  function handleAddTodo(event) {
    event.preventDefault();

    const id = Date.now();
    onAddTodo({ title: workingTodoTitle, id, isCompleted: false });

    setWorkingTodoTitle('');

    todoTitleInput.current.focus();
  }

  return (
    <form onSubmit={handleAddTodo}>
      <TextInputWithLabel
        ref={todoTitleInput}
        value={workingTodoTitle}
        onChange={(e) => setWorkingTodoTitle(e.target.value)}
        elementId={'todoTitle'}
        labelText={'Todo'}
      />
      <button disabled={workingTodoTitle.trim() === '' || isSaving}>
        {isSaving ? 'Saving...' : 'Add Todo'}
      </button>
    </form>
  );
}

export default TodoForm;
