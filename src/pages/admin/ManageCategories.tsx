import { useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const MOCK = [
  { id: '1', name: 'AI / Machine Learning' },
  { id: '2', name: 'Web Development' },
  { id: '3', name: 'Mobile App' },
  { id: '4', name: 'IoT' },
  { id: '5', name: 'Data Science' },
  { id: '6', name: 'Cybersecurity' },
];

const ManageCategories: React.FC = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const inputClass = "w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-display font-bold text-foreground">Categories</h1>
        <button onClick={() => setShowForm(!showForm)} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4" /> Add Category
        </button>
      </div>

      {showForm && (
        <div className="bg-card rounded-xl border border-border p-6 shadow-card animate-fade-in flex gap-3">
          <input className={`${inputClass} flex-1`} placeholder="Category name" />
          <button onClick={() => { setShowForm(false); toast({ title: 'Category Added' }); }} className="px-4 py-2 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 flex-shrink-0">Save</button>
        </div>
      )}

      <div className="bg-card rounded-xl border border-border overflow-hidden shadow-card">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border bg-muted/50">
            <th className="text-left px-4 py-3 font-medium text-foreground">Category Name</th>
            <th className="text-right px-4 py-3 font-medium text-foreground">Actions</th>
          </tr></thead>
          <tbody>
            {MOCK.map(c => (
              <tr key={c.id} className="border-b border-border last:border-0">
                <td className="px-4 py-3 font-medium text-foreground">{c.name}</td>
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

export default ManageCategories;
