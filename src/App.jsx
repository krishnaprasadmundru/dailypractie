import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./authSlice";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const isLoggedIn = auth?.isLoggedIn || false;
  const username = auth?.username || "";

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {isLoggedIn ? (
        <>
          <h2>Welcome, {username} </h2>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please Login</h2>
          <button onClick={() => dispatch(login("Krishnaprasad"))}>
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default App;
