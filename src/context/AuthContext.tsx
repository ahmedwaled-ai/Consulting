import { createContext,  useState, type ReactNode } from 'react';
import { api } from '../api/axios';
import axios from 'axios';

// Interfaces
export interface User { id: string; email: string; name: string; role: 'user' | 'admin'; }
interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
  loading: boolean;
}

// إنشاء الـ Context
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(undefined);



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
      // ⚠️ تأكد لو الباك إند بيستخدم full_name
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