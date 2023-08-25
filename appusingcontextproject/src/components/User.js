import React, { useContext } from "react";
import Users from "./Users";
import { UsersContext } from "../context/UsersContext";

const User = ({ user }) => {
  const { users, setUsers } = useContext(UsersContext);
  const { id, username } = user;
  const handleDelete = (id) => {
    // console.log(id);
    const filterUsers = users.filter((user) => user.id !== id);
    setUsers(filterUsers);
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
