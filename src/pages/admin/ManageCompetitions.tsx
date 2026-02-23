import { useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const MOCK = [
  { id: '1', title: 'AI Innovation Challenge 2026', startDate: '2026-03-15', endDate: '2026-04-30', status: 'upcoming' },
  { id: '2', title: 'Web Dev Hackathon', startDate: '2026-02-01', endDate: '2026-03-15', status: 'ongoing' },
  { id: '3', title: 'Data Science Cup', startDate: '2025-12-01', endDate: '2026-01-31', status: 'finished' },
];

const STATUS_BADGE: Record<string, string> = {
  upcoming: 'bg-warning/10 text-warning',
  ongoing: 'bg-success/10 text-success',
  finished: 'bg-finished/10 text-finished',
};

const ManageCompetitions: React.FC = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);

  const inputClass = "w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-display font-bold text-foreground">Competitions</h1>
        <button onClick={() => setShowForm(!showForm)} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4" /> New Competition
        </button>
      </div>

      {showForm && (
        <div className="bg-card rounded-xl border border-border p-6 shadow-card animate-fade-in">
          <h2 className="text-lg font-display font-semibold text-foreground mb-4">Create Competition</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium text-foreground mb-1.5">Title</label><input className={inputClass} placeholder="Competition name" /></div>
            <div><label className="block text-sm font-medium text-foreground mb-1.5">Status</label>
              <select className={inputClass}><option>upcoming</option><option>ongoing</option><option>finished</option></select></div>
            <div><label className="block text-sm font-medium text-foreground mb-1.5">Start Date</label><input type="date" className={inputClass} /></div>
            <div><label className="block text-sm font-medium text-foreground mb-1.5">End Date</label><input type="date" className={inputClass} /></div>
            <div className="sm:col-span-2"><label className="block text-sm font-medium text-foreground mb-1.5">Description</label><textarea className={inputClass} rows={3} placeholder="Describe the competition..." /></div>
          </div>
          <div className="flex gap-2 mt-4">
            <button onClick={() => { setShowForm(false); toast({ title: 'Competition Created' }); }} className="px-4 py-2 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90">Save</button>
            <button onClick={() => setShowForm(false)} className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors">Cancel</button>
          </div>
        </div>
      )}

      <div className="bg-card rounded-xl border border-border overflow-hidden shadow-card">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border bg-muted/50">
            <th className="text-left px-4 py-3 font-medium text-foreground">Title</th>
            <th className="text-left px-4 py-3 font-medium text-foreground hidden md:table-cell">Start</th>
            <th className="text-left px-4 py-3 font-medium text-foreground hidden md:table-cell">End</th>
            <th className="text-left px-4 py-3 font-medium text-foreground">Status</th>
            <th className="text-right px-4 py-3 font-medium text-foreground">Actions</th>
          </tr></thead>
          <tbody>
            {MOCK.map(c => (
              <tr key={c.id} className="border-b border-border last:border-0">
                <td className="px-4 py-3 font-medium text-foreground">{c.title}</td>
                <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{new Date(c.startDate).toLocaleDateString()}</td>
                <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{new Date(c.endDate).toLocaleDateString()}</td>
                <td className="px-4 py-3"><span className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${STATUS_BADGE[c.status]}`}>{c.status}</span></td>
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

export default ManageCompetitions;
