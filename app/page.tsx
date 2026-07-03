import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { digitalProducts } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { FadeIn } from '@/components/ui/FadeIn';
import { TestimonialsSection } from '@/components/ui/TestimonialsSection';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = digitalProducts.slice(0, 3);

  const fs = [
    { name: 'Faith', desc: 'Identity & inner strength', num: '01' },
    { name: 'Fitness', desc: 'Discipline & recovery', num: '02' },
    { name: 'Food', desc: 'Energy & focus', num: '03' },
    { name: 'Friends', desc: 'Support systems', num: '04' },
    { name: 'Family', desc: 'Boundaries & legacy', num: '05' },
    { name: 'Finance', desc: 'NIL & money decisions', num: '06' },
    { name: 'Fashion', desc: 'Presence & confidence', num: '07' },
    { name: 'Fun', desc: 'Balance & joy', num: '08' },
    { name: 'Future', desc: 'Career & life after sport', num: '09' },
    { name: 'Finish Strong', desc: 'Purpose & action plans', num: '10' },
  ];

  const stats = [
    { value: '40+', label: 'Years of Experience' },
    { value: '500+', label: 'Athletes Mentored' },
    { value: '150+', label: 'International Competitors' },
    { value: 'Global', label: 'Canada to the World' },
  ];

  const challenges = [
    {
      title: 'Identity Beyond the Jersey',
      desc: 'Who are you when the cheering stops? We help athletes discover their core purpose and build confidence outside of their athletic performance.',
      icon: '🎯',
    },
    {
      title: 'The Digital Reputation',
      desc: 'One post can cost a scholarship or an NIL deal. We teach personal branding, responsible AI use, and digital footprint management.',
      icon: '📱',
    },
    {
      title: 'Career Translation',
      desc: 'The discipline learned in sports translates perfectly to the boardroom. We prepare athletes for the interview room and the workforce.',
      icon: '🚀',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">

        {/* ── HERO ── */}
        <section className="bg-brand-ivory relative overflow-hidden border-b border-brand-gold/20">
          {/* Decorative gradients */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.92)_0%,rgba(250,247,238,0.84)_50%,rgba(232,221,200,0.55)_100%)]" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.12),transparent_60%)]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left copy */}
              <div>
                <FadeIn>
                  <p className="inline-flex items-center gap-2 border border-brand-gold/40 bg-white/70 px-3 py-2 text-xs font-bold uppercase tracking-widest text-brand-gold shadow-sm mb-6">
                    Canadian National Sprint Champion · Coach · Speaker
                  </p>
                  <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-brand-neutral-900 leading-[1.05] mb-6">
                    The 10 F's<br />
                    <span className="text-brand-gold">by Lornette Daye</span>
                  </h1>
                  <p className="text-lg text-brand-neutral-600 leading-relaxed mb-8 max-w-xl">
                    A student-athlete success program built by a former elite sprinter — helping athletes build career readiness, mental wellness, personal brand confidence, and life-after-sport direction.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button href="/questionnaire" size="lg">Take the Assessment</Button>
                    <Button href="/program" variant="outline" size="lg">Explore the Program</Button>
                  </div>
                </FadeIn>
              </div>

              {/* Right stat grid */}
              <FadeIn delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="bg-white border border-brand-gold/30 p-6 shadow-sm hover:shadow-md hover:border-brand-gold transition-all"
                    >
                      <p className="font-heading text-3xl font-bold text-brand-gold mb-1">{s.value}</p>
                      <p className="text-xs font-bold uppercase tracking-wide text-brand-neutral-500">{s.label}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── FOUNDER ── */}
        <section className="py-20 bg-white border-b border-brand-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Quote panel — replaces the gray placeholder box */}
              <FadeIn direction="up">
                <div className="bg-brand-ivory border border-brand-gold/30 p-8 sm:p-10 relative overflow-hidden">
                  <div className="pointer-events-none absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle,rgba(212,175,55,0.12),transparent_70%)]" />
                  <p className="text-5xl text-brand-gold/30 font-heading font-bold leading-none mb-4">"</p>
                  <blockquote className="text-xl leading-relaxed text-brand-neutral-800 font-medium mb-6">
                    Helping athletes rise through challenge, remember their worth, and move forward with purpose beyond sport.
                  </blockquote>
                  <div className="flex items-center gap-4 border-t border-brand-gold/20 pt-6">
                    <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold font-heading text-lg">LD</div>
                    <div>
                      <p className="font-bold font-heading text-brand-neutral-900">Lornette Daye</p>
                      <p className="text-xs uppercase tracking-widest text-brand-neutral-500">Former Canadian National Sprint Champion</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Bio Text */}
              <FadeIn delay={0.1} direction="up">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">The Founder</p>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-neutral-900 mb-6 leading-tight">
                    Finishing Strong<br />Beyond Sport
                  </h2>
                  <p className="text-brand-neutral-600 mb-5 leading-relaxed text-base">
                    Lornette Daye knows what it takes to perform at the highest levels. As a former elite sprinter, Canadian National Team athlete, and National Coach, she understands the unique pressures athletes face—from performance anxiety to life-after-sport transitions.
                  </p>
                  <p className="text-brand-neutral-600 mb-5 leading-relaxed text-base">
                    With 40+ years of experience coaching and mentoring over 500 athletes, Lornette built the 10 F's framework to equip the next generation with the tools they need to build their identity, leverage their platform, and transition their athletic discipline into professional success.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button href="/about" variant="secondary">Read Lornette's Full Story</Button>
                    <a
                      href="https://lornettedaye.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand-gold hover:text-brand-gold-dark transition-colors"
                    >
                      Visit lornettedaye.com ↗
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── CREDIBILITY STRIP ── */}
        <section className="py-6 bg-[#1a130c] border-y border-brand-gold/30 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">Trusted By</p>
              <div className="flex flex-wrap justify-center sm:justify-end gap-x-8 gap-y-2 text-[#e8dfd0] text-sm font-semibold">
                <span>NCAA Programs</span>
                <span>Canadian National Athletics</span>
                <span>Youth Sport Organizations</span>
                <span>University Athletic Departments</span>
                <span>Elite Coaching Programs</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <TestimonialsSection />

        {/* ── CHALLENGES SECTION ── */}
        <section className="py-20 bg-brand-ivory border-b border-brand-gold/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-14">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">The Challenge</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-neutral-900 mb-4">The Pressures Athletes Face Today</h2>
                <p className="text-brand-neutral-600 max-w-3xl mx-auto text-lg leading-relaxed">
                  Student-athletes are navigating unprecedented pressures: NIL deals, social media scrutiny, digital footprints, AI academic integrity, and the looming reality of life after sport. Most programs focus only on the physical game. We focus on the whole person.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {challenges.map((c, i) => (
                <FadeIn key={c.title} delay={i * 0.1} direction="up">
                  <div className="bg-white border border-brand-neutral-200 hover:border-brand-gold p-8 transition-all hover:shadow-md group">
                    <span className="block text-4xl mb-4">{c.icon}</span>
                    <h3 className="font-heading text-xl font-bold text-brand-neutral-900 mb-3 group-hover:text-brand-gold transition-colors">{c.title}</h3>
                    <p className="text-brand-neutral-600 text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE 10 F's FRAMEWORK ── */}
        <section className="py-20 bg-white border-b border-brand-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-14">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">The Framework</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-neutral-900 mb-4">The 10 F's Framework</h2>
                <p className="text-brand-neutral-600 max-w-2xl mx-auto">A holistic approach to student-athlete development — each F is a pillar of total personal readiness.</p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
              {fs.map((f, i) => (
                <FadeIn key={f.name} delay={i * 0.05} direction="up">
                  <div className="bg-brand-ivory border border-brand-neutral-200 hover:border-brand-gold p-5 text-center transition-all hover:shadow-sm group">
                    <span className="block text-xs font-bold text-brand-gold/50 font-heading mb-2">{f.num}</span>
                    <span className="block font-heading font-bold text-brand-neutral-900 text-sm mb-1 group-hover:text-brand-gold transition-colors">{f.name}</span>
                    <span className="block text-xs text-brand-neutral-500">{f.desc}</span>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="text-center">
              <Button href="/program">Explore the Full Framework</Button>
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section className="py-20 bg-brand-ivory border-b border-brand-gold/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="flex justify-between items-end mb-12">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">Digital Resources</p>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-neutral-900 mb-3">Digital Product Library</h2>
                  <p className="text-brand-neutral-600 max-w-2xl">Practical workbooks, devotionals, and guides designed specifically for the student-athlete journey.</p>
                </div>
                <Link href="/products" className="text-brand-gold font-bold hover:text-brand-gold-dark hidden md:flex items-center gap-1 transition-colors text-sm">
                  View All <span>→</span>
                </Link>
              </div>
            </FadeIn>

            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
              {featuredProducts.map((product, idx) => (
                <FadeIn key={product.id} delay={idx * 0.1} className="min-w-[85vw] snap-center md:min-w-0 flex-shrink-0 md:flex-shrink">
                  <ProductCard product={product} />
                </FadeIn>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Button href="/products" variant="outline">View All Products</Button>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 bg-[#1a1410] text-white text-center relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1),transparent_70%)]" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">Start Today</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Find Your Profile?</h2>
              <p className="text-xl mb-10 text-[#e8dfd0] leading-relaxed">
                Take the Student-Athlete Readiness Questionnaire to discover your strongest F's and get a personalized growth pathway — built on the same discipline that built a national champion.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button href="/questionnaire" size="lg">Start the Questionnaire</Button>
                <Button href="/contact" variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10 hover:border-white">Book Lornette to Speak</Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
