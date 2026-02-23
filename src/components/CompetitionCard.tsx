import React, { useEffect, useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface CompetitionCardProps {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'upcoming' | 'ongoing' | 'finished';
  onApply?: () => void;
}

const STATUS_STYLES: Record<string, string> = {
  upcoming: 'bg-warning/10 text-warning',
  ongoing: 'bg-success/10 text-success',
  finished: 'bg-finished/10 text-finished',
};

function getCountdown(targetDate: string): string {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) return 'Started';
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  return `${days}d ${hours}h`;
}

const CompetitionCard: React.FC<CompetitionCardProps> = ({ title, description, startDate, endDate, status, onApply }) => {
  const [countdown, setCountdown] = useState(getCountdown(status === 'upcoming' ? startDate : endDate));

  useEffect(() => {
    const target = status === 'upcoming' ? startDate : endDate;
    const timer = setInterval(() => setCountdown(getCountdown(target)), 60000);
    return () => clearInterval(timer);
  }, [startDate, endDate, status]);

  return (
    <div className="group bg-card rounded-xl border border-border p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-3">
        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${STATUS_STYLES[status]}`}>
          {status}
        </span>
        {status !== 'finished' && (
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" /> {countdown}
          </span>
        )}
      </div>
      <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(startDate).toLocaleDateString()}</span>
        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(endDate).toLocaleDateString()}</span>
      </div>
      {status !== 'finished' && onApply && (
        <button onClick={onApply} className="w-full py-2.5 rounded-lg text-sm font-medium gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
          Apply Now
        </button>
      )}
    </div>
  );
};

export default CompetitionCard;
