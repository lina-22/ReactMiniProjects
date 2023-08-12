import React from "react";
import Todo from "./Todo";

export default function Todos(props) {
  const { todos } = props;

  return (
    <div>
      <section>
        <article>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </article>
      </section>
    </div>
  );
}
