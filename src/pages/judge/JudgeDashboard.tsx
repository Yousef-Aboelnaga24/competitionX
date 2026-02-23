import { Trophy, FileText, ClipboardList } from 'lucide-react';
import StatCard from '@/components/StatCard';

const COMPETITIONS = [
  { id: '1', title: 'AI Innovation Challenge 2026', teams: 24, submissions: 18, deadline: '2026-04-30', status: 'ongoing' },
  { id: '2', title: 'Web Dev Hackathon', teams: 32, submissions: 28, deadline: '2026-03-15', status: 'ongoing' },
];

const JudgeDashboard: React.FC = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-display font-bold text-foreground">Assigned Competitions</h1>
      <p className="text-sm text-muted-foreground mt-1">Competitions assigned to you for judging.</p>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <StatCard icon={Trophy} label="Assigned Competitions" value={2} />
      <StatCard icon={FileText} label="Pending Reviews" value={14} />
      <StatCard icon={ClipboardList} label="Scored" value={32} />
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      {COMPETITIONS.map(c => (
        <div key={c.id} className="bg-card rounded-xl border border-border p-6 shadow-card hover:shadow-card-hover transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold capitalize bg-success/10 text-success">{c.status}</span>
            <span className="text-xs text-muted-foreground">Due: {new Date(c.deadline).toLocaleDateString()}</span>
          </div>
          <h3 className="text-lg font-display font-semibold text-foreground mb-2">{c.title}</h3>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span>{c.teams} teams</span>
            <span>{c.submissions} submissions</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default JudgeDashboard;
