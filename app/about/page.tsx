import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Lornette Daye | The 10 F's Student-Athlete Program",
  description: "Former Canadian National Sprint Champion, Olympic-level athlete & coach, certified transformational speaker. Lornette Daye's story of resilience, purpose, and impact spans 40+ years.",
};

const credentials = [
  'Professional Keynote Speaker',
  'Olympic-level Athlete & Coach',
  'Canadian National Sprint Champion',
  'Certified Transformational Speaker',
  'Author',
  'Youth Leader & Mentor',
  'Project Manager',
  'Certified Toastmasters Speaker',
  'Former National Track Champion (100m & 200m)',
  'National Coach',
  'Diversity Award Winner',
];

const timeline = [
  {
    label: 'Early Start',
    body: 'After moving from Jamaica to Canada at ten, Lornette explored every sport she could. Track and Field became the passion that shaped her discipline and confidence.',
  },
  {
    label: 'Elite Athlete',
    body: 'That passion became performance. Through discipline and focus, Lornette earned provincial and national titles, turning natural speed into a career shaped by resilience and purpose.',
  },
  {
    label: 'Coach & Mentor',
    body: 'Even while competing, Lornette made time to encourage others. As a coach, she spent more than two decades helping athletes grow in sport, school, confidence, and wellness.',
  },
  {
    label: 'Expanding Impact',
    body: 'After athletics, Lornette brought the same drive into corporate, nonprofit, and community work, helping organizations, families, and young athletes move forward with practical support.',
  },
  {
    label: 'Global Transformation',
    body: 'Today, as a certified speaker, Lornette uses her story to reach the whole person, helping audiences leave with greater clarity, courage, and belief.',
  },
];

const stats = [
  { value: '40+', label: 'Years Speaking, Coaching & Mentoring' },
  { value: '500+', label: 'Athletes Mentored and Coached' },
  { value: '150+', label: 'International-Level Competitors Guided' },
  { value: 'Global', label: 'Perspective From Canada to the World' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-brand-ivory py-20 md:py-28 border-b border-brand-gold/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.08),transparent_60%)] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-5">About Lornette Daye</p>
              <h1 className="font-heading text-4xl sm:text-6xl font-bold text-brand-neutral-900 leading-tight mb-6">
                Purpose, performance,<br className="hidden sm:block" /> and impact.
              </h1>
              <p className="text-lg text-brand-neutral-600 leading-relaxed max-w-3xl">
                Certified Toastmasters Speaker, Olympic-level Athlete & Coach, Canadian National Sprint Champion, Author, and Transformational Speaker with over 40 years of experience inspiring individuals, teams, and organizations to achieve excellence, resilience, and purpose-driven success.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-[#1a1410] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-px">
            {stats.map((stat) => (
              <div key={stat.label} className="py-8 text-center border border-white/10">
                <p className="font-heading text-4xl font-bold text-brand-gold mb-2">{stat.value}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#e8dfd0]">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-20 bg-white border-b border-brand-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[0.75fr_1.25fr] items-start">
            <FadeIn>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">Biography</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-neutral-900 leading-tight mb-5">
                  A credible voice for resilience, identity, faith, leadership, and community change.
                </h2>
                <p className="text-sm font-bold text-brand-neutral-500 leading-relaxed">
                  Former National Track Champion (100m & 200m) | National Coach | Diversity Award Winner | Motivational Speaker | Thought Leader
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="grid gap-4">
                {[
                  'Lornette Daye is a former track athlete, national coach, Diversity Award Winner, author, and motivational speaker whose credibility is grounded in elite athletic achievement, lived resilience, decades of mentorship, and measurable community impact.',
                  'Her athletic background includes multiple national and Western Canada Games titles in the 100m and 200m sprints, along with provincial and city championships. Her career as an elite athlete took her across Canada, the United States, and Europe, including Poland and Germany.',
                  'As a Black athlete in the 1970s, Lornette experienced tremendous adversity, including housing insecurity and discrimination. Those challenges became part of the foundation for her message on resilience, identity, faith, courage, and helping younger athletes rise through similar struggles.',
                  'Across decades as an elite competitor, national coach, entrepreneur, mentor, and author, Lornette has built the authority to speak to schools, organizations, churches, women, youth, athletes, founders, and community leaders who need practical tools for confidence, resilience, and purpose.',
                ].map((para, i) => (
                  <p
                    key={i}
                    className="border-l-2 border-brand-gold/60 bg-brand-ivory px-5 py-4 text-sm leading-7 text-brand-neutral-600"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-brand-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">Timeline</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-neutral-900 leading-tight mb-12">
                A journey of discipline.<br className="hidden md:block" /> A life of impact.
              </h2>
            </FadeIn>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {timeline.map((item, i) => (
                <FadeIn key={item.label} delay={i * 0.08} direction="up">
                  <div className="bg-white border border-brand-neutral-200 p-6 h-full hover:border-brand-gold transition-colors">
                    <span className="block text-3xl font-bold font-heading text-brand-gold/30 text-center mb-3">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="font-heading text-lg font-bold text-brand-neutral-900 text-center mb-3">{item.label}</p>
                    <p className="text-sm leading-6 text-brand-neutral-600">{item.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Credentials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl mb-10">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">Mission</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-neutral-900 leading-tight mb-5">
                  Unlock potential. Strengthen communities. Develop leaders.
                </h2>
                <p className="text-lg text-brand-neutral-600 leading-relaxed">
                  Her mission is to help people rise through challenge, remember their worth, and move forward with purpose. True success is measured not only by personal accomplishments but by the lives we touch, the communities we strengthen, and the leaders we develop.
                </p>
              </div>
            </FadeIn>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 mb-10">
              {credentials.map((cred) => (
                <div key={cred} className="flex items-start gap-3 border-l-2 border-brand-gold/60 bg-brand-ivory px-4 py-3">
                  <span className="text-brand-gold mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span className="text-sm font-semibold text-brand-neutral-700">{cred}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact">Book Lornette</Button>
              <Button href="/program" variant="outline">Explore The 10 F's Program</Button>
              <a
                href="https://lornettedaye.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-brand-neutral-300 px-6 py-3 text-sm font-bold uppercase text-brand-neutral-700 hover:border-brand-gold hover:text-brand-gold transition-colors rounded-lg"
              >
                Visit lornettedaye.com ↗
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#1a1410] text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">Start Your Journey</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white">
                Discover Your Athlete Profile
              </h2>
              <p className="text-[#e8dfd0] mb-8 text-lg leading-relaxed">
                Take Lornette's Student-Athlete Readiness Questionnaire to discover your strongest F's and get a personalized growth pathway—built on the same discipline that built a national champion.
              </p>
              <Button href="/questionnaire" size="lg">Take the Questionnaire</Button>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
