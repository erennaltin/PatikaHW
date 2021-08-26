import React from "react";

export default function Footer({ todos, setTodos, filter, setFilter }) {
  const length = todos.filter((item) => (item.toggled ? false : true)).length;
  const toggledLength = todos.filter((item) => (item.toggled ? true : false)).length;

  const chooseFilter = (e) => {
    setFilter(e.target.id);
  };

  const clearToggleds = () => {
    const newTodos = todos.filter((item) => (item.toggled ? false : true));
    setTodos(newTodos);
  };

  return (
    <div className="footer">
      <p> {length} items left </p>
      <div className="filterButtons">
        <p
          id="All"
          className={filter === "All" ? "selected" : undefined}
          onClick={chooseFilter}
        >
          All
        </p>
        <p
          id="Active"
          className={filter === "Active" ? "selected" : undefined}
          onClick={chooseFilter}
        >
          Active
        </p>
        <p
          id="Completed"
          className={filter === "Completed" ? "selected" : undefined}
          onClick={chooseFilter}
        >
          Completed
        </p>
      </div>
      <p onClick={clearToggleds} className={toggledLength === 0 ? "hidden" : undefined}> Clear Completed </p>
    </div>
  );
}
