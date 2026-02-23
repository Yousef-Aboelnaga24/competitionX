import { User } from 'lucide-react';

const TeamProfile: React.FC = () => {
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
            <h2 className="text-lg font-display font-semibold text-foreground">Team Alpha</h2>
            <p className="text-sm text-muted-foreground">team@competitionx.com</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium text-foreground mb-1.5">Team Name</label><input className={inputClass} defaultValue="Team Alpha" /></div>
          <div><label className="block text-sm font-medium text-foreground mb-1.5">University</label><input className={inputClass} defaultValue="MIT" /></div>
          <div><label className="block text-sm font-medium text-foreground mb-1.5">Email</label><input className={inputClass} defaultValue="team@competitionx.com" readOnly /></div>
          <div><label className="block text-sm font-medium text-foreground mb-1.5">Phone</label><input className={inputClass} defaultValue="+1 234 567 890" /></div>
        </div>
        <button className="mt-6 px-6 py-2.5 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default TeamProfile;
