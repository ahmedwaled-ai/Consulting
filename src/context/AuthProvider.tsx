// src/context/AuthProvider.tsx
import { useState, type ReactNode } from 'react';
import { api } from '../api/axios';
import axios from 'axios';
import { AuthContext, type User } from './AuthContext'; // 👈 استيراد من الملف اللي عملناه فوق

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('user');
    try { return saved ? JSON.parse(saved) : null; } catch { return null; }
  });
  const [loading] = useState(false);

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      const { access_token, user: userData } = response.data;
      setToken(access_token);
      setUser(userData);
      localStorage.setItem('token', access_token);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) throw new Error(error.response?.data?.detail || 'Login failed');
      throw new Error('An unexpected error occurred');
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const response = await api.post('/auth/register', { full_name: name, email, password });
      const { access_token, user: userData } = response.data;
      setToken(access_token);
      setUser(userData);
      localStorage.setItem('token', access_token);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) throw new Error(error.response?.data?.detail || 'Registration failed');
      throw new Error('An unexpected error occurred');
    }
  };

  const logout = () => {
    setUser(null); setToken(null);
    localStorage.removeItem('token'); localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, isAuthenticated: !!user, isAdmin: user?.role === 'admin', loading }}>
      {children}
    </AuthContext.Provider>
  );
}
// ⚠️ مفيش أي export تاني في الملف ده غير الـ AuthProvider