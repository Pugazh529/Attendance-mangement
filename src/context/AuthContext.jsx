import React, { createContext, useState, useEffect } from 'react';

// Create context
export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem('IsLoggin') === "true"
  );
  // Save login state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('IsLoggin', isLogin);
  }, [isLogin]);

  const login = () => setIsLogin(true);
  const logout = () => setIsLogin(false);

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

