import React, { useContext, useState } from "react";
import { UsersContext } from "../context/UsersContext";

const NewUser = () => {
  const { setUsers } = useContext(UsersContext);
  const [name, setName] = useState("");

  const changeHander = (e) => {
    setName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = { id: new Date().getTime().toString(), username: name };
    // console.log(newUser)
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setName("");
  };
  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={submitHandler}>
        <label>User Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={changeHander}
          value={name}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default NewUser;
