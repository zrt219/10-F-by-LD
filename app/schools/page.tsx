import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';

const topics = [
  { title: 'AI for Student-Athlete Career Readiness', desc: 'How to use AI tools ethically and strategically for resumes, interviews, and research.' },
  { title: 'From Sport to Career', desc: 'Personal brand, professional decision-making, and translating athletic discipline into workplace success.' },
  { title: 'Life After Sport Transitions', desc: 'Identity shifts, emotional processing, and building your next chapter with clarity and confidence.' },
  { title: 'Healthy AI Habits & Digital Reputation', desc: 'Protecting your digital footprint, academic integrity, and long-term personal brand image.' },
  { title: 'Finish Strong: Confidence & Leadership', desc: 'Purpose-driven leadership skills, executive presence, and being the person who lifts others.' },
];

const deliveryFormats = [
  { icon: '🎤', label: 'Keynote', desc: 'Inspiring 45–90 min talk for large events, conferences, and athlete banquets.' },
  { icon: '🎓', label: 'Workshop', desc: 'Interactive 2–4 hour sessions with activities, breakouts, and personalized takeaways.' },
  { icon: '📅', label: 'Multi-Session', desc: 'Deep-dive series across 4–8 weeks for sustained team transformation.' },
  { icon: '💻', label: 'Virtual', desc: 'Full-program delivery via Zoom or Teams — no travel required.' },
];

export default function SchoolsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">

        {/* Hero */}
        <section className="bg-brand-ivory py-20 md:py-28 text-center border-b border-brand-gold/20 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,168,75,0.08),transparent_60%)]" />
          <div className="max-w-4xl mx-auto px-4 relative">
            <p className="label-gold mb-5">For Athletic Departments & Schools</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-neutral-900 mb-6 leading-tight">
              Equip Your Athletes<br className="hidden sm:block"/> for Life Beyond the Game
            </h1>
            <p className="text-xl text-brand-neutral-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Partner with The 10 F's to bring premium whole-athlete development programming to NCAA athletic departments, universities, high schools, and youth sport clubs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/contact" size="lg">Book a Consultation</Button>
              <Button href="/program" variant="outline" size="lg">Explore the Framework</Button>
            </div>
          </div>
        </section>

        {/* Delivery Formats */}
        <section className="py-16 bg-white border-b border-brand-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <p className="label-gold mb-3 text-center">Program Delivery</p>
              <h2 className="font-heading text-3xl font-bold text-brand-neutral-900 mb-10 text-center">We Meet You Where You Are</h2>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {deliveryFormats.map((f, i) => (
                <FadeIn key={f.label} delay={i * 0.08} direction="up">
                  <div className="card-lift bg-brand-ivory border border-brand-neutral-200 p-6 text-center group">
                    <span className="text-4xl block mb-3">{f.icon}</span>
                    <p className="font-heading font-bold text-brand-neutral-900 mb-2 group-hover:text-brand-gold transition-colors">{f.label}</p>
                    <p className="text-xs text-brand-neutral-500 leading-relaxed">{f.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Topics */}
        <section className="py-20 bg-brand-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              <FadeIn>
                <p className="label-gold mb-3">Keynote & Workshop Topics</p>
                <h2 className="font-heading text-3xl font-bold text-brand-neutral-900 mb-8 leading-tight">
                  Relevant. Timely.<br/>Built for Today's Athlete.
                </h2>
                <div className="space-y-4">
                  {topics.map((topic, i) => (
                    <div key={i} className="callout-gold group">
                      <p className="font-bold text-brand-neutral-900 mb-1 text-sm group-hover:text-brand-gold transition-colors">
                        {topic.title}
                      </p>
                      <p className="text-xs text-brand-neutral-500 leading-relaxed">{topic.desc}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div>
                  <p className="label-gold mb-3">Why Schools Choose Us</p>
                  <h2 className="font-heading text-3xl font-bold text-brand-neutral-900 mb-8 leading-tight">
                    Credibility That<br/>Opens Doors.
                  </h2>
                  <div className="bg-[#1a130c] text-white p-8 border border-brand-gold/20 mb-6">
                    <p className="text-brand-gold font-heading text-4xl mb-2">"</p>
                    <blockquote className="text-[#e8dfd0] text-lg leading-relaxed mb-6">
                      The 10 F's can be delivered as a keynote, 50-minute workshop, multi-session program, team leadership session, or digital course — customized to your program.
                    </blockquote>
                    <p className="text-[#e8dfd0] font-bold text-sm">Lornette Daye</p>
                    <p className="text-brand-neutral-400 text-xs uppercase tracking-wide">Former Canadian National Sprint Champion</p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { n: '40+', l: 'Years Experience' },
                      { n: '500+', l: 'Athletes Coached' },
                      { n: 'Global', l: 'Program Reach' },
                    ].map(s => (
                      <div key={s.l} className="bg-white border border-brand-gold/30 p-4 text-center card-lift">
                        <p className="font-heading font-bold text-xl text-brand-gold">{s.n}</p>
                        <p className="text-[10px] uppercase tracking-wide text-brand-neutral-500 font-bold mt-1">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#1a130c] text-center">
          <div className="max-w-3xl mx-auto px-4">
            <p className="label-gold mb-4">Partner With Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Bring The 10 F's<br className="hidden md:block"/> to Your Athletes?
            </h2>
            <p className="text-[#e8dfd0] text-lg leading-relaxed mb-8">
              Reach out to discuss customized programming for your department, school, or organization. Lornette's team responds within 48 hours.
            </p>
            <Button href="/contact" size="lg">Book a Consultation →</Button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
