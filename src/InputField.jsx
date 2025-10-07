import React from "react";

function InputField({ label, type, name, value, onChange }) {
  return (
    <div>
      <label>
        {label}:{" "}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={`Enter ${label}`}
        />
      </label>
      <br />
    </div>
  );
}

export default InputField;
