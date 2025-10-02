// import { useState } from "react";

// export default function RadioInput() {
//   const [choice, setChoice] = useState("");

//   return (
//     <div>
//       <label>
//         <input
//           type="radio"
//           value="Male"
//           checked={choice === "Male"}
//           onChange={(e) => setChoice(e.target.value)}
//         />
//         Male
//       </label>
//       <label>
//         <input
//           type="radio"
//           value="Female"
//           checked={choice === "Female"}
//           onChange={(e) => setChoice(e.target.value)}
//         />
//         Female
//       </label>

//       <p>Selected: {choice}</p>
//     </div>
//   );
// } 

import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload            
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

