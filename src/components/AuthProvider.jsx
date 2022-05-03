import React, { useState, useEffect } from "react";
import AuthContext from "../AuthContext";
import { fetchUser } from "../axios-services/users";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "guest" });
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    async function getUser() {
      if (localStorage.getItem("token")) {
        const newUser = await fetchUser(token);
        setUser(newUser);
      } else {
        setUser({ username: "guest" });
      }
    }
    getUser();
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
