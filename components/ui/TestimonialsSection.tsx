"use client";

import { useState } from 'react';

const testimonials = [
  {
    quote: "Lornette speaks from lived experience — she's been in the arena. The 10 F's framework gave our athletes a real language for the things they were already feeling but couldn't articulate.",
    name: "Athletic Program Coordinator",
    org: "University Athletic Department",
    sport: "Multi-Sport Program",
  },
  {
    quote: "I thought I had it all figured out. The questionnaire showed me the exact F's I was neglecting. Finance and Future were my blind spots — and now I have an actual plan.",
    name: "D1 Basketball Player",
    org: "NCAA Division I",
    sport: "Basketball",
  },
  {
    quote: "The identity work in the Faith and Future sections hit different. I've never had a program address who I am when I'm not competing. That's everything for athletes like me.",
    name: "Retiring Track Athlete",
    org: "Elite Athletics Program",
    sport: "Track & Field",
  },
  {
    quote: "Lornette brings credibility, warmth, and real tools. Not motivational fluff — actual strategies our student-athletes can use the next day.",
    name: "Head Coach",
    org: "High School Athletics",
    sport: "Multi-Sport",
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="py-20 bg-white border-b border-brand-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="label-gold mb-3">What Athletes & Coaches Say</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-neutral-900">
            Real Impact. Real Athletes.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Active testimonial */}
          <div className="bg-brand-ivory border border-brand-gold/30 p-8 md:p-12 mb-6 relative overflow-hidden transition-all duration-300">
            <div className="pointer-events-none absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(200,168,75,0.08),transparent_70%)]" />
            <p className="text-4xl text-brand-gold/30 font-heading font-bold leading-none mb-4">"</p>
            <blockquote className="text-xl md:text-2xl text-brand-neutral-800 font-medium leading-relaxed mb-8 italic">
              {t.quote}
            </blockquote>
            <div className="flex items-center gap-4 border-t border-brand-gold/20 pt-6">
              <div className="w-11 h-11 bg-brand-gold/15 flex items-center justify-center font-heading font-bold text-brand-gold text-sm">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-brand-neutral-900 text-sm">{t.name}</p>
                <p className="text-xs text-brand-neutral-500">{t.org} · {t.sport}</p>
              </div>
            </div>
          </div>

          {/* Dot nav */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`tap-scale transition-all duration-200 ${
                  i === active
                    ? 'w-8 h-2 bg-brand-gold'
                    : 'w-2 h-2 bg-brand-neutral-300 hover:bg-brand-gold/50'
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
