"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { ProfileCard } from '@/components/ui/ProfileCard';
import { ProductCard } from '@/components/ui/ProductCard';
import { ResultSummary } from '@/types';
import { digitalProducts } from '@/data/products';
import { AlertCircle, CheckCircle2, ChevronRight, Download } from 'lucide-react';

const profileDescriptions: Record<string, { short: string; full: string; icon: string; focus: string[] }> = {
  'The Rebuilder': {
    short: 'You need support with identity, confidence, wellness, and daily structure.',
    full: 'You are going through a phase where your foundational elements need rebuilding. Whether due to injury, transition, or heavy pressure, you need to focus on your identity outside of sport, mental wellness, and establishing a daily structure that supports your peace of mind.',
    icon: 'refresh-cw',
    focus: ['Mental Wellness', 'Identity Building', 'Daily Routine', 'Confidence Recovery']
  },
  'The Career-Ready Athlete': {
    short: 'You are ready to translate sport discipline into professional opportunities.',
    full: 'You have a strong foundation and are looking ahead. It is time to translate the discipline, teamwork, and resilience you learned in sports into career readiness. You need to focus on your resume, networking, and preparing for life after competition.',
    icon: 'briefcase',
    focus: ['Resume Building', 'Interview Skills', 'Networking', 'Professional Translation']
  },
  'The Brand Builder': {
    short: 'You need support with your personal brand, digital reputation, and public image.',
    full: 'You have opportunities in front of you, possibly involving NIL or media, but you need to carefully craft and protect your public image. Focus on aligning your values with your public presentation, understanding digital reputation risks, and making smart brand decisions.',
    icon: 'star',
    focus: ['Personal Brand', 'Social Media Audit', 'NIL Strategy', 'Media Presence']
  },
  'The Whole Athlete': {
    short: 'Balanced athlete ready for full growth across sport, school, and purpose.',
    full: 'You have managed to find a strong balance across the 10 Fs. You are performing well but want to maintain this momentum and optimize your potential in all areas of life, ensuring you leave a lasting legacy.',
    icon: 'target',
    focus: ['Legacy Building', 'Optimal Balance', 'Advanced Leadership', 'Consistent Excellence']
  },
  'The Transitioning Athlete': {
    short: 'You are preparing for life after sport and need career direction.',
    full: 'The transition out of competitive sports is one of the hardest phases of an athlete’s life. You need to focus on mourning the loss of the game while aggressively building your next chapter. Discovering who you are without the jersey is your top priority.',
    icon: 'shield-check',
    focus: ['Transition Planning', 'Identity Shift', 'Career Exploration', 'Grief/Acceptance']
  },
  'The Pressure Performer': {
    short: 'Strong performer carrying heavy expectations, stress, or anxiety.',
    full: 'On the outside, you look like you have it all together, but the internal pressure is building. You are carrying heavy expectations from yourself, your family, or your team. You need to focus on stress management, fun, and detaching your worth from your performance.',
    icon: 'zap',
    focus: ['Pressure Management', 'Rest & Recovery', 'Boundary Setting', 'Finding Joy']
  },
  'The AI-Ready Athlete': {
    short: 'Ready to use AI responsibly for learning, planning, and productivity.',
    full: 'You are forward-thinking and ready to leverage modern tools to your advantage. Your focus is on learning how to use AI responsibly to enhance your career preparation, streamline your studying, and improve your communication without compromising academic integrity.',
    icon: 'brain',
    focus: ['Responsible AI Use', 'Prompt Engineering', 'Productivity', 'Ethical Decision Making']
  }
};

export default function ResultsPage() {
  const router = useRouter();
  const [results, setResults] = useState<ResultSummary | null>(null);
  const [name, setName] = useState<string>('');

  useEffect(() => {
    const savedResults = localStorage.getItem('10f_results');
    const savedName = localStorage.getItem('10f_profile_name');
    
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    } else {
      // If no results, redirect back to questionnaire
      router.push('/questionnaire');
    }
    
    if (savedName) setName(savedName);
  }, [router]);

  if (!results) {
    return    <div className="min-h-screen flex items-center justify-center bg-brand-ivory">
      <p className="text-brand-neutral-700 font-medium">Loading your profile...</p>
    </div>;
  }

  const recommendedProducts = digitalProducts.filter(p => results.recommendedProductIds.includes(p.id));

  return (
    <div className="min-h-screen flex flex-col bg-brand-ivory">
      <Header />
      
      <main className="flex-grow py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-brand-neutral-900 mb-4">
              Your Athlete Profile Results
            </h1>
            <p className="text-lg text-brand-neutral-600">
              {name ? `Here is your personalized breakdown, ${name}.` : 'Here is your personalized breakdown.'}
            </p>
          </div>

          {/* Profiles Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ProfileCard 
              type="primary" 
              profile={{
                id: results.primaryProfile,
                name: results.primaryProfile,
                shortDescription: profileDescriptions[results.primaryProfile].short,
                fullDescription: profileDescriptions[results.primaryProfile].full,
                icon: profileDescriptions[results.primaryProfile].icon,
                focusAreas: profileDescriptions[results.primaryProfile].focus
              }} 
            />
            <ProfileCard 
              type="secondary" 
              profile={{
                id: results.secondaryProfile,
                name: results.secondaryProfile,
                shortDescription: profileDescriptions[results.secondaryProfile].short,
                fullDescription: profileDescriptions[results.secondaryProfile].full,
                icon: profileDescriptions[results.secondaryProfile].icon,
                focusAreas: profileDescriptions[results.secondaryProfile].focus
              }} 
            />
          </div>

          {/* The 10 Fs Breakdown */}
          <div className="bg-white rounded-3xl shadow-sm border border-brand-neutral-200 p-8 md:p-12 mb-16">
            <h2 className="text-2xl font-bold font-heading mb-8 border-b border-brand-neutral-100 pb-4">Your 10 F's Breakdown</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="flex items-center text-lg font-bold text-green-700 mb-4">
                  <CheckCircle2 className="w-5 h-5 mr-2" /> Top 3 Strengths
                </h3>
                <ul className="space-y-4">
                  {results.top3Strongest.map(f => (
                    <li key={f} className="bg-brand-ivory text-brand-neutral-900 p-4 border border-brand-gold/40 font-medium flex items-center gap-2">
                      <span className="text-brand-gold">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="flex items-center text-lg font-bold text-amber-700 mb-4">
                  <AlertCircle className="w-5 h-5 mr-2" /> Top 3 Growth Areas
                </h3>
                <ul className="space-y-4">
                  {results.top3Growth.map(f => (
                    <li key={f} className="bg-[#FDF8EE] text-brand-neutral-800 p-4 border border-brand-gold/30 font-medium flex items-center gap-2">
                      <span className="text-brand-gold">↑</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-brand-neutral-50 p-6 rounded-2xl border border-brand-neutral-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-neutral-500 mb-2">Coach Lornette's Insight</h3>
              <p className="text-brand-neutral-800 font-medium text-lg leading-relaxed italic">
                "{results.sportSpecificInsight}"
              </p>
            </div>
          </div>

          {/* Readiness Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="bg-white p-6 rounded-2xl border border-brand-neutral-200 text-center">
              <div className="text-sm text-brand-neutral-500 font-bold uppercase mb-2">AI Readiness</div>
              <div className={`text-xl font-bold ${results.aiReadinessLevel === 'High' ? 'text-green-600' : results.aiReadinessLevel === 'Medium' ? 'text-amber-500' : 'text-red-500'}`}>
                {results.aiReadinessLevel}
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-brand-neutral-200 text-center">
              <div className="text-sm text-brand-neutral-500 font-bold uppercase mb-2">Brand Readiness</div>
              <div className={`text-xl font-bold ${results.personalBrandReadinessLevel === 'High' ? 'text-green-600' : results.personalBrandReadinessLevel === 'Medium' ? 'text-amber-500' : 'text-red-500'}`}>
                {results.personalBrandReadinessLevel}
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-brand-neutral-200 text-center">
              <div className="text-sm text-brand-neutral-500 font-bold uppercase mb-2">Life After Sport</div>
              <div className={`text-xl font-bold ${results.lifeAfterSportReadinessLevel === 'High' ? 'text-green-600' : results.lifeAfterSportReadinessLevel === 'Medium' ? 'text-amber-500' : 'text-red-500'}`}>
                {results.lifeAfterSportReadinessLevel}
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-brand-neutral-200 text-center">
              <div className="text-sm text-brand-neutral-500 font-bold uppercase mb-2">Reputation Risk</div>
              <div className={`text-xl font-bold ${results.digitalReputationRiskLevel === 'High' ? 'text-red-600' : results.digitalReputationRiskLevel === 'Medium' ? 'text-amber-500' : 'text-green-500'}`}>
                {results.digitalReputationRiskLevel}
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-[#1a1410] text-white p-8 md:p-12 mb-16 relative overflow-hidden border border-brand-gold/20">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.3),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold font-heading mb-4 text-brand-gold">Your Recommended Pathway</h2>
              <p className="text-xl mb-8 text-[#e8dfd0]">Based on your profile, we strongly recommend you start with: <br/><strong className="text-white text-2xl mt-2 inline-block">{results.recommendedProgramPathway}</strong></p>
              
              <div className="mb-12">
                <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-[#e8dfd0]">Recommended Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {recommendedProducts.map(product => (
                    <div key={product.id} className="bg-white text-brand-neutral-900 rounded-xl p-4 flex items-center">
                      <div className="bg-brand-gold text-white p-3 rounded-lg mr-4">
                        <Download className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold">{product.title}</h4>
                        <Button href={`/products/${product.id}`} variant="ghost" size="sm" className="px-0 h-auto text-brand-gold-dark mt-1 hover:bg-transparent hover:text-brand-gold">
                          View Details <ChevronRight className="w-4 h-4 ml-1 inline" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                <Button href="https://lornettedaye.com" variant="primary">Work with Coach Lornette ↗</Button>
                <Button href="/products" variant="outline" className="border-brand-neutral-700 text-white hover:bg-brand-neutral-800">View All Digital Tools</Button>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
