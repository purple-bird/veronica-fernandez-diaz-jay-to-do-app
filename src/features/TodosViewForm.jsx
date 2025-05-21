import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: var(--primary-color);
  color: var(--text-secondary-color);
  border-color: var(--primary-color);
  margin-left: 0.2rem;
`;
const StyledSelect = styled.select`
  background: lightgray;
  padding: 0.5rem;
  margin: 1rem 0.5rem;
  font-family: var(--primary-font);
`;

const StyledLabel = styled.label`
  font-family: var(--primary-font);
`;

const StyledInput = styled.input`
  font-family: var(--primary-font);
`;

function TodoViewForm({
  sortDirection,
  setSortDirection,
  sortField,
  setSortField,
  queryString,
  setQueryString,
}) {
  const [localQueryString, setLocalQueryString] = useState(queryString);

  useEffect(() => {
    const debounce = setTimeout(() => setQueryString(localQueryString), 500);

    return () => clearTimeout(debounce);
  }, [localQueryString, setQueryString]);

  function preventRefresh(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={preventRefresh}>
      <div>
        <StyledLabel>Search todos:</StyledLabel>
        <StyledInput
          type="text"
          onChange={(e) => setLocalQueryString(e.target.value)}
          value={localQueryString}
        ></StyledInput>
        <StyledButton type="button" onClick={() => setLocalQueryString('')}>
          Clear
        </StyledButton>
      </div>
      <div>
        <StyledLabel htmlFor="sort-by-select">Sort by</StyledLabel>
        <StyledSelect
          id="sort-by-select"
          onChange={(e) => setSortField(e.target.value)}
          value={sortField}
          name="sort-by-select"
        >
          <option value="title">Title</option>
          <option value="createdTime">Time added</option>
        </StyledSelect>
        <StyledLabel htmlFor="direction-select">Direction</StyledLabel>
        <StyledSelect
          id="direction-select"
          onChange={(e) => setSortDirection(e.target.value)}
          value={sortDirection}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </StyledSelect>
      </div>
    </form>
  );
}

export default TodoViewForm;
