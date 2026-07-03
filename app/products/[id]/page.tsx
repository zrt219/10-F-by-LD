import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { digitalProducts } from '@/data/products';
import { Button } from '@/components/ui/Button';
import { notFound } from 'next/navigation';
import { BookOpen, FileText, Download, CheckCircle2 } from 'lucide-react';

export default async function ProductDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const product = digitalProducts.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-brand-ivory">
      <Header />
      
      <main className="flex-grow py-12 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-lg border border-brand-neutral-200 overflow-hidden flex flex-col md:flex-row">
            {/* Left Image Placeholder */}
            <div className="w-full md:w-5/12 bg-brand-neutral-100 flex items-center justify-center p-12 relative">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-brand-gold-dark via-brand-neutral-100 to-brand-neutral-100"></div>
              <div className="relative z-10 w-full aspect-[3/4] bg-white rounded-lg shadow-md border border-brand-neutral-200 flex flex-col items-center justify-center p-6 text-center">
                <span className="font-heading font-bold text-2xl mb-2 text-brand-neutral-900 leading-tight">
                  {product.title}
                </span>
                <span className="text-sm font-medium text-brand-gold-dark">by Lornette Daye</span>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col">
              <span className="inline-block bg-brand-neutral-100 text-brand-neutral-800 text-xs px-3 py-1 rounded-full font-medium mb-4 self-start">
                Best for: {product.bestFor}
              </span>
              
              <h1 className="text-3xl md:text-4xl font-bold font-heading text-brand-neutral-900 mb-4">
                {product.title}
              </h1>
              
              <p className="text-lg text-brand-neutral-600 mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="mb-8">
                <h3 className="font-bold text-brand-neutral-900 mb-3 text-sm uppercase tracking-wider">Available Formats</h3>
                <div className="flex flex-wrap gap-3">
                  {product.formats.map((format) => (
                    <div key={format} className="flex items-center bg-brand-neutral-50 px-4 py-2 rounded-lg border border-brand-neutral-200 text-sm font-medium text-brand-neutral-700">
                      {format === 'PDF' && <FileText className="w-4 h-4 mr-2 text-brand-neutral-500" />}
                      {format === 'Word' && <Download className="w-4 h-4 mr-2 text-brand-neutral-500" />}
                      {format === 'Kindle' && <BookOpen className="w-4 h-4 mr-2 text-brand-neutral-500" />}
                      {format}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-brand-neutral-900 mb-3 text-sm uppercase tracking-wider">What's Inside</h3>
                <ul className="space-y-2">
                  {['Practical athlete-focused exercises', 'Reflection prompts', 'Coach Lornette\'s personal insights', 'Finish Strong action steps'].map((item, idx) => (
                    <li key={idx} className="flex items-start text-brand-neutral-600">
                      <CheckCircle2 className="w-5 h-5 text-brand-gold mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto pt-8 border-t border-brand-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <span className="block text-sm text-brand-neutral-500 mb-1">One-time purchase</span>
                  <span className="font-bold text-3xl text-brand-neutral-900">{product.price}</span>
                </div>
                {product.isAvailable ? (
                  product.stripeLink ? (
                    <Button href={product.stripeLink} size="lg" className="w-full sm:w-auto shadow-lg">Purchase & Download</Button>
                  ) : (
                    <Button size="lg" className="w-full sm:w-auto shadow-lg">Purchase & Download</Button>
                  )
                ) : (
                  <Button disabled variant="secondary" size="lg" className="w-full sm:w-auto opacity-70 cursor-not-allowed">Coming Soon</Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
