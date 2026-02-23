import { useState } from 'react';
import CompetitionCard from '@/components/CompetitionCard';

const TABS = ['Available', 'Applied', 'Results'] as const;

const AVAILABLE = [
  { id: '1', title: 'AI Innovation Challenge 2026', description: 'Build an AI-powered solution.', startDate: '2026-03-15', endDate: '2026-04-30', status: 'upcoming' as const },
  { id: '2', title: 'Cybersecurity CTF', description: 'Capture the flag competition.', startDate: '2026-04-01', endDate: '2026-05-15', status: 'upcoming' as const },
];

const APPLIED = [
  { id: '3', competition: 'Web Dev Hackathon', appliedDate: '2026-02-05', status: 'approved' },
  { id: '4', competition: 'Mobile App Challenge', appliedDate: '2026-02-10', status: 'pending' },
];

const RESULTS = [
  { id: '5', competition: 'Data Science Cup', rank: 2, score: 92, totalTeams: 45 },
  { id: '6', competition: 'Code Sprint 2025', rank: 5, score: 84, totalTeams: 30 },
];

const STATUS_BADGE: Record<string, string> = {
  approved: 'bg-success/10 text-success',
  pending: 'bg-warning/10 text-warning',
  rejected: 'bg-destructive/10 text-destructive',
};

const MyCompetitions: React.FC = () => {
  const [tab, setTab] = useState<typeof TABS[number]>('Available');

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-display font-bold text-foreground">My Competitions</h1>

      <div className="flex gap-1 p-1 bg-muted rounded-lg w-fit">
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${tab === t ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>
            {t}
          </button>
        ))}
      </div>

      {tab === 'Available' && (
        <div className="grid md:grid-cols-2 gap-4">
          {AVAILABLE.map(c => <CompetitionCard key={c.id} {...c} onApply={() => {}} />)}
        </div>
      )}

      {tab === 'Applied' && (
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border bg-muted/50"><th className="text-left px-4 py-3 font-medium text-foreground">Competition</th><th className="text-left px-4 py-3 font-medium text-foreground">Applied</th><th className="text-left px-4 py-3 font-medium text-foreground">Status</th></tr></thead>
            <tbody>
              {APPLIED.map(a => (
                <tr key={a.id} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-medium text-foreground">{a.competition}</td>
                  <td className="px-4 py-3 text-muted-foreground">{new Date(a.appliedDate).toLocaleDateString()}</td>
                  <td className="px-4 py-3"><span className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${STATUS_BADGE[a.status]}`}>{a.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'Results' && (
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border bg-muted/50"><th className="text-left px-4 py-3 font-medium text-foreground">Competition</th><th className="text-left px-4 py-3 font-medium text-foreground">Rank</th><th className="text-left px-4 py-3 font-medium text-foreground">Score</th><th className="text-left px-4 py-3 font-medium text-foreground">Teams</th></tr></thead>
            <tbody>
              {RESULTS.map(r => (
                <tr key={r.id} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-medium text-foreground">{r.competition}</td>
                  <td className="px-4 py-3"><span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${r.rank === 1 ? 'bg-gold/20 text-foreground' : r.rank === 2 ? 'bg-silver/30 text-foreground' : r.rank === 3 ? 'bg-bronze/20 text-foreground' : 'bg-muted text-muted-foreground'}`}>#{r.rank}</span></td>
                  <td className="px-4 py-3 text-foreground font-semibold">{r.score}%</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.totalTeams}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyCompetitions;
