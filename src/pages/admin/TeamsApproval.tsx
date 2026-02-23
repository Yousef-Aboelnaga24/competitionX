import { CheckCircle, XCircle, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const TEAMS = [
  { id: '1', name: 'Team Omega', university: 'Stanford', members: 4, appliedDate: '2026-02-20', status: 'pending' },
  { id: '2', name: 'Team Zeta', university: 'MIT', members: 3, appliedDate: '2026-02-19', status: 'pending' },
  { id: '3', name: 'Team Alpha', university: 'Harvard', members: 4, appliedDate: '2026-02-15', status: 'approved' },
  { id: '4', name: 'Team Kappa', university: 'Caltech', members: 2, appliedDate: '2026-02-14', status: 'rejected' },
];

const STATUS_CONFIG: Record<string, { icon: React.ElementType; className: string }> = {
  pending: { icon: Clock, className: 'bg-warning/10 text-warning' },
  approved: { icon: CheckCircle, className: 'bg-success/10 text-success' },
  rejected: { icon: XCircle, className: 'bg-destructive/10 text-destructive' },
};

const TeamsApproval: React.FC = () => {
  const { toast } = useToast();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-display font-bold text-foreground">Teams Approval</h1>

      <div className="bg-card rounded-xl border border-border overflow-hidden shadow-card">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border bg-muted/50">
            <th className="text-left px-4 py-3 font-medium text-foreground">Team</th>
            <th className="text-left px-4 py-3 font-medium text-foreground hidden md:table-cell">University</th>
            <th className="text-center px-4 py-3 font-medium text-foreground hidden md:table-cell">Members</th>
            <th className="text-left px-4 py-3 font-medium text-foreground">Status</th>
            <th className="text-right px-4 py-3 font-medium text-foreground">Actions</th>
          </tr></thead>
          <tbody>
            {TEAMS.map(t => {
              const config = STATUS_CONFIG[t.status];
              return (
                <tr key={t.id} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-medium text-foreground">{t.name}</td>
                  <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{t.university}</td>
                  <td className="px-4 py-3 text-center text-muted-foreground hidden md:table-cell">{t.members}</td>
                  <td className="px-4 py-3"><span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${config.className}`}>{t.status}</span></td>
                  <td className="px-4 py-3 text-right space-x-2">
                    {t.status === 'pending' && (
                      <>
                        <button onClick={() => toast({ title: 'Team Approved' })} className="px-3 py-1 rounded-md text-xs font-medium bg-success/10 text-success hover:bg-success/20 transition-colors">Approve</button>
                        <button onClick={() => toast({ title: 'Team Rejected', variant: 'destructive' })} className="px-3 py-1 rounded-md text-xs font-medium bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors">Reject</button>
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamsApproval;
