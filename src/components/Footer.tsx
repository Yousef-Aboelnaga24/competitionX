import { Link } from 'react-router-dom';
import { Trophy } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-6 h-6" />
            <span className="text-lg font-display font-bold">CompetitionX</span>
          </div>
          <p className="text-sm text-background/60">The ultimate platform for managing competitions, from registration to certificates.</p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Platform</h4>
          <div className="space-y-2 text-sm text-background/60">
            <Link to="/competitions" className="block hover:text-background transition-colors">Competitions</Link>
            <Link to="/leaderboard" className="block hover:text-background transition-colors">Leaderboard</Link>
            <Link to="/register" className="block hover:text-background transition-colors">Register</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Support</h4>
          <div className="space-y-2 text-sm text-background/60">
            <a href="#" className="block hover:text-background transition-colors">Help Center</a>
            <a href="#" className="block hover:text-background transition-colors">Contact Us</a>
            <a href="#" className="block hover:text-background transition-colors">FAQ</a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Legal</h4>
          <div className="space-y-2 text-sm text-background/60">
            <a href="#" className="block hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="block hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 mt-8 pt-8 text-center text-sm text-background/40">
        &copy; {new Date().getFullYear()} CompetitionX. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
