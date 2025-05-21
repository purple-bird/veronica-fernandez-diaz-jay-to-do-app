import { useState, useRef } from 'react';
import TextInputWithLabel from '../shared/TextInputWithLabel';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-style: italic;
`;

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
      <StyledButton disabled={workingTodoTitle.trim() === '' || isSaving}>
        {isSaving ? 'Saving...' : 'Add Todo'}
      </StyledButton>
    </form>
  );
}

export default TodoForm;
