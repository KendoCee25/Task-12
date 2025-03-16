import React from "react";
import { useAuth } from "../context/AuthContext";

const LogoutButton: React.FC = () => {
  const { logout } = useAuth();

  return (
    <button
      onClick={logout}
      style={{
        padding: "10px 20px",
        backgroundColor: "#e74c3c",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;