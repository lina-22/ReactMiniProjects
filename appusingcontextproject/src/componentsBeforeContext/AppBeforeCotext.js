// import React, { useState } from "react";
// import "./App.css";
// import Users from "./components/Users";
// import NewUser from "./components/NewUser";

// const App = () => {
//   const [users, setUsers] = useState([
//     { id: 1, username: "Mark" },
//     { id: 2, username: "John" },
//   ]);

//   const handleDeleteUser = (id) => {
//     // console.log(id);
//     const filterUsers = users.filter((user) => user.id !== id);

//     setUsers(filterUsers);
//   };

//   const handleAddNewUser = (userkk) => {
//     // console.log(userkk);
//     setUsers((prevUsers) => [...prevUsers, userkk]);
//   };
//   return (
//     <div className="App">
//       <NewUser handleAddNewUserApp={handleAddNewUser} />
//       <Users appusers={users} handleDeleteUserPassFrmApp={handleDeleteUser} />
//     </div>
//   );
// };

// export default App;

// //CRD-- create, red, delete
// //useContext()
// //createContext()
