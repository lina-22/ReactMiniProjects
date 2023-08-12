import React from "react";

export default function Todo(props) {
  const { title, desc, id } = props.todo;
  return (
    <article>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <button>
        <i className="fa fa-trash fa-2x"></i>
      </button>
    </article>
  );
}
