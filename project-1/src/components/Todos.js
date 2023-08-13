import React from "react";
import Todo from "./Todo";
import style from "./todos.module.css";

export default function Todos(props) {
  const { todos } = props;

  return (
    <div>
      <section className={style.todos}>
        <article>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo.todo}
              id={todo.id}
              onRemoveItem={props.onRemoveTodo}
            />
          ))}
        </article>
      </section>
    </div>
  );
}
