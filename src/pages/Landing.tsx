import { Link } from 'react-router-dom';
import { Trophy, Users, FileText, Award, ArrowRight, CheckCircle, BarChart3, Zap } from 'lucide-react';
import CompetitionCard from '@/components/CompetitionCard';
import heroBg from '@/assets/hero-bg.jpg';

const MOCK_COMPETITIONS = [
  { id: '1', title: 'AI Innovation Challenge 2026', description: 'Build an AI-powered solution that addresses real-world problems in healthcare, education, or sustainability.', startDate: '2026-03-15', endDate: '2026-04-30', status: 'upcoming' as const },
  { id: '2', title: 'Web Dev Hackathon', description: 'Create a full-stack web application using modern technologies. Teams of up to 4 members compete for prizes.', startDate: '2026-02-01', endDate: '2026-03-15', status: 'ongoing' as const },
  { id: '3', title: 'Data Science Cup', description: 'Analyze complex datasets and present actionable insights. Open to undergraduate and graduate students.', startDate: '2025-12-01', endDate: '2026-01-31', status: 'finished' as const },
];

const STEPS = [
  { icon: Users, title: 'Register Your Team', description: 'Sign up, add team members, and choose your competition.' },
  { icon: FileText, title: 'Submit Your Project', description: 'Upload your project with documentation before the deadline.' },
  { icon: Award, title: 'Get Scored & Win', description: 'Judges evaluate submissions. Top teams win awards and certificates.' },
];

const STATS = [
  { value: '2,500+', label: 'Participants' },
  { value: '150+', label: 'Competitions' },
  { value: '500+', label: 'Teams' },
  { value: '50+', label: 'Universities' },
];

const Landing: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-hero opacity-80" />
        </div>
        <div className="relative container mx-auto px-4 py-24 lg:py-36">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 text-primary-foreground text-xs font-medium mb-6 animate-fade-in">
              <Zap className="w-3 h-3" /> Now accepting registrations for 2026
            </div>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight animate-fade-in">
              Compete. <span className="text-secondary">Innovate.</span> Win.
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
              The all-in-one platform for managing competitions — from team registration to scoring, leaderboards, and certificates.
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Link to="/register" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition-opacity">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/competitions" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors">
                Browse Competitions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-display font-bold text-foreground mb-3">Featured Competitions</h2>
          <p className="text-muted-foreground max-w-md mx-auto">Discover and join exciting competitions from universities and organizations worldwide.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {MOCK_COMPETITIONS.map((comp) => (
            <CompetitionCard key={comp.id} {...comp} onApply={() => {}} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">How It Works</h2>
            <p className="text-muted-foreground">Three simple steps to compete and win</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {STEPS.map((step, i) => (
              <div key={i} className="text-center animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold mb-3">
                  {i + 1}
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-16">
        <div className="gradient-primary rounded-2xl p-10 lg:p-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center animate-count-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <p className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-sm text-primary-foreground/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <CheckCircle className="w-10 h-10 text-success mx-auto mb-4" />
          <h2 className="text-3xl font-display font-bold text-foreground mb-3">Ready to Compete?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">Register your team today and start your journey to the top of the leaderboard.</p>
          <Link to="/register" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            Register Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
