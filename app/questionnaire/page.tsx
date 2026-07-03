"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/ui/QuestionnaireFooter';
import { questionnaireQuestions } from '@/data/questionnaire';
import { calculateResults } from '@/utils/scoringEngine';
import { InitialAnswers, CoreAnswers, QuestionnaireState } from '@/types';

const SCALE_LABELS: Record<number, string> = {
  1: 'Not at all',
  2: 'Rarely',
  3: 'Sometimes',
  4: 'Usually',
  5: 'Always',
};

const HELP_TOPICS = [
  'Resume Building',
  'Interview Skills',
  'Personal Brand',
  'NIL / Sponsorship',
  'Academic Support',
  'Career Planning',
  'Mental Wellness',
  'Digital Reputation',
  'Leadership',
  'Finances',
];

export default function QuestionnairePage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [error, setError] = useState('');

  const [initialAnswers, setInitialAnswers] = useState<InitialAnswers>({
    name: '',
    ageRange: '',
    sports: '',
    competitionLevel: '',
    currentStatus: '',
    biggestPressure: '',
    usedAIBefore: '',
    helpTopics: [],
  });

  const [coreAnswers, setCoreAnswers] = useState<CoreAnswers>({});

  const handleInitialChange = (field: keyof InitialAnswers, value: any) => {
    setInitialAnswers(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleHelpTopicToggle = (topic: any) => {
    setInitialAnswers(prev => {
      const current = prev.helpTopics;
      if (current.includes(topic)) {
        return { ...prev, helpTopics: current.filter(t => t !== topic) };
      }
      return { ...prev, helpTopics: [...current, topic] };
    });
  };

  const handleCoreChange = (id: string, value: number) => {
    setCoreAnswers(prev => ({ ...prev, [id]: value }));
    setError('');
  };

  const handleNextStep = () => {
    if (!initialAnswers.name || !initialAnswers.competitionLevel || !initialAnswers.currentStatus || !initialAnswers.biggestPressure) {
      setError('Please fill in all required fields before continuing.');
      return;
    }
    setError('');
    setStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = () => {
    if (Object.keys(coreAnswers).length < questionnaireQuestions.length) {
      setError(`Please answer all ${questionnaireQuestions.length} questions before submitting. You've answered ${Object.keys(coreAnswers).length} so far.`);
      return;
    }

    const state: QuestionnaireState = { initialAnswers, coreAnswers };
    const results = calculateResults(state);
    localStorage.setItem('10f_results', JSON.stringify(results));
    localStorage.setItem('10f_profile_name', initialAnswers.name);
    router.push('/results');
  };

  const answeredCount = Object.keys(coreAnswers).length;
  const totalQuestions = questionnaireQuestions.length;

  const renderInitialQuestions = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* Coach intro */}
      <div className="bg-brand-gold/10 border border-brand-gold/30 p-4 mb-8">
        <p className="text-sm text-brand-neutral-700 leading-relaxed">
          <strong className="text-brand-neutral-900">Coach Lornette's Note:</strong> There are no wrong answers here. Be honest — this assessment is designed to meet you exactly where you are and help you grow.
        </p>
      </div>

      {/* Name */}
      <div>
        <label className="block text-sm font-bold text-brand-neutral-900 mb-2">
          First Name <span className="text-brand-gold">*</span>
        </label>
        <input
          type="text"
          value={initialAnswers.name}
          onChange={(e) => handleInitialChange('name', e.target.value)}
          className="w-full px-4 py-4 border-2 border-brand-neutral-200 bg-white text-brand-neutral-900 placeholder:text-brand-neutral-400 text-base focus:border-brand-gold outline-none transition-colors"
          placeholder="Enter your first name"
        />
      </div>

      {/* Sport */}
      <div>
        <label className="block text-sm font-bold text-brand-neutral-900 mb-2">Your Sport</label>
        <input
          type="text"
          value={initialAnswers.sports}
          onChange={(e) => handleInitialChange('sports', e.target.value)}
          className="w-full px-4 py-4 border-2 border-brand-neutral-200 bg-white text-brand-neutral-900 placeholder:text-brand-neutral-400 text-base focus:border-brand-gold outline-none transition-colors"
          placeholder="e.g. Basketball, Track & Field, Soccer..."
        />
      </div>

      {/* Competition Level — Tile Selector */}
      <div>
        <label className="block text-sm font-bold text-brand-neutral-900 mb-3">
          Competition Level <span className="text-brand-gold">*</span>
        </label>
        <div className="grid grid-cols-2 gap-2">
          {['Youth Athlete', 'High School', 'College / NCAA', 'Club Athlete', 'Semi-Professional', 'Professional', 'Retired Athlete'].map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => handleInitialChange('competitionLevel', level.toLowerCase())}
              className={`tap-scale px-4 py-4 min-h-[56px] text-sm font-bold text-left border-2 transition-all ${
                initialAnswers.competitionLevel === level.toLowerCase()
                  ? 'border-brand-gold bg-brand-gold text-white'
                  : 'border-brand-neutral-200 bg-white text-brand-neutral-700 hover:border-brand-gold/60'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Current Status — Tile Selector */}
      <div>
        <label className="block text-sm font-bold text-brand-neutral-900 mb-3">
          Current Status <span className="text-brand-gold">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {['In-Season', 'Off-Season', 'Injured / Recovering', 'Transitioning Out', 'Exploring Careers', 'Already Working'].map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => handleInitialChange('currentStatus', status.toLowerCase())}
              className={`tap-scale px-4 py-4 min-h-[56px] text-sm font-bold text-left border-2 transition-all ${
                initialAnswers.currentStatus === status.toLowerCase()
                  ? 'border-brand-gold bg-brand-gold text-white'
                  : 'border-brand-neutral-200 bg-white text-brand-neutral-700 hover:border-brand-gold/60'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Biggest Pressure — Tile Selector */}
      <div>
        <label className="block text-sm font-bold text-brand-neutral-900 mb-3">
          Biggest Current Pressure <span className="text-brand-gold">*</span>
        </label>
        <div className="grid grid-cols-2 gap-2">
          {['Performance', 'Injury', 'Academics', 'Family Expectations', 'Finances', 'Confidence', 'Social Media', 'Future / Career', 'Mental Health', 'Time Management'].map((pressure) => (
            <button
              key={pressure}
              type="button"
              onClick={() => handleInitialChange('biggestPressure', pressure.toLowerCase())}
              className={`tap-scale px-3 py-3.5 min-h-[52px] text-sm font-bold text-left border-2 transition-all ${
                initialAnswers.biggestPressure === pressure.toLowerCase()
                  ? 'border-brand-gold bg-brand-gold text-white'
                  : 'border-brand-neutral-200 bg-white text-brand-neutral-700 hover:border-brand-gold/60'
              }`}
            >
              {pressure}
            </button>
          ))}
        </div>
      </div>

      {/* AI Experience */}
      <div>
        <label className="block text-sm font-bold text-brand-neutral-900 mb-3">Have you used AI tools (like ChatGPT) before?</label>
        <div className="flex gap-3">
          {['Yes', 'No'].map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => handleInitialChange('usedAIBefore', opt.toLowerCase())}
              className={`tap-scale flex-1 py-4 min-h-[56px] text-sm font-bold border-2 transition-all ${
                initialAnswers.usedAIBefore === opt.toLowerCase()
                  ? 'border-brand-gold bg-brand-gold text-white'
                  : 'border-brand-neutral-200 bg-white text-brand-neutral-700 hover:border-brand-gold/60'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Help Topics */}
      <div>
        <label className="block text-sm font-bold text-brand-neutral-900 mb-3">
          What areas do you want help with? <span className="text-brand-neutral-400 font-normal">(select all that apply)</span>
        </label>
        <div className="grid grid-cols-2 gap-2">
          {HELP_TOPICS.map(topic => (
            <button
              key={topic}
              type="button"
              onClick={() => handleHelpTopicToggle(topic)}
              className={`tap-scale px-3 py-3.5 min-h-[52px] text-sm font-bold text-left border-2 transition-all flex items-center gap-2 ${
                initialAnswers.helpTopics.includes(topic as any)
                  ? 'border-brand-gold bg-brand-gold/10 text-brand-neutral-900'
                  : 'border-brand-neutral-200 bg-white text-brand-neutral-600 hover:border-brand-gold/60'
              }`}
            >
              <span className={`w-4 h-4 border-2 flex-shrink-0 flex items-center justify-center text-xs font-bold transition-all ${
                initialAnswers.helpTopics.includes(topic as any)
                  ? 'border-brand-gold bg-brand-gold text-white'
                  : 'border-brand-neutral-300'
              }`}>
                {initialAnswers.helpTopics.includes(topic as any) ? '✓' : ''}
              </span>
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 text-sm font-medium">
          {error}
        </div>
      )}

      {/* Next Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-brand-ivory/95 backdrop-blur-md border-t border-brand-neutral-200 shadow-[0_-4px_20px_rgba(26,19,12,0.08)] md:relative md:bg-transparent md:backdrop-blur-none md:border-0 md:shadow-none md:p-0 md:pt-6 z-40">
        <div className="max-w-3xl mx-auto pb-[env(safe-area-inset-bottom)]">
          <button
            onClick={handleNextStep}
            className="tap-scale w-full md:w-auto bg-brand-gold text-white px-8 py-4 min-h-[56px] text-base font-bold uppercase tracking-wide hover:bg-brand-gold-dark transition-all"
          >
            Continue to Core Questions →
          </button>
        </div>
      </div>
    </div>
  );

  const renderCoreQuestions = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* Live progress counter */}
      <div className="bg-brand-gold/10 border border-brand-gold/30 px-4 py-3 flex items-center justify-between">
        <p className="text-sm font-bold text-brand-neutral-700">
          {answeredCount} of {totalQuestions} questions answered
        </p>
        <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">
          {answeredCount === totalQuestions ? '✓ Complete!' : `${totalQuestions - answeredCount} remaining`}
        </span>
      </div>

      <div className="bg-brand-ivory border border-brand-neutral-200 p-4 mb-2">
        <p className="text-sm text-brand-neutral-600 leading-relaxed">
          Rate how strongly you agree with each statement. <strong className="text-brand-neutral-900">1 = Not at all, 5 = Always.</strong> Be honest — this determines your personalized pathway.
        </p>
      </div>

      {questionnaireQuestions.map((q, index) => (
        <div key={q.id} className="border-b border-brand-neutral-200 pb-8 last:border-0">
          <p className="text-base md:text-lg font-semibold text-brand-neutral-900 mb-5 leading-relaxed">
            <span className="inline-block text-brand-gold font-bold mr-2 font-heading">{index + 1}.</span>
            {q.text}
          </p>

          {/* Mobile-first full-width tile buttons */}
          <div className="grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map(score => (
              <button
                key={score}
                type="button"
                onClick={() => handleCoreChange(q.id, score)}
                className={`tap-scale flex flex-col items-center justify-center min-h-[64px] py-2 px-1 border-2 font-bold transition-all ${
                  coreAnswers[q.id] === score
                    ? 'border-brand-gold bg-brand-gold text-white shadow-md scale-105'
                    : 'border-brand-neutral-200 bg-white text-brand-neutral-700 hover:border-brand-gold/60 hover:bg-brand-ivory'
                }`}
              >
                <span className="text-xl font-heading">{score}</span>
                <span className="text-[9px] font-bold uppercase tracking-wide mt-0.5 leading-tight text-center opacity-70">
                  {SCALE_LABELS[score]}
                </span>
              </button>
            ))}
          </div>

          {/* Selected label confirmation */}
          {coreAnswers[q.id] && (
            <p className="text-xs text-brand-gold font-bold mt-2 uppercase tracking-wide">
              ✓ {SCALE_LABELS[coreAnswers[q.id]]}
            </p>
          )}
        </div>
      ))}

      {/* Error message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 text-sm font-medium">
          {error}
        </div>
      )}

      {/* Sticky Submit Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-brand-ivory/95 backdrop-blur-md border-t border-brand-neutral-200 shadow-[0_-4px_20px_rgba(26,19,12,0.08)] md:relative md:bg-transparent md:backdrop-blur-none md:border-0 md:shadow-none md:p-0 md:pt-8 z-40">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 pb-[env(safe-area-inset-bottom)]">
          <button
            onClick={() => { setStep(0); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="tap-scale order-2 sm:order-1 px-6 py-3 min-h-[52px] border-2 border-brand-neutral-300 text-brand-neutral-700 text-sm font-bold hover:border-brand-neutral-500 transition-colors"
          >
            ← Back
          </button>
          <button
            onClick={handleSubmit}
            className={`tap-scale order-1 sm:order-2 flex-1 sm:flex-none px-8 py-4 min-h-[56px] text-base font-bold uppercase tracking-wide transition-all ${
              answeredCount === totalQuestions
                ? 'bg-brand-gold text-white hover:bg-brand-gold-dark'
                : 'bg-brand-neutral-200 text-brand-neutral-500 cursor-not-allowed'
            }`}
          >
            {answeredCount === totalQuestions ? 'Submit & Get My Profile →' : `Answer All Questions (${answeredCount}/${totalQuestions})`}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-brand-ivory">
      <Header />

      <main className="flex-grow py-10 md:py-16 pb-32 md:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page Header */}
          <div className="text-center mb-10">
            <p className="label-gold mb-3">Student-Athlete Readiness Assessment</p>
            <h1 className="text-3xl md:text-4xl font-bold font-heading text-brand-neutral-900 mb-4 leading-tight">
              The 10 F's<br className="sm:hidden" /> Questionnaire
            </h1>
            <p className="text-brand-neutral-600 max-w-xl mx-auto leading-relaxed">
              Discover your strongest areas and where you need the most support to finish strong in sport and in life.
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-xs font-bold text-brand-neutral-400 mb-2 uppercase tracking-widest">
              <span className={step === 0 ? 'text-brand-gold' : 'text-brand-neutral-400'}>01 — Your Context</span>
              <span className={step === 1 ? 'text-brand-gold' : 'text-brand-neutral-400'}>02 — Core Assessment</span>
            </div>
            <div className="h-1.5 w-full bg-brand-neutral-200 overflow-hidden">
              <div
                className="h-full bg-brand-gold transition-all duration-700 ease-in-out"
                style={{ width: step === 0 ? '50%' : '100%' }}
              />
            </div>
            {step === 1 && (
              <div className="h-1 w-full bg-brand-neutral-100 mt-1 overflow-hidden">
                <div
                  className="h-full bg-brand-gold/40 transition-all duration-300"
                  style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
                />
              </div>
            )}
          </div>

          {/* Form Card */}
          <div className="bg-white border border-brand-neutral-200 shadow-sm p-6 md:p-10">
            {step === 0 ? renderInitialQuestions() : renderCoreQuestions()}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
