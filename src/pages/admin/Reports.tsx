import { BarChart3, Trophy, Users, FileText } from 'lucide-react';
import StatCard from '@/components/StatCard';

const Reports: React.FC = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-display font-bold text-foreground">Reports</h1>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard icon={Trophy} label="Total Competitions" value={12} />
      <StatCard icon={Users} label="Total Teams" value={156} />
      <StatCard icon={FileText} label="Total Submissions" value={342} />
      <StatCard icon={BarChart3} label="Avg Score" value="78%" />
    </div>

    <div className="bg-card rounded-xl border border-border p-6 shadow-card">
      <h2 className="text-lg font-display font-semibold text-foreground mb-4">Competition Summary</h2>
      <div className="overflow-hidden rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead><tr className="bg-muted/50 border-b border-border">
            <th className="text-left px-4 py-3 font-medium text-foreground">Competition</th>
            <th className="text-center px-4 py-3 font-medium text-foreground">Teams</th>
            <th className="text-center px-4 py-3 font-medium text-foreground">Submissions</th>
            <th className="text-center px-4 py-3 font-medium text-foreground">Avg Score</th>
            <th className="text-left px-4 py-3 font-medium text-foreground">Status</th>
          </tr></thead>
          <tbody>
            {[
              { name: 'AI Innovation Challenge', teams: 24, submissions: 18, avg: 82, status: 'ongoing' },
              { name: 'Web Dev Hackathon', teams: 32, submissions: 28, avg: 76, status: 'ongoing' },
              { name: 'Data Science Cup', teams: 45, submissions: 40, avg: 79, status: 'finished' },
            ].map((r, i) => (
              <tr key={i} className="border-b border-border last:border-0">
                <td className="px-4 py-3 font-medium text-foreground">{r.name}</td>
                <td className="px-4 py-3 text-center text-foreground">{r.teams}</td>
                <td className="px-4 py-3 text-center text-foreground">{r.submissions}</td>
                <td className="px-4 py-3 text-center font-semibold text-foreground">{r.avg}%</td>
                <td className="px-4 py-3"><span className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${r.status === 'ongoing' ? 'bg-success/10 text-success' : 'bg-finished/10 text-finished'}`}>{r.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Reports;
