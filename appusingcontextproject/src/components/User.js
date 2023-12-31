import React from "react";
import { useUsersContext } from "../hooks/useUsersContext";

const User = ({ user }) => {
  const { deleteUser } = useUsersContext();
  const { id, username } = user;
  const handleDelete = (id) => {
    deleteUser(id);
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
