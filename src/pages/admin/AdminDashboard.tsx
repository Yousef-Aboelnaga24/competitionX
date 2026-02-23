import { Trophy, Users, Gavel, FileText, BarChart3, CheckCircle } from 'lucide-react';
import StatCard from '@/components/StatCard';

const AdminDashboard: React.FC = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-display font-bold text-foreground">Admin Dashboard</h1>
      <p className="text-sm text-muted-foreground mt-1">Overview of platform activity and statistics.</p>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <StatCard icon={Trophy} label="Total Competitions" value={12} trend="+2 this month" />
      <StatCard icon={Users} label="Registered Teams" value={156} trend="+24 this week" />
      <StatCard icon={Gavel} label="Active Judges" value={18} />
      <StatCard icon={FileText} label="Submissions" value={342} trend="+48 today" />
      <StatCard icon={CheckCircle} label="Teams Approved" value={132} />
      <StatCard icon={BarChart3} label="Avg Score" value="78%" />
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-card rounded-xl border border-border p-6 shadow-card">
        <h2 className="text-lg font-display font-semibold text-foreground mb-4">Recent Registrations</h2>
        <div className="space-y-3">
          {['Team Omega — Stanford', 'Team Zeta — MIT', 'Team Kappa — Harvard'].map((t, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <span className="text-sm font-medium text-foreground">{t}</span>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-warning/10 text-warning">Pending</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-card rounded-xl border border-border p-6 shadow-card">
        <h2 className="text-lg font-display font-semibold text-foreground mb-4">Active Competitions</h2>
        <div className="space-y-3">
          {[{ name: 'AI Innovation Challenge', teams: 24 }, { name: 'Web Dev Hackathon', teams: 32 }, { name: 'Mobile App Challenge', teams: 18 }].map((c, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <span className="text-sm font-medium text-foreground">{c.name}</span>
              <span className="text-xs text-muted-foreground">{c.teams} teams</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default AdminDashboard;
