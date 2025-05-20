import { useState, useEffect } from 'react';

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
        <label>Search todos:</label>
        <input
          type="text"
          onChange={(e) => setLocalQueryString(e.target.value)}
          value={localQueryString}
        ></input>
        <button type="button" onClick={() => setLocalQueryString('')}>
          Clear
        </button>
      </div>
      <div>
        <label htmlFor="sort-by-select">Sort by</label>
        <select
          id="sort-by-select"
          onChange={(e) => setSortField(e.target.value)}
          value={sortField}
          name="sort-by-select"
        >
          <option value="title">Title</option>
          <option value="createdTime">Time added</option>
        </select>
        <label htmlFor="direction-select">Direction</label>
        <select
          id="direction-select"
          onChange={(e) => setSortDirection(e.target.value)}
          value={sortDirection}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
    </form>
  );
}

export default TodoViewForm;
