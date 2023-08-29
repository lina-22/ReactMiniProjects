import React from "react";
import { useUsersContext } from "../hooks/useUsersContext";

const User = ({ user }) => {
  const { state, dispatch } = useUsersContext();
  const { id, username } = user;
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };
  return (
    <article className="user">
      <h2>{id}</h2>
      <p>{username}</p>
      <button
        onClick={() => {
          handleDelete(id);
        }}>
        Delete
      </button>
    </article>
  );
};
export default User;
