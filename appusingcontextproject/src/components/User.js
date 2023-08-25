import React from "react";
import Users from "./Users";

const User = ({ user, handleDeleteUserPassFromUsers }) => {
  const { id, username } = user;

  const handleDelete = (id) => {
    // console.log(id);
    handleDeleteUserPassFromUsers(id);
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
