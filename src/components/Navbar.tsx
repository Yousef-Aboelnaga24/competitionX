import { Link, useLocation } from 'react-router-dom';
import { Trophy, Menu, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Competitions', path: '/competitions' },
  { label: 'How It Works', path: '/#how-it-works' },
  { label: 'Leaderboard', path: '/leaderboard' },
];

const Navbar: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const dashboardPath = user ? `/${user.role}/dashboard` : '/login';

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <Trophy className="w-7 h-7 text-primary" />
          <span className="text-xl font-display font-bold text-foreground">CompetitionX</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated ? (
            <Link to={dashboardPath} className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
              Dashboard
            </Link>
          ) : (
            <>
              <Link to="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Login
              </Link>
              <Link to="/register" className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-card px-4 pb-4 space-y-2">
          {NAV_LINKS.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-border space-y-2">
            {isAuthenticated ? (
              <Link to={dashboardPath} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-primary">Dashboard</Link>
            ) : (
              <>
                <Link to="/login" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-muted-foreground">Login</Link>
                <Link to="/register" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-primary">Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
