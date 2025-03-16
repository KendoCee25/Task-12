import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

const ProtectedRoute = ({ element, allowedRoles }: { element: JSX.Element; allowedRoles: string[] }) => {
  const { user } = useAuth();
  return user && allowedRoles.includes(user.role) ? element : <Navigate to="/dashboard" />;
};

const App = () => {
  const { user } = useAuth();

  return (
    <Router>
      {user && <Navbar />} {/* Navbar only appears when logged in */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<ProtectedRoute element={<Settings />} allowedRoles={["Admin"]} />} />
      </Routes>
    </Router>
  );
};

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AdminPanel from "./components/AdminPanel";
// import EditorPanel from "./components/EditorPanel";
// import ViewerPanel from "./components/ViewerPanel";
// import Profile from "./pages/Profile";
// import Settings from "./pages/Settings";
// import Login from "./pages/Login";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin" element={<AdminPanel />} />
//         <Route path="/editor" element={<EditorPanel />} />
//         <Route path="/viewer" element={<ViewerPanel />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/settings" element={<Settings />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;