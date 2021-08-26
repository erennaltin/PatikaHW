import React from 'react'
import { useState, useEffect } from 'react';

import Todo from './Todo';

export default function List({todos, setTodos, filter}) {
  const [filteredList, setList] = useState([])
  
  useEffect(() => {
    setList(
          todos.filter((item) => {
            switch (filter) {
              case "All":
                return true;
              case "Active":
                return item.toggled ? false : true;
              case "Completed":
                return item.toggled ? true : false;
              default:
                return true;
            }
          })
        );
  }, [filter, todos])

  return (
    <div className="List">
      {filteredList.map((item,index) => {
        return (
          <Todo key={index} todo={item} todos={todos} setTodos={setTodos} />
        )
      })}
    </div>
  )
}

// useEffect(() => {
//   setTodos(
//     todos.filter((item) => {
//       switch (filter) {
//         case "All":
//           return true;
//         case "Active":
//           return item.toggled ? false : true;
//         case "Completed":
//           return item.toggled ? true : false;
//         default:
//           return true;
//       }
//     })
//   );
// }, [filter, setTodos]);