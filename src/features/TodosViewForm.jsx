function TodoViewForm({
  sortDirection,
  setSortDirection,
  sortField,
  setSortField,
  queryString,
  setQueryString,
}) {
  function preventRefresh(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={preventRefresh}>
      <div>
        <label>Search todos:</label>
        <input
          type="text"
          onChange={(e) => setQueryString(e.target.value)}
          value={queryString}
        ></input>
        <button type="button" onClick={() => setQueryString('')}>
          Clear
        </button>
      </div>
      <div>
        <label htmlFor="sort-by-select">Sort by</label>
        <select
          id="sort-by-select"
          onChange={(e) => setSortField(e.target.value)}
          value={sortField}
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
