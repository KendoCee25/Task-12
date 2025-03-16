// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const Login = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [role, setRole] = useState("Viewer");

//   const handleLogin = () => {
//     login(username, role as "Admin" | "Editor" | "Viewer");
//     navigate("/dashboard");
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} /> 
//       <br />
//       <select onChange={(e) => setRole(e.target.value)}>
//         <option value="Viewer">Viewer</option>
//         <option value="Editor">Editor</option>
//         <option value="Admin">Admin</option>
//       </select>
//       <br />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import the CSS file for styling

const Login = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("Viewer");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      login(username, role as "Admin" | "Editor" | "Viewer");
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;