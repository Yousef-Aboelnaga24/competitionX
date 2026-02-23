import { Trophy, Users, FileText, Award, Bell, CheckCircle, Clock, XCircle } from 'lucide-react';
import StatCard from '@/components/StatCard';

const NOTIFICATIONS = [
  { id: 1, title: 'Registration Approved', description: 'Your team has been approved for the AI Innovation Challenge.', type: 'success', time: '2h ago' },
  { id: 2, title: 'New Competition Available', description: 'Web Dev Hackathon is now open for registration.', type: 'info', time: '1d ago' },
  { id: 3, title: 'Submission Deadline', description: 'Data Science Cup submission closes in 3 days.', type: 'warning', time: '2d ago' },
];

const STATUS_CONFIG = {
  approved: { icon: CheckCircle, label: 'Approved', className: 'text-success bg-success/10' },
  pending: { icon: Clock, label: 'Pending Review', className: 'text-warning bg-warning/10' },
  rejected: { icon: XCircle, label: 'Rejected', className: 'text-destructive bg-destructive/10' },
};

const TeamDashboard: React.FC = () => {
  const teamStatus: keyof typeof STATUS_CONFIG = 'approved';
  const config = STATUS_CONFIG[teamStatus];
  const StatusIcon = config.icon;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Team Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">Welcome back! Here's an overview of your team activity.</p>
      </div>

      {/* Status */}
      <div className={`flex items-center gap-3 px-4 py-3 rounded-xl ${config.className}`}>
        <StatusIcon className="w-5 h-5" />
        <span className="text-sm font-semibold">Team Status: {config.label}</span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Trophy} label="Active Competitions" value={2} />
        <StatCard icon={FileText} label="Submissions" value={3} />
        <StatCard icon={Award} label="Certificates" value={1} />
        <StatCard icon={Users} label="Team Members" value={4} />
      </div>

      {/* Notifications */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-card">
        <div className="flex items-center gap-2 mb-4">
          <Bell className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-display font-semibold text-foreground">Notifications</h2>
        </div>
        <div className="space-y-3">
          {NOTIFICATIONS.map(n => (
            <div key={n.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${n.type === 'success' ? 'bg-success' : n.type === 'warning' ? 'bg-warning' : 'bg-secondary'}`} />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{n.title}</p>
                <p className="text-xs text-muted-foreground">{n.description}</p>
              </div>
              <span className="text-xs text-muted-foreground flex-shrink-0">{n.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamDashboard;
