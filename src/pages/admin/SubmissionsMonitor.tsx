import { Eye } from 'lucide-react';

const SUBMISSIONS = [
  { id: '1', team: 'Team Alpha', competition: 'AI Challenge', project: 'Smart Campus', submittedAt: '2026-02-20', status: 'reviewed' },
  { id: '2', team: 'Team Beta', competition: 'Web Hackathon', project: 'AI Tutor', submittedAt: '2026-02-19', status: 'pending' },
  { id: '3', team: 'Team Gamma', competition: 'AI Challenge', project: 'EcoTrack', submittedAt: '2026-02-18', status: 'pending' },
];

const SubmissionsMonitor: React.FC = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-display font-bold text-foreground">Submissions Monitor</h1>

    <div className="bg-card rounded-xl border border-border overflow-hidden shadow-card">
      <table className="w-full text-sm">
        <thead><tr className="border-b border-border bg-muted/50">
          <th className="text-left px-4 py-3 font-medium text-foreground">Team</th>
          <th className="text-left px-4 py-3 font-medium text-foreground hidden md:table-cell">Competition</th>
          <th className="text-left px-4 py-3 font-medium text-foreground">Project</th>
          <th className="text-left px-4 py-3 font-medium text-foreground hidden md:table-cell">Submitted</th>
          <th className="text-left px-4 py-3 font-medium text-foreground">Status</th>
          <th className="text-right px-4 py-3 font-medium text-foreground">Action</th>
        </tr></thead>
        <tbody>
          {SUBMISSIONS.map(s => (
            <tr key={s.id} className="border-b border-border last:border-0">
              <td className="px-4 py-3 font-medium text-foreground">{s.team}</td>
              <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{s.competition}</td>
              <td className="px-4 py-3 text-foreground">{s.project}</td>
              <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{new Date(s.submittedAt).toLocaleDateString()}</td>
              <td className="px-4 py-3"><span className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${s.status === 'reviewed' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}>{s.status}</span></td>
              <td className="px-4 py-3 text-right"><button className="text-primary hover:underline text-sm inline-flex items-center gap-1"><Eye className="w-4 h-4" /> View</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default SubmissionsMonitor;
