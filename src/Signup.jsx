import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignupSubmit, resetSignup } from "./SignupSlice";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "" });
  const dispatch = useDispatch();
  const { loading, success, error, data } = useSelector((state) => state.signup);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SignupSubmit(form));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {success && (
        <p style={{ color: "green" }}>
           Signup Success! User ID: {data.id}
        </p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {(success || error) && (
        <button onClick={() => dispatch(resetSignup())}>Reset</button>
      )}
    </div>
  );
}

export default Signup;
