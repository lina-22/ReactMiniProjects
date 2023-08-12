import React from "react";
import Todos from "./Todos";

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
    <div>
      <Todos todos={dummyTodos} />
    </div>
  );
}
