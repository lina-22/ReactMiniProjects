import React from "react";
import Todos from "./Todos";
import style from "./home.module.css";

const dummyTodos = [
  {
    id: 1,
    title: "toDo title",
    desc: "todo description1",
  },
  {
    id: 2,
    title: "toDo title2",
    desc: "todo description2",
  },
];

export default function Home() {
  return (
    <div className={style.container}>
      <h1 style={{ color: "white" }}>Todo App</h1>
      <Todos todos={dummyTodos} />
    </div>
  );
}
