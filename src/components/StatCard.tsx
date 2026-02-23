import React from 'react';

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string | number;
  trend?: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, label, value, trend, className = '' }) => (
  <div className={`bg-card rounded-xl border border-border p-5 shadow-card animate-fade-in ${className}`}>
    <div className="flex items-center justify-between mb-3">
      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      {trend && <span className="text-xs font-medium text-success">{trend}</span>}
    </div>
    <p className="text-2xl font-display font-bold text-foreground">{value}</p>
    <p className="text-sm text-muted-foreground mt-1">{label}</p>
  </div>
);

export default StatCard;
