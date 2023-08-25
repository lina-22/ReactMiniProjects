import React from "react";
import User from "./User";

const Users = ({ appusers, handleDeleteUserPassFrmApp }) => {
  return (
    <section className="usersapp">
      {appusers &&
        appusers.map((user) => (
          <User
            key={user.id}
            user={user}
            handleDeleteUserPassFromUsers={handleDeleteUserPassFrmApp}
          />
        ))}
    </section>
  );
};
export default Users;
