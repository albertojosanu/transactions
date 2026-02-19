import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

const checkLs = () => {
  const storedUser = localStorage.getItem("userInfo");
  return storedUser ? JSON.parse(storedUser) : null;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(checkLs());

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("userInfo");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных из localStorage:", error);
    }
  }, []);

  const updateUserInfo = (userData) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem("userInfo", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userInfo");
    }
  };

  const login = (loginData) => {
    updateUserInfo(loginData);
    return true;
  };

  const logout = () => {
    updateUserInfo(null);
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
