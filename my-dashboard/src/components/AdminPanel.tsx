import React from "react";
import "../styles/AdminPanel.css";

const AdminPanel: React.FC = () => {
  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <p>Welcome, Admin! Manage users and settings here.</p>
      <button>Manage Users</button>
    </div>
  );
};

export default AdminPanel;