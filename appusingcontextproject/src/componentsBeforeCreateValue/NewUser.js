import React, { useState } from "react";
import { useUsersContext } from "../hooks/useUsersContext";

const NewUser = () => {
  const { state, dispatch } = useUsersContext();
  const [name, setName] = useState("");

  const changeHander = (e) => {
    setName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = { id: new Date().getTime().toString(), username: name };
    // console.log(newUser)
    dispatch({ type: "ADD_USER", payload: newUser });
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
