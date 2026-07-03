import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { digitalProducts } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Digital Product Library | The 10 F's by Lornette Daye",
  description: "Practical workbooks, devotionals, and guides for the student-athlete journey. AI-readiness guides, NIL playbooks, identity workbooks, and more.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">

        {/* Hero */}
        <section className="bg-brand-ivory py-16 md:py-24 border-b border-brand-gold/20 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,168,75,0.08),transparent_60%)]" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <FadeIn>
              <p className="label-gold mb-4">Digital Resources</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-neutral-900 mb-4 leading-tight">
                Digital Product Library
              </h1>
              <p className="text-lg text-brand-neutral-600 max-w-2xl leading-relaxed">
                Practical workbooks, devotionals, and guides designed specifically for the student-athlete journey. Available in PDF, Word, and Kindle formats — built to use immediately.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Mobile scroll / Desktop grid */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
              {digitalProducts.map((product, i) => (
                <FadeIn key={product.id} delay={i * 0.06} className="min-w-[85vw] snap-center md:min-w-0 flex-shrink-0 md:flex-shrink">
                  <ProductCard product={product} />
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        {/* Scroll hint for mobile only */}
        <div className="flex justify-center gap-2 py-2 md:hidden">
          {digitalProducts.map((_, i) => (
            <span key={i} className={`block h-1.5 rounded-full ${i === 0 ? 'w-6 bg-brand-gold' : 'w-1.5 bg-brand-neutral-300'}`} />
          ))}
        </div>

        {/* CTA */}
        <section className="py-16 bg-brand-ivory border-t border-brand-gold/20 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <p className="label-gold mb-3">Start Here</p>
            <h2 className="font-heading text-3xl font-bold text-brand-neutral-900 mb-5">
              Not sure where to begin?
            </h2>
            <p className="text-brand-neutral-600 mb-8 leading-relaxed">
              Take the Student-Athlete Readiness Questionnaire to find out exactly which resources will have the biggest impact on your journey.
            </p>
            <Button href="/questionnaire" size="lg">Take the Questionnaire</Button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
