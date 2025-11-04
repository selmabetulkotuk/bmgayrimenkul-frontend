import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

// 🌍 Backend URL — .env dosyasından al, yoksa localhost kullan
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "https://bmgayrimenkul-backend.onrender.com";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      verifyToken(token);
    } else {
      setLoading(false);
    }
  }, []);

  // 🧾 Token doğrulama (isteğe bağlı, backend'e eklenecek)
  const verifyToken = async (token) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/admin/verify`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data.user);
    } catch (error) {
      localStorage.removeItem("admin_token");
      delete axios.defaults.headers.common["Authorization"];
    } finally {
      setLoading(false);
    }
  };

  // 🔐 Giriş işlemi
  const login = async (username, password) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/admin/login`, {
        username,
        password,
      });

      // Backend bu aşamada token döndürmüyor, sadece success:true dönüyor.
      // Bu yüzden basit local storage kaydı yapıyoruz.
      const { success } = response.data;

      if (success) {
        localStorage.setItem("admin_token", "dummy_token");
        setUser({ username });
        return { success: true };
      } else {
        return { success: false, error: "Kullanıcı adı veya şifre hatalı" };
      }
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.detail || "Sunucuya bağlanılamadı",
      };
    }
  };

  // 🚪 Çıkış işlemi
  const logout = () => {
    localStorage.removeItem("admin_token");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook olarak dışa aktar
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
};
