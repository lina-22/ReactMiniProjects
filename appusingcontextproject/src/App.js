import React from "react";
import "./App.css";
import Users from "./components/Users";
import NewUser from "./components/NewUser";
import UsersProvider from "./context/UsersContext";

const App = () => {
  return (
    <UsersProvider>
      <div className="App">
        <NewUser />
        <Users />
      </div>
    </UsersProvider>
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
