// import { useAuth } from "../context/AuthContext";
// import AdminPanel from "../components/AdminPanel.tsx";
// import EditorPanel from "../components/EditorPanel";
// import ViewerPanel from "../components/ViewerPanel";

// const Dashboard = () => {
//   const { user } = useAuth();

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       {user?.role === "Admin" && <AdminPanel />}
//       {user?.role === "Editor" && <EditorPanel />}
//       {user?.role === "Viewer" && <ViewerPanel />}
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Welcome, {user?.username}!</h2>
      <p>Your Role: {user?.role}</p>
    </div>
  );
};

export default Dashboard;