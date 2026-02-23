import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle } from 'lucide-react';

const CRITERIA = [
  { id: '1', name: 'Innovation', maxScore: 20 },
  { id: '2', name: 'Technical Execution', maxScore: 25 },
  { id: '3', name: 'Design & UX', maxScore: 20 },
  { id: '4', name: 'Presentation', maxScore: 15 },
  { id: '5', name: 'Impact & Feasibility', maxScore: 20 },
];

const Scoring: React.FC = () => {
  const { toast } = useToast();
  const [scores, setScores] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const missing = CRITERIA.some(c => !scores[c.id] && scores[c.id] !== 0);
    if (missing) {
      toast({ title: 'Error', description: 'Please score all criteria.', variant: 'destructive' });
      return;
    }
    setSubmitted(true);
    toast({ title: 'Scores Submitted', description: 'Your scores have been recorded.' });
  };

  const inputClass = "w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-display font-bold text-foreground">Scoring</h1>

      <div className="bg-card rounded-xl border border-border p-6 shadow-card">
        <div className="mb-6">
          <h2 className="text-lg font-display font-semibold text-foreground">Team Alpha — Smart Campus App</h2>
          <p className="text-sm text-muted-foreground">AI Innovation Challenge 2026</p>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-12 h-12 text-success mx-auto mb-3" />
            <p className="text-lg font-display font-semibold text-foreground">Scores Submitted</p>
            <p className="text-sm text-muted-foreground">You have already scored this submission.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {CRITERIA.map(c => (
              <div key={c.id} className="flex items-center gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-foreground">{c.name}</label>
                  <span className="text-xs text-muted-foreground">Max: {c.maxScore}</span>
                </div>
                <input type="number" min={0} max={c.maxScore}
                  value={scores[c.id] ?? ''}
                  onChange={e => setScores({ ...scores, [c.id]: Number(e.target.value) })}
                  className={`${inputClass} w-24 text-center`}
                  placeholder="0" />
              </div>
            ))}
            <button type="submit" className="w-full py-3 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity mt-4">
              Submit Scores
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Scoring;
