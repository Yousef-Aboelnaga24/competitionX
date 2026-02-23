import { useState } from 'react';
import { Upload, Link as LinkIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CATEGORIES = ['AI / Machine Learning', 'Web Development', 'Mobile App', 'IoT', 'Data Science', 'Cybersecurity'];

const SubmitProject: React.FC = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [links, setLinks] = useState('');

  const inputClass = "w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !category) {
      toast({ title: 'Error', description: 'Please fill required fields.', variant: 'destructive' });
      return;
    }
    toast({ title: 'Project Submitted', description: 'Your project has been submitted for review.' });
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-display font-bold text-foreground">Submit Project</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-card rounded-xl border border-border p-6 shadow-card space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Project Title *</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} className={inputClass} placeholder="My Amazing Project" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Description</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} rows={4} className={inputClass} placeholder="Describe your project..." />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Category *</label>
            <select value={category} onChange={e => setCategory(e.target.value)} className={inputClass}>
              <option value="">Select category</option>
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Upload Files</label>
            <div className="border-2 border-dashed border-input rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Drag & drop files here, or click to browse</p>
              <p className="text-xs text-muted-foreground/60 mt-1">PDF, ZIP, DOCX up to 50MB</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">External Links</label>
            <div className="relative">
              <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="url" value={links} onChange={e => setLinks(e.target.value)} className={`${inputClass} pl-9`} placeholder="https://github.com/..." />
            </div>
          </div>
        </div>

        <button type="submit" className="w-full py-3 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
          Submit Project
        </button>
      </form>
    </div>
  );
};

export default SubmitProject;
