import { useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const MOCK = [
  { id: '1', name: 'Innovation', maxScore: 20 },
  { id: '2', name: 'Technical Execution', maxScore: 25 },
  { id: '3', name: 'Design & UX', maxScore: 20 },
  { id: '4', name: 'Presentation', maxScore: 15 },
  { id: '5', name: 'Impact & Feasibility', maxScore: 20 },
];

const ManageCriteria: React.FC = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const inputClass = "w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-display font-bold text-foreground">Criteria</h1>
        <button onClick={() => setShowForm(!showForm)} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4" /> Add Criteria
        </button>
      </div>

      {showForm && (
        <div className="bg-card rounded-xl border border-border p-6 shadow-card animate-fade-in flex gap-3">
          <input className={`${inputClass} flex-1`} placeholder="Criteria name" />
          <input type="number" className={`${inputClass} w-24`} placeholder="Max" />
          <button onClick={() => { setShowForm(false); toast({ title: 'Criteria Added' }); }} className="px-4 py-2 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 flex-shrink-0">Save</button>
        </div>
      )}

      <div className="bg-card rounded-xl border border-border overflow-hidden shadow-card">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border bg-muted/50">
            <th className="text-left px-4 py-3 font-medium text-foreground">Criteria</th>
            <th className="text-center px-4 py-3 font-medium text-foreground">Max Score</th>
            <th className="text-right px-4 py-3 font-medium text-foreground">Actions</th>
          </tr></thead>
          <tbody>
            {MOCK.map(c => (
              <tr key={c.id} className="border-b border-border last:border-0">
                <td className="px-4 py-3 font-medium text-foreground">{c.name}</td>
                <td className="px-4 py-3 text-center text-foreground font-semibold">{c.maxScore}</td>
                <td className="px-4 py-3 text-right space-x-2">
                  <button className="text-primary hover:text-secondary transition-colors"><Pencil className="w-4 h-4 inline" /></button>
                  <button className="text-muted-foreground hover:text-destructive transition-colors"><Trash2 className="w-4 h-4 inline" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCriteria;
