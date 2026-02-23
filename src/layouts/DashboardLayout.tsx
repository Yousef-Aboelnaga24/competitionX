import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { useAuth, UserRole } from '@/contexts/AuthContext';
import {
  LayoutDashboard, Trophy, Users, FileText, Award, User, LogOut, ChevronLeft,
  ClipboardList, BarChart3, Tag, ListChecks, Monitor, FileBarChart, Gavel, Menu, X
} from 'lucide-react';

interface SidebarItem {
  label: string;
  path: string;
  icon: React.ElementType;
}

const SIDEBAR_ITEMS: Record<UserRole, SidebarItem[]> = {
  team: [
    { label: 'Dashboard', path: '/team/dashboard', icon: LayoutDashboard },
    { label: 'My Competitions', path: '/team/competitions', icon: Trophy },
    { label: 'Submit Project', path: '/team/submit', icon: FileText },
    { label: 'My Scores', path: '/team/scores', icon: BarChart3 },
    { label: 'Certificates', path: '/team/certificates', icon: Award },
    { label: 'Profile', path: '/team/profile', icon: User },
  ],
  judge: [
    { label: 'Assigned Competitions', path: '/judge/dashboard', icon: Trophy },
    { label: 'Submissions', path: '/judge/submissions', icon: FileText },
    { label: 'Scoring', path: '/judge/scoring', icon: ClipboardList },
    { label: 'Leaderboard', path: '/judge/leaderboard', icon: BarChart3 },
    { label: 'Profile', path: '/judge/profile', icon: User },
  ],
  admin: [
    { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Competitions', path: '/admin/competitions', icon: Trophy },
    { label: 'Teams Approval', path: '/admin/teams', icon: Users },
    { label: 'Judges', path: '/admin/judges', icon: Gavel },
    { label: 'Categories', path: '/admin/categories', icon: Tag },
    { label: 'Criteria', path: '/admin/criteria', icon: ListChecks },
    { label: 'Submissions', path: '/admin/submissions', icon: Monitor },
    { label: 'Reports', path: '/admin/reports', icon: FileBarChart },
  ],
};

const ROLE_LABELS: Record<UserRole, string> = {
  admin: 'Admin Panel',
  judge: 'Judge Panel',
  team: 'Team Portal',
};

const DashboardLayout: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  if (!user) return null;

  const items = SIDEBAR_ITEMS[user.role];

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-foreground/50 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 flex flex-col gradient-primary shadow-sidebar transition-all duration-300
          ${collapsed ? 'w-20' : 'w-64'}
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-4 h-16 border-b border-sidebar-border">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <Trophy className="w-7 h-7 text-sidebar-foreground" />
              <span className="text-lg font-display font-bold text-sidebar-foreground">CompetitionX</span>
            </div>
          )}
          {collapsed && <Trophy className="w-7 h-7 text-sidebar-foreground mx-auto" />}
          <button onClick={() => setCollapsed(!collapsed)} className="hidden lg:flex items-center justify-center w-8 h-8 rounded-md text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors">
            <ChevronLeft className={`w-4 h-4 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
          </button>
          <button onClick={() => setMobileOpen(false)} className="lg:hidden text-sidebar-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Role badge */}
        {!collapsed && (
          <div className="px-4 py-3">
            <span className="text-xs font-medium uppercase tracking-wider text-sidebar-foreground/60">{ROLE_LABELS[user.role]}</span>
          </div>
        )}

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
          {items.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                  ${isActive
                    ? 'bg-sidebar-accent text-sidebar-foreground shadow-sm'
                    : 'text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50'
                  }
                  ${collapsed ? 'justify-center' : ''}
                `}
                title={collapsed ? item.label : undefined}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* User / Logout */}
        <div className="border-t border-sidebar-border p-3 space-y-1">
          {!collapsed && (
            <div className="px-3 py-2 text-sidebar-foreground/60 text-xs truncate">
              {user.name || user.email}
            </div>
          )}
          <button
            onClick={logout}
            className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-destructive/20 transition-colors
              ${collapsed ? 'justify-center' : ''}
            `}
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="h-16 border-b border-border bg-card flex items-center justify-between px-4 lg:px-6 flex-shrink-0">
          <button onClick={() => setMobileOpen(true)} className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors">
            <Menu className="w-5 h-5 text-foreground" />
          </button>
          <div className="hidden lg:block" />
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
              {(user.name || 'U')[0].toUpperCase()}
            </div>
            <span className="text-sm font-medium text-foreground hidden sm:block">{user.name}</span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
