import React, { useState } from "react";
import "./App.css";
import Users from "./components/Users";
import NewUser from "./components/NewUser";
import { UsersContext } from "./context/UsersContext";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "Mark" },
    { id: 2, username: "John" },
  ]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <div className="App">
        <NewUser />
        <Users />
      </div>
    </UsersContext.Provider>
  );
};

export default App;

//CRD-- create, red, delete
//useContext()
//createContext()

//*****Context use roles */
//1. create context
//2. provide the context
//3. use the context
