import React from "react";

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type something" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
