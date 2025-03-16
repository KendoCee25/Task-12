import { createContext, useContext, useState, ReactNode } from "react";

type User = { username: string; role: "Admin" | "Editor" | "Viewer" } | null;

interface AuthContextType {
  user: User;
  login: (username: string, role: "Admin" | "Editor" | "Viewer") => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  const login = (username: string, role: "Admin" | "Editor" | "Viewer") => {
    setUser({ username, role });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

// import React, { createContext, useState, ReactNode } from "react";

// type User = {
//   username: string;
//   role: "Admin" | "Editor" | "Viewer";
// };

// type AuthContextType = {
//   user: User | null;
//   login: (username: string, role: "Admin" | "Editor" | "Viewer") => void;
//   logout: () => void;
// };

// export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);

//   const login = (username: string, role: "Admin" | "Editor" | "Viewer") => {
//     setUser({ username, role });
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };