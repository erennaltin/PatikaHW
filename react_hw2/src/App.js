import React from "react";
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";

import Input from "./components/Input";
import List from "./components/List";

function App() {
  const [todos, setTodos] = useState([
    { desc: "Ev", toggled: false },
    { desc: "İş", toggled: true },
  ]);
  const [filter, setFilter] = useState("All");

  return (
    <div className="app">
      <h1 className="title"> todos </h1>
      <div className="todoPanel">
        <Input todos={todos} setTodos={setTodos} />
        <List todos={todos} setTodos={setTodos} filter={filter} />
        <Footer
          todos={todos}
          setTodos={setTodos}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
    </div>
  );
}

export default App;
