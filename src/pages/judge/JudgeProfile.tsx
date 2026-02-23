import { User } from 'lucide-react';

const JudgeProfile: React.FC = () => {
  const inputClass = "w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-display font-bold text-foreground">Profile</h1>
      <div className="bg-card rounded-xl border border-border p-6 shadow-card">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
            <User className="w-8 h-8 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-lg font-display font-semibold text-foreground">Judge User</h2>
            <p className="text-sm text-muted-foreground">judge@competitionx.com</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label><input className={inputClass} defaultValue="Judge User" /></div>
          <div><label className="block text-sm font-medium text-foreground mb-1.5">Email</label><input className={inputClass} defaultValue="judge@competitionx.com" readOnly /></div>
          <div><label className="block text-sm font-medium text-foreground mb-1.5">Specialization</label><input className={inputClass} defaultValue="AI & Machine Learning" /></div>
          <div><label className="block text-sm font-medium text-foreground mb-1.5">Phone</label><input className={inputClass} defaultValue="+1 987 654 321" /></div>
        </div>
        <button className="mt-6 px-6 py-2.5 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">Save Changes</button>
      </div>
    </div>
  );
};

export default JudgeProfile;
