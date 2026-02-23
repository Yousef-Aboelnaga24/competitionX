import { Award, Download } from 'lucide-react';

const CERTIFICATES = [
  { id: '1', competition: 'Data Science Cup 2025', type: 'Runner-Up', issuedDate: '2026-02-01' },
  { id: '2', competition: 'Code Sprint 2025', type: 'Participation', issuedDate: '2025-12-15' },
];

const Certificates: React.FC = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-display font-bold text-foreground">Certificates</h1>

    <div className="grid md:grid-cols-2 gap-4">
      {CERTIFICATES.map(cert => (
        <div key={cert.id} className="bg-card rounded-xl border border-border p-6 shadow-card hover:shadow-card-hover transition-all">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-semibold text-foreground">{cert.competition}</h3>
              <p className="text-sm text-muted-foreground">{cert.type}</p>
              <p className="text-xs text-muted-foreground mt-1">Issued: {new Date(cert.issuedDate).toLocaleDateString()}</p>
              <button className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-primary border border-primary/30 hover:bg-primary/5 transition-colors">
                <Download className="w-4 h-4" /> Download
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Certificates;
