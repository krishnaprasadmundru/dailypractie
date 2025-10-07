import React, { useState } from "react";
import InputField from "./InputField"; // ✅ import added

function FormValidation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("⚠️ All fields are required!");
      return;
    }

    if (!formData.email.includes("@")) {
      alert("❌ Invalid email format!");
      return;
    }

    alert("✅ Form submitted successfully!");
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Using normal input for Name */} 
    <InputField
    label="Name"
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
  />
     

      {/* Using reusable InputField for Email and Password */}
      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <InputField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormValidation;
