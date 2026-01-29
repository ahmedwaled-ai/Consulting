// src/context/AuthContext.ts
import { createContext, useContext } from 'react';

// 1. تعريف شكل المستخدم
export interface User { 
  id: string; 
  email: string; 
  name: string; 
  role: 'user' | 'admin'; 
}

// 2. تعريف شكل الـ Context
export interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
  loading: boolean;
}

// 3. إنشاء الـ Context وتصديره
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 4. ✅ إضافة وتصدير الـ Hook من هنا عشان يتحل خطأ الـ SyntaxError
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}