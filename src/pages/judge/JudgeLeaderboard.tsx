import { Trophy, Medal } from 'lucide-react';

const LEADERBOARD = [
  { rank: 1, team: 'Team Alpha', university: 'MIT', score: 92, medal: 'gold' },
  { rank: 2, team: 'Team Beta', university: 'Stanford', score: 88, medal: 'silver' },
  { rank: 3, team: 'Team Gamma', university: 'Harvard', score: 85, medal: 'bronze' },
  { rank: 4, team: 'Team Delta', university: 'Caltech', score: 80, medal: null },
  { rank: 5, team: 'Team Epsilon', university: 'Berkeley', score: 76, medal: null },
];

const MEDAL_COLORS: Record<string, string> = {
  gold: 'bg-gold/20 text-foreground border-gold',
  silver: 'bg-silver/30 text-foreground border-silver',
  bronze: 'bg-bronze/20 text-foreground border-bronze',
};

const Leaderboard: React.FC = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-display font-bold text-foreground">Leaderboard</h1>

    <div className="bg-card rounded-xl border border-border overflow-hidden shadow-card">
      <div className="p-4 border-b border-border flex items-center gap-2">
        <Trophy className="w-5 h-5 text-primary" />
        <h2 className="font-display font-semibold text-foreground">AI Innovation Challenge 2026</h2>
      </div>
      <table className="w-full text-sm">
        <thead><tr className="border-b border-border bg-muted/50">
          <th className="text-center px-4 py-3 font-medium text-foreground w-16">Rank</th>
          <th className="text-left px-4 py-3 font-medium text-foreground">Team</th>
          <th className="text-left px-4 py-3 font-medium text-foreground hidden md:table-cell">University</th>
          <th className="text-right px-4 py-3 font-medium text-foreground">Score</th>
        </tr></thead>
        <tbody>
          {LEADERBOARD.map(row => (
            <tr key={row.rank} className={`border-b border-border last:border-0 ${row.medal ? 'bg-muted/30' : ''}`}>
              <td className="px-4 py-3 text-center">
                {row.medal ? (
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full border-2 text-xs font-bold ${MEDAL_COLORS[row.medal]}`}>
                    {row.rank}
                  </span>
                ) : <span className="text-muted-foreground font-medium">{row.rank}</span>}
              </td>
              <td className="px-4 py-3 font-semibold text-foreground">{row.team}</td>
              <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{row.university}</td>
              <td className="px-4 py-3 text-right font-display font-bold text-foreground">{row.score}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Leaderboard;
