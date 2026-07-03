"use client";

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const stages = [
  {
    id: 'in-season',
    title: 'In-Season Focus',
    description: 'When the game demands everything, focus on the fundamentals of survival and performance.',
    focusFs: ['Fitness', 'Food', 'Focus'],
    advice: 'Your time is extremely limited. The goal is maintenance and mental health. Protect your peace and lean on your support systems.'
  },
  {
    id: 'off-season',
    title: 'Off-Season Building',
    description: 'This is where champions are made, both on the field and in life.',
    focusFs: ['Future', 'Finances', 'Footprint'],
    advice: 'Now is the time to update the resume, take an internship, and clean up your social media. Build the foundation.'
  },
  {
    id: 'transitioning',
    title: 'Transitioning Out of Sport',
    description: 'The hardest season. Who are you when the cheering stops?',
    focusFs: ['Faith', 'Family', 'Friends'],
    advice: 'Your identity is not your sport. Lean into your faith and community to rediscover your core purpose beyond the jersey.'
  }
];

export default function PathwaysPage() {
  const [activeStage, setActiveStage] = useState(stages[0].id);
  
  const currentStage = stages.find(s => s.id === activeStage);

  return (
    <div className="min-h-screen flex flex-col bg-brand-ivory">
      <Header />
      
      <main className="flex-grow py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-brand-neutral-900 mb-4">Athlete Development Pathways</h1>
              <p className="text-xl text-brand-neutral-600 max-w-3xl mx-auto">
                How you apply the 10 F's depends entirely on what season of life you are in. Select your current stage below to see your personalized focus areas.
              </p>
            </div>
          </FadeIn>
          
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left sidebar - Stages */}
            <FadeIn direction="right" className="w-full md:w-1/3 flex flex-col space-y-4">
              {stages.map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(stage.id)}
                  className={`text-left p-6 rounded-2xl transition-all duration-300 border-2 ${
                    activeStage === stage.id 
                      ? 'border-brand-gold bg-white shadow-lg' 
                      : 'border-transparent bg-brand-neutral-50 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <h3 className={`text-xl font-bold ${activeStage === stage.id ? 'text-brand-gold-dark' : 'text-brand-neutral-900'}`}>
                    {stage.title}
                  </h3>
                </button>
              ))}
            </FadeIn>
            
            {/* Right content area - Details */}
            <div className="w-full md:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-brand-neutral-100 h-full"
                >
                  <h2 className="text-3xl font-bold font-heading mb-4 text-brand-neutral-900">
                    {currentStage?.title}
                  </h2>
                  <p className="text-lg text-brand-neutral-600 mb-10 border-b border-brand-neutral-100 pb-8">
                    {currentStage?.description}
                  </p>
                  
                  <div className="mb-10">
                    <h4 className="text-sm font-bold text-brand-neutral-900 uppercase tracking-wider mb-4">Core Focus Areas</h4>
                    <div className="flex flex-wrap gap-4">
                      {currentStage?.focusFs.map(f => (
                        <span key={f} className="px-6 py-3 bg-brand-gold/10 text-brand-gold-dark font-bold rounded-full border border-brand-gold/20">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-brand-neutral-50 p-6 rounded-2xl border border-brand-neutral-200">
                    <h4 className="text-sm font-bold text-brand-neutral-900 uppercase tracking-wider mb-2">Coach Lornette's Advice</h4>
                    <p className="text-brand-neutral-700 font-medium italic">"{currentStage?.advice}"</p>
                  </div>
                  
                  <div className="mt-10">
                     <Button href="/questionnaire" className="w-full sm:w-auto">Take the Assessment for a Custom Pathway</Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
