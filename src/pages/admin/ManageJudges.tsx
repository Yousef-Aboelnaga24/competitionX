import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const MOCK_JUDGES = [
  { id: '1', name: 'Dr. Sarah Johnson', email: 'sarah@university.edu', specialization: 'AI & Machine Learning' },
  { id: '2', name: 'Prof. Michael Lee', email: 'michael@university.edu', specialization: 'Web Technologies' },
  { id: '3', name: 'Dr. Emily Chen', email: 'emily@university.edu', specialization: 'Data Science' },
];

const ManageJudges: React.FC = () => {
  const { toast } = useToast();
  const [showModal, setShowModal] = useState(false);
  const inputClass = "w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-display font-bold text-foreground">Judges</h1>
        <button onClick={() => setShowModal(true)} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4" /> Add Judge
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 px-4" onClick={() => setShowModal(false)}>
          <div className="bg-card rounded-xl border border-border p-6 shadow-card-hover w-full max-w-md animate-fade-in" onClick={e => e.stopPropagation()}>
            <h2 className="text-lg font-display font-semibold text-foreground mb-4">Add New Judge</h2>
            <div className="space-y-4">
              <div><label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label><input className={inputClass} placeholder="Dr. Jane Doe" /></div>
              <div><label className="block text-sm font-medium text-foreground mb-1.5">Email</label><input type="email" className={inputClass} placeholder="judge@university.edu" /></div>
              <div><label className="block text-sm font-medium text-foreground mb-1.5">Specialization</label><input className={inputClass} placeholder="e.g. AI, Web Dev" /></div>
            </div>
            <div className="flex gap-2 mt-6">
              <button onClick={() => { setShowModal(false); toast({ title: 'Judge Added' }); }} className="px-4 py-2 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90">Add Judge</button>
              <button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors">Cancel</button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-card rounded-xl border border-border overflow-hidden shadow-card">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border bg-muted/50">
            <th className="text-left px-4 py-3 font-medium text-foreground">Name</th>
            <th className="text-left px-4 py-3 font-medium text-foreground">Email</th>
            <th className="text-left px-4 py-3 font-medium text-foreground hidden md:table-cell">Specialization</th>
            <th className="text-right px-4 py-3 font-medium text-foreground">Actions</th>
          </tr></thead>
          <tbody>
            {MOCK_JUDGES.map(j => (
              <tr key={j.id} className="border-b border-border last:border-0">
                <td className="px-4 py-3 font-medium text-foreground">{j.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{j.email}</td>
                <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{j.specialization}</td>
                <td className="px-4 py-3 text-right"><button className="text-muted-foreground hover:text-destructive transition-colors"><Trash2 className="w-4 h-4 inline" /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageJudges;
