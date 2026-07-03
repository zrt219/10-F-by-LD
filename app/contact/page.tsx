"use client";

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FadeIn } from '@/components/ui/FadeIn';

const INQUIRY_TYPES = ['Speaking Engagement', 'Team / Group Coaching', 'School / Athletic Dept', 'Media / Press', 'General Inquiry'];

export default function ContactPage() {
  const [type, setType] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">

        {/* Hero */}
        <section className="bg-brand-ivory py-16 md:py-24 border-b border-brand-gold/20 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,168,75,0.08),transparent_60%)]" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <FadeIn>
              <p className="label-gold mb-4">Book Lornette</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-neutral-900 mb-4 leading-tight">
                Let's Work Together
              </h1>
              <p className="text-lg text-brand-neutral-600 max-w-2xl leading-relaxed">
                Whether you're booking a speaking event, bringing the 10 F's to your athletic department, or just getting started — reach out and Lornette's team will respond within 48 hours.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Contact Layout */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left — Contact Info */}
            <FadeIn className="lg:col-span-2">
              <div>
                <h2 className="font-heading text-2xl font-bold text-brand-neutral-900 mb-6">Contact Information</h2>

                <div className="space-y-5 mb-10">
                  <div className="flex items-start gap-4 border-l-2 border-brand-gold pl-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-neutral-400 mb-1">Email</p>
                      <a href="mailto:ldayespeaking@gmail.com" className="text-brand-neutral-900 font-semibold hover:text-brand-gold transition-colors">
                        ldayespeaking@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 border-l-2 border-brand-gold pl-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-neutral-400 mb-1">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/lornette-d-419276358"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-neutral-900 font-semibold hover:text-brand-gold transition-colors"
                      >
                        Connect on LinkedIn →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 border-l-2 border-brand-gold pl-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-neutral-400 mb-1">Website</p>
                      <a
                        href="https://lornettedaye.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-neutral-900 font-semibold hover:text-brand-gold transition-colors"
                      >
                        lornettedaye.com →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 border-l-2 border-brand-gold pl-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-neutral-400 mb-1">Location</p>
                      <p className="text-brand-neutral-700 font-medium">Based in Canada · Serving Globally</p>
                    </div>
                  </div>
                </div>

                {/* Speaking topics */}
                <div className="bg-brand-ivory border border-brand-gold/30 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">Lornette Speaks On</p>
                  <ul className="space-y-2">
                    {[
                      'Identity & Resilience for Athletes',
                      'Life After Sport Transitions',
                      'Personal Branding & NIL',
                      'AI Readiness for Student-Athletes',
                      'Women in Sport & Leadership',
                      'Faith, Purpose & Performance',
                    ].map(topic => (
                      <li key={topic} className="flex items-center gap-2 text-sm text-brand-neutral-700">
                        <span className="text-brand-gold font-bold">›</span> {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Right — Form */}
            <FadeIn delay={0.1} className="lg:col-span-3">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 border-2 border-brand-gold">
                  <span className="text-5xl mb-6">✓</span>
                  <h3 className="font-heading text-2xl font-bold text-brand-neutral-900 mb-3">Message Sent!</h3>
                  <p className="text-brand-neutral-600">Thank you for reaching out. Lornette's team will respond within 48 hours.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="space-y-5"
                >
                  <h2 className="font-heading text-2xl font-bold text-brand-neutral-900 mb-6">Send a Message</h2>

                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-sm font-bold text-brand-neutral-900 mb-3">Inquiry Type</label>
                    <div className="grid grid-cols-2 gap-2">
                      {INQUIRY_TYPES.map(t => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setType(t)}
                          className={`tap-scale px-3 py-3 min-h-[52px] text-sm font-bold text-left border-2 transition-all ${
                            type === t
                              ? 'border-brand-gold bg-brand-gold text-white'
                              : 'border-brand-neutral-200 bg-white text-brand-neutral-700 hover:border-brand-gold/60'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-brand-neutral-900 mb-2">Full Name *</label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-3 min-h-[52px] border-2 border-brand-neutral-200 bg-white text-brand-neutral-900 placeholder:text-brand-neutral-400 focus:border-brand-gold outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-brand-neutral-900 mb-2">Email *</label>
                      <input
                        required
                        type="email"
                        className="w-full px-4 py-3 min-h-[52px] border-2 border-brand-neutral-200 bg-white text-brand-neutral-900 placeholder:text-brand-neutral-400 focus:border-brand-gold outline-none transition-colors"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-brand-neutral-900 mb-2">Organization / School</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 min-h-[52px] border-2 border-brand-neutral-200 bg-white text-brand-neutral-900 placeholder:text-brand-neutral-400 focus:border-brand-gold outline-none transition-colors"
                      placeholder="University, club, team, or company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-brand-neutral-900 mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-brand-neutral-200 bg-white text-brand-neutral-900 placeholder:text-brand-neutral-400 focus:border-brand-gold outline-none transition-colors resize-none"
                      placeholder="Tell us about your event, program, or request..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="tap-scale w-full bg-brand-gold text-white py-4 min-h-[56px] font-bold uppercase tracking-wide text-sm hover:bg-brand-gold-dark transition-all"
                  >
                    Send Message →
                  </button>

                  <p className="text-xs text-brand-neutral-400 text-center">
                    By submitting, you agree to be contacted by Lornette Daye's team. No spam, ever.
                  </p>
                </form>
              )}
            </FadeIn>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
