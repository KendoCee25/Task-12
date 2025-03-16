import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav style={{ background: "#333", padding: "10px", color: "white" }}>
      <h1><i>Kendocee</i> </h1>
      <Link to="/dashboard" style={{ margin: "0 10px", color: "white" }}>Dashboard</Link>
      <Link to="/profile" style={{ margin: "0 10px", color: "white" }}>Profile</Link>
      {user?.role === "Admin" && <Link to="/settings" style={{ margin: "0 10px", color: "white" }}>Settings</Link>}
      <button onClick={logout} style={{ marginLeft: "20px", padding: "5px 10px", backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s ease" }}>Logout</button>
    </nav>
  );
};

export default Navbar;