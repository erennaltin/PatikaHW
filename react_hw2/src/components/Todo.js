import React, { useEffect } from "react";
import { useState } from "react";

import { FiX } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";

export default function Todo({ todos, todo, setTodos }) {
  const [isHover, setHover] = useState(false);
  const [isToggled, setToggled] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [editTodo, setTodo] = useState("");

  useEffect(() => {
    setToggled(todo.toggled);
    setTodo(todo.desc);
  }, [todo, todos]);

  const deleteTodo = () => {
    const newList = todos.filter((item) => {
      return item.desc !== todo.desc ? true : false;
    });
    setTodos(newList);
  };

  const checkToggle = () => {
    const newTodos = todos.map((item) => {
      if (item === todo) {
        return { ...todo, toggled: !isToggled };
      }
      return item;
    });
    setTodos(newTodos);
  };

  useEffect(() => {
    const addTodo = (e) => {
      console.log(isEdit);
      if (e.key === "Enter" && isEdit && todos.find(item => item.desc === editTodo) === undefined) {
        const newTodos = todos.map((item) => {
          if (item.desc === todo.desc) {
            setEdit(false);
            return { ...todo, desc: editTodo };
          }
          setEdit(false);
          return item;
        });
        setTodos(newTodos);
        setEdit(false);
      }
    };

    document.addEventListener("keydown", addTodo);

    return () => {
      document.removeEventListener("keydown", addTodo);
    };
  }, [todos, setTodos, todo, editTodo, isEdit]);

  return (
    <div
      className="todo-item"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="checkBox" onClick={checkToggle}>
        <FiCheck
          className="checkButton"
          size="1.5rem"
          color={isToggled ? "green" : "white"}
        />
      </div>
      {isEdit ? (
        <input
          type="text"
          value={editTodo}
          onChange={(e) => setTodo(e.target.value)}
          data-todo="todo"
          onBlur={() =>
            document.dispatchEvent(
              new KeyboardEvent("keydown", { key: "Enter" })
            )
          }
        />
      ) : (
        <p
          className={isToggled ? "toggledTodo" : undefined}
          onClick={() => setEdit(true)}
        >
          {todo.desc}
        </p>
      )}
      {isHover && !isEdit && (
        <FiX
          size="2rem"
          color="#D64042"
          className="deleteButton"
          onClick={deleteTodo}
        />
      )}
    </div>
  );
}
