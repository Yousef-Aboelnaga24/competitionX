import CompetitionCard from '@/components/CompetitionCard';

const COMPETITIONS = [
  { id: '1', title: 'AI Innovation Challenge 2026', description: 'Build an AI-powered solution that addresses real-world problems in healthcare, education, or sustainability.', startDate: '2026-03-15', endDate: '2026-04-30', status: 'upcoming' as const },
  { id: '2', title: 'Web Dev Hackathon', description: 'Create a full-stack web application using modern technologies. Teams of up to 4 members compete for prizes.', startDate: '2026-02-01', endDate: '2026-03-15', status: 'ongoing' as const },
  { id: '3', title: 'Data Science Cup', description: 'Analyze complex datasets and present actionable insights. Open to undergraduate and graduate students.', startDate: '2025-12-01', endDate: '2026-01-31', status: 'finished' as const },
  { id: '4', title: 'Cybersecurity CTF', description: 'Capture the flag competition testing your security skills across web, crypto, and reverse engineering challenges.', startDate: '2026-04-01', endDate: '2026-05-15', status: 'upcoming' as const },
  { id: '5', title: 'Mobile App Challenge', description: 'Design and develop a mobile application that solves a community problem using React Native or Flutter.', startDate: '2026-02-15', endDate: '2026-04-01', status: 'ongoing' as const },
  { id: '6', title: 'IoT Innovation Lab', description: 'Build an IoT prototype that demonstrates smart city, agriculture, or health monitoring capabilities.', startDate: '2025-11-01', endDate: '2025-12-31', status: 'finished' as const },
];

const CompetitionsPage: React.FC = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="text-center mb-10">
      <h1 className="text-3xl font-display font-bold text-foreground mb-3">All Competitions</h1>
      <p className="text-muted-foreground max-w-md mx-auto">Browse and apply to competitions from universities and organizations worldwide.</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {COMPETITIONS.map(c => <CompetitionCard key={c.id} {...c} onApply={c.status !== 'finished' ? () => {} : undefined} />)}
    </div>
  </div>
);

export default CompetitionsPage;
