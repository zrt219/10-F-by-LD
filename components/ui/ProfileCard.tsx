import React from 'react';
import { Target, TrendingUp, ShieldCheck, Zap, Brain, Trophy, Briefcase, RefreshCw, Star } from 'lucide-react';

export interface AthleteProfile {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  focusAreas: string[];
}

const iconMap: Record<string, React.ReactNode> = {
  'shield-check': <ShieldCheck className="w-8 h-8 text-brand-gold" />,
  'briefcase': <Briefcase className="w-8 h-8 text-brand-gold" />,
  'star': <Star className="w-8 h-8 text-brand-gold" />,
  'target': <Target className="w-8 h-8 text-brand-gold" />,
  'refresh-cw': <RefreshCw className="w-8 h-8 text-brand-gold" />,
  'zap': <Zap className="w-8 h-8 text-brand-gold" />,
  'brain': <Brain className="w-8 h-8 text-brand-gold" />,
  'trophy': <Trophy className="w-8 h-8 text-brand-gold" />,
};

export function ProfileCard({ 
  profile, 
  type = 'primary' 
}: { 
  profile: AthleteProfile; 
  type?: 'primary' | 'secondary' 
}) {
  const isPrimary = type === 'primary';
  
  return (
    <div className={`rounded-2xl p-8 ${isPrimary ? 'bg-white shadow-lg border-2 border-brand-gold' : 'bg-brand-neutral-50 border border-brand-neutral-200'}`}>
      <div className="flex items-start justify-between mb-6">
        <div>
          <span className={`inline-block text-xs font-bold uppercase tracking-wider mb-2 ${isPrimary ? 'text-brand-gold-dark' : 'text-brand-neutral-500'}`}>
            {isPrimary ? 'Primary Profile' : 'Secondary Profile'}
          </span>
          <h2 className={`font-heading font-bold ${isPrimary ? 'text-3xl' : 'text-2xl'} text-brand-neutral-900`}>
            {profile.name}
          </h2>
        </div>
        <div className={`p-4 rounded-full ${isPrimary ? 'bg-brand-ivory' : 'bg-white shadow-sm'}`}>
          {iconMap[profile.icon] || <Target className="w-8 h-8 text-brand-gold" />}
        </div>
      </div>
      
      <p className={`mb-6 leading-relaxed ${isPrimary ? 'text-brand-neutral-700 text-lg' : 'text-brand-neutral-600'}`}>
        {isPrimary ? profile.fullDescription : profile.shortDescription}
      </p>
      
      <div>
        <h4 className="text-sm font-bold text-brand-neutral-900 mb-3 uppercase tracking-wide">Key Focus Areas</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {profile.focusAreas.map((area, index) => (
            <li key={index} className="flex items-center text-sm text-brand-neutral-600">
              <TrendingUp className="w-4 h-4 mr-2 text-brand-gold-light" />
              {area}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
