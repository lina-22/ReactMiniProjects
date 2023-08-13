import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todos from "./Todos";
import NewTodo from "./NewTodo.js";
import style from "./home.module.css";

// const dummyTodos = [
//   {
//     id: 1,
//     title: "toDo title",
//     desc: "todo description1",
//   },
//   {
//     id: 2,
//     title: "toDo title2",
//     desc: "todo description2",
//   },
// ];

export default function Home() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };
  const handleRemoveTodo = (id) => {
    // alert(id);

    setTodos((prevTodos) => {
      const filteredTodos = todos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };
  return (
    <div className={style.container}>
      <h1 style={{ color: "white" }}>Todo App</h1>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
}
