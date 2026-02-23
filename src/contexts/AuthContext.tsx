import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export type UserRole = 'admin' | 'judge' | 'team';

interface User {
  token: string;
  role: UserRole;
  name?: string;
  email?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ROLE_REDIRECTS: Record<UserRole, string> = {
  admin: '/admin/dashboard',
  judge: '/judge/dashboard',
  team: '/team/dashboard',
};

// Simulated login responses for demo
const MOCK_USERS: Record<string, { token: string; role: UserRole; name: string }> = {
  'admin@competitionx.com': { token: 'mock-admin-token', role: 'admin', name: 'Admin User' },
  'judge@competitionx.com': { token: 'mock-judge-token', role: 'judge', name: 'Judge User' },
  'team@competitionx.com': { token: 'mock-team-token', role: 'team', name: 'Team Alpha' },
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role') as UserRole | null;
    const name = localStorage.getItem('userName');
    if (token && role) {
      setUser({ token, role, name: name || undefined });
    }
  }, []);

  const login = useCallback(async (email: string, _password: string) => {
    // Simulate API call
    const mockUser = MOCK_USERS[email];
    if (!mockUser) {
      // Default to team role for any email
      const defaultUser = { token: 'mock-token-' + Date.now(), role: 'team' as UserRole, name: email.split('@')[0] };
      localStorage.setItem('token', defaultUser.token);
      localStorage.setItem('role', defaultUser.role);
      localStorage.setItem('userName', defaultUser.name);
      setUser(defaultUser);
      navigate(ROLE_REDIRECTS[defaultUser.role]);
      return;
    }

    localStorage.setItem('token', mockUser.token);
    localStorage.setItem('role', mockUser.role);
    localStorage.setItem('userName', mockUser.name);
    setUser(mockUser);
    navigate(ROLE_REDIRECTS[mockUser.role]);
  }, [navigate]);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userName');
    setUser(null);
    navigate('/login');
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
