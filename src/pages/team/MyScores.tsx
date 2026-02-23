const SCORES = [
  { criteria: 'Innovation', maxScore: 20, score: 17 },
  { criteria: 'Technical Execution', maxScore: 25, score: 22 },
  { criteria: 'Design & UX', maxScore: 20, score: 18 },
  { criteria: 'Presentation', maxScore: 15, score: 13 },
  { criteria: 'Impact & Feasibility', maxScore: 20, score: 16 },
];

const MyScores: React.FC = () => {
  const total = SCORES.reduce((sum, s) => sum + s.score, 0);
  const maxTotal = SCORES.reduce((sum, s) => sum + s.maxScore, 0);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-display font-bold text-foreground">My Scores</h1>

      <div className="bg-card rounded-xl border border-border p-6 shadow-card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-display font-semibold text-foreground">Web Dev Hackathon</h2>
          <div className="text-right">
            <p className="text-2xl font-display font-bold text-primary">{total}/{maxTotal}</p>
            <p className="text-xs text-muted-foreground">{Math.round((total / maxTotal) * 100)}%</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead><tr className="bg-muted/50 border-b border-border"><th className="text-left px-4 py-3 font-medium text-foreground">Criteria</th><th className="text-center px-4 py-3 font-medium text-foreground">Score</th><th className="text-center px-4 py-3 font-medium text-foreground">Max</th><th className="text-right px-4 py-3 font-medium text-foreground">%</th></tr></thead>
            <tbody>
              {SCORES.map(s => (
                <tr key={s.criteria} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-medium text-foreground">{s.criteria}</td>
                  <td className="px-4 py-3 text-center text-foreground font-semibold">{s.score}</td>
                  <td className="px-4 py-3 text-center text-muted-foreground">{s.maxScore}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden">
                        <div className="h-full rounded-full gradient-primary" style={{ width: `${(s.score / s.maxScore) * 100}%` }} />
                      </div>
                      <span className="text-xs text-muted-foreground w-8 text-right">{Math.round((s.score / s.maxScore) * 100)}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyScores;
