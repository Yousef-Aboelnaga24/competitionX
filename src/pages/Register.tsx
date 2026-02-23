import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trophy, Plus, X, UserPlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface TeamMember {
  name: string;
  email: string;
  phone: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [teamName, setTeamName] = useState('');
  const [university, setUniversity] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [supervisorName, setSupervisorName] = useState('');
  const [supervisorEmail, setSupervisorEmail] = useState('');
  const [supervisorPhone, setSupervisorPhone] = useState('');

  const [members, setMembers] = useState<TeamMember[]>([{ name: '', email: '', phone: '' }]);

  const addMember = () => setMembers([...members, { name: '', email: '', phone: '' }]);
  const removeMember = (i: number) => { if (members.length > 1) setMembers(members.filter((_, idx) => idx !== i)); };
  const updateMember = (i: number, field: keyof TeamMember, value: string) => {
    const updated = [...members];
    updated[i][field] = value;
    setMembers(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName || !university || !email || !password) {
      toast({ title: 'Validation Error', description: 'Please fill all required fields.', variant: 'destructive' });
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({ title: 'Registration Successful', description: 'Your team has been registered. Please login.' });
      navigate('/login');
    }, 1000);
  };

  const inputClass = "w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
            <UserPlus className="w-7 h-7 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-display font-bold text-foreground">Register Your Team</h1>
          <p className="text-sm text-muted-foreground mt-1">Create your team account and start competing</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Team Info */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-card">
            <h2 className="text-lg font-display font-semibold text-foreground mb-4">Team Information</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Team Name *</label>
                <input type="text" value={teamName} onChange={e => setTeamName(e.target.value)} className={inputClass} placeholder="e.g. Team Alpha" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">School / University *</label>
                <input type="text" value={university} onChange={e => setUniversity(e.target.value)} className={inputClass} placeholder="e.g. MIT" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className={inputClass} placeholder="team@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Password *</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className={inputClass} placeholder="••••••••" />
              </div>
            </div>
          </div>

          {/* Supervisor */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-card">
            <h2 className="text-lg font-display font-semibold text-foreground mb-4">Supervisor Information</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Supervisor Name</label>
                <input type="text" value={supervisorName} onChange={e => setSupervisorName(e.target.value)} className={inputClass} placeholder="Dr. John Smith" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Supervisor Email</label>
                <input type="email" value={supervisorEmail} onChange={e => setSupervisorEmail(e.target.value)} className={inputClass} placeholder="supervisor@university.edu" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-1.5">Supervisor Phone</label>
                <input type="tel" value={supervisorPhone} onChange={e => setSupervisorPhone(e.target.value)} className={inputClass} placeholder="+1 234 567 890" />
              </div>
            </div>
          </div>

          {/* Members */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-display font-semibold text-foreground">Team Members</h2>
              <button type="button" onClick={addMember} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-primary border border-primary/30 hover:bg-primary/5 transition-colors">
                <Plus className="w-4 h-4" /> Add Member
              </button>
            </div>
            <p className="text-xs text-muted-foreground mb-4">Leader is the first member listed.</p>
            <div className="space-y-4">
              {members.map((member, i) => (
                <div key={i} className="p-4 rounded-lg border border-border bg-muted/30 relative">
                  {i === 0 && <span className="absolute top-2 right-2 text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">Leader</span>}
                  {i > 0 && (
                    <button type="button" onClick={() => removeMember(i)} className="absolute top-2 right-2 text-muted-foreground hover:text-destructive transition-colors">
                      <X className="w-4 h-4" />
                    </button>
                  )}
                  <div className="grid sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Name</label>
                      <input type="text" value={member.name} onChange={e => updateMember(i, 'name', e.target.value)} className={inputClass} placeholder="Full Name" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Email</label>
                      <input type="email" value={member.email} onChange={e => updateMember(i, 'email', e.target.value)} className={inputClass} placeholder="email@example.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Phone</label>
                      <input type="tel" value={member.phone} onChange={e => updateMember(i, 'phone', e.target.value)} className={inputClass} placeholder="+1 234 567" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button type="submit" disabled={loading}
            className="w-full py-3 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50">
            {loading ? 'Registering...' : 'Register Team'}
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-primary font-medium hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
