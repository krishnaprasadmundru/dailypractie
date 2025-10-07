import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h3>User Name: {user}</h3>
      <button onClick={() => setUser("NewKrishna")}>
        Change Name
      </button>
    </div>
  );
}

export default Profile;
