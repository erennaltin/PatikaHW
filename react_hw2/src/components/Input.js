import React from "react";
import { useState, useEffect } from "react";

import { FiChevronDown } from "react-icons/fi";

export default function Input({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  const [isFocus, setFocus] = useState(false);
  const toggledLength = todos.filter((item) =>
    item.toggled ? true : false
  ).length;

  useEffect(() => {
    const addTodo = (e) => {
      if (e.key === "Enter" && isFocus && todos.find(item => item.desc === todo) === undefined) {
        setTodos([{ desc: todo, toggled: false }, ...todos]);
        setTodo("");
      }
    };

    document.addEventListener("keydown", addTodo);

    return () => {
      document.removeEventListener("keydown", addTodo);
    };
  }, [todos, setTodos, todo, isFocus]);

  const toggleAll = () => {
    const newTodos = todos.map((item) => {
      return { ...item, toggled: true };
    });
    setTodos(newTodos);
  };

  return (
    <div className="Input">
      <FiChevronDown
        size="2rem"
        color={
          toggledLength === todos.length ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.2)"
        }
        onClick={toggleAll}
      />
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="What needs to be done?"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  );
}
