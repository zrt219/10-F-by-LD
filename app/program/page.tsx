"use client";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import type { Metadata } from 'next';

const fDetails = [
  {
    name: 'Faith',
    num: '01',
    tagline: 'Know who you are beyond the sport.',
    desc: 'Identity, values, purpose, inner strength, and resilience when facing setbacks. Faith is the foundation that holds every other F together.',
    icon: '🙏',
    color: 'border-l-brand-gold',
  },
  {
    name: 'Fitness',
    num: '02',
    tagline: 'Train your body. Protect your career.',
    desc: 'Discipline, recovery, performance habits, sleep, injury prevention, and long-term body care that extends your athletic lifespan.',
    icon: '💪',
    color: 'border-l-brand-gold',
  },
  {
    name: 'Food',
    num: '03',
    tagline: 'Fuel your performance from the inside out.',
    desc: 'Hydration, energy, focus, and long-term nutrition habits. Your body is your vehicle — what you put in determines what you get out.',
    icon: '🥗',
    color: 'border-l-brand-gold',
  },
  {
    name: 'Friends',
    num: '04',
    tagline: 'Your circle determines your ceiling.',
    desc: 'Teammates, mentors, support systems, and navigating peer influence. The five people closest to you shape your trajectory.',
    icon: '🤝',
    color: 'border-l-brand-gold',
  },
  {
    name: 'Family',
    num: '05',
    tagline: 'Honor your roots. Protect your peace.',
    desc: 'Support, handling pressure, setting healthy boundaries, navigating expectations, and building a lasting legacy for those who come after you.',
    icon: '🏡',
    color: 'border-l-brand-gold',
  },
  {
    name: 'Finance',
    num: '06',
    tagline: 'Your athletic career is a business.',
    desc: 'Budgeting, banking, credit, NIL awareness, sponsorship negotiations, and making smart money decisions that build long-term security.',
    icon: '💰',
    color: 'border-l-brand-gold',
  },
  {
    name: 'Fashion',
    num: '07',
    tagline: 'How you show up is how you\'re remembered.',
    desc: 'Personal presentation, interview readiness, media presence, brand consistency, and the confidence that comes from owning how you look.',
    icon: '👔',
    color: 'border-l-brand-gold',
  },
  {
    name: 'Fun',
    num: '08',
    tagline: 'Champions need joy to stay great.',
    desc: 'Balance, joy, hobbies, mental recovery, and a full life outside sport. Without fun, you burn out — and burnout kills both performance and passion.',
    icon: '🎯',
    color: 'border-l-brand-gold',
  },
  {
    name: 'Future',
    num: '09',
    tagline: 'The game ends. Your life doesn\'t.',
    desc: 'Career readiness, education, entrepreneurship, leadership, internships, and the life waiting for you after the jersey comes off.',
    icon: '🚀',
    color: 'border-l-brand-gold',
  },
  {
    name: 'Finish Strong',
    num: '10',
    tagline: 'Decide. Act. Lead.',
    desc: 'Action plans, responsible AI use, digital reputation management, and the courageous decision-making that separates great athletes from great humans.',
    icon: '🏆',
    color: 'border-l-brand-gold',
  },
];

export default function ProgramPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">

        {/* Hero */}
        <section className="bg-brand-ivory py-20 md:py-28 text-center border-b border-brand-gold/20 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,168,75,0.08),transparent_60%)]" />
          <div className="max-w-4xl mx-auto px-4 relative">
            <p className="label-gold mb-5">The Framework</p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-brand-neutral-900 mb-6 leading-tight">
              The 10 F's Framework
            </h1>
            <p className="text-xl text-brand-neutral-600 max-w-3xl mx-auto leading-relaxed">
              A holistic development program designed to build the entire student-athlete — not just the competitor. Each F is a life pillar that shapes who you become beyond the game.
            </p>
          </div>
        </section>

        {/* Framework Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <p className="label-gold mb-3 text-center">The 10 Pillars</p>
              <h2 className="font-heading text-3xl font-bold text-brand-neutral-900 mb-12 text-center">Every F Is a Life Skill</h2>
            </FadeIn>
            <div className="grid gap-5 md:grid-cols-2">
              {fDetails.map((f, i) => (
                <FadeIn key={f.name} delay={i * 0.05} direction="up">
                  <div className="card-lift bg-brand-ivory border border-brand-neutral-200 border-l-4 border-l-brand-gold p-6 md:p-8 group h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <span className="text-3xl">{f.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-heading text-4xl font-bold text-brand-gold/25 leading-none">{f.num}</span>
                          <h3 className="font-heading text-2xl font-bold text-brand-neutral-900 group-hover:text-brand-gold transition-colors">
                            {f.name}
                          </h3>
                        </div>
                        <p className="text-sm font-bold text-brand-gold uppercase tracking-wide mb-3">{f.tagline}</p>
                        <p className="text-brand-neutral-600 text-sm leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Why This Works */}
        <section className="py-20 bg-brand-ivory border-y border-brand-gold/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <p className="label-gold mb-4">Why It Works</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-neutral-900 mb-6 leading-tight">
                  Built by someone<br className="hidden md:block"/> who lived it.
                </h2>
                <p className="text-brand-neutral-600 leading-relaxed mb-5">
                  Most athlete development programs focus only on the physical game. The 10 F's goes deeper — addressing the mental, social, financial, and spiritual dimensions that determine whether an athlete thrives or struggles after competition ends.
                </p>
                <p className="text-brand-neutral-600 leading-relaxed">
                  Created by Lornette Daye, a former Canadian National Sprint Champion with 40+ years of coaching experience, every F is drawn from real mentoring conversations, real athlete struggles, and real transformation stories.
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { n: '10', l: 'Life Pillars' },
                    { n: '40+', l: 'Years Experience' },
                    { n: '500+', l: 'Athletes Mentored' },
                    { n: '100%', l: 'Athlete Focused' },
                  ].map(s => (
                    <div key={s.l} className="bg-white border border-brand-gold/30 p-6 text-center card-lift">
                      <p className="font-heading text-3xl font-bold text-brand-gold mb-1">{s.n}</p>
                      <p className="text-xs font-bold uppercase tracking-wide text-brand-neutral-500">{s.l}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#1a130c] text-white text-center relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,168,75,0.10),transparent_70%)]" />
          <div className="relative max-w-3xl mx-auto px-4">
            <p className="label-gold mb-4">Start Today</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">Find Your Starting Point</h2>
            <p className="text-[#e8dfd0] mb-8 text-lg leading-relaxed">
              Not sure which of the 10 F's you need to focus on first? Take our comprehensive readiness questionnaire to get your personalized profile and recommended pathway.
            </p>
            <Button href="/questionnaire" size="lg">Take the Questionnaire</Button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
