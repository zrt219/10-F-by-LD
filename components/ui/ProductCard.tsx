import React from 'react';
import Link from 'next/link';
import { Button } from './Button';
import { BookOpen, FileText, Download, Star } from 'lucide-react';

export interface Product {
  id: string;
  title: string;
  description: string;
  bestFor: string;
  formats: ('PDF' | 'Word' | 'Kindle')[];
  price: string;
  isAvailable: boolean;
  badge?: string;
}

const FORMAT_ICONS: Record<string, React.ReactNode> = {
  PDF: <FileText className="w-3.5 h-3.5" />,
  Word: <Download className="w-3.5 h-3.5" />,
  Kindle: <BookOpen className="w-3.5 h-3.5" />,
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card-lift bg-white border border-brand-neutral-200 border-l-4 border-l-brand-gold overflow-hidden flex flex-col h-full group">
      {/* Top bar */}
      <div className="bg-brand-ivory px-5 py-3 border-b border-brand-neutral-100 flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">
          Best for: {product.bestFor}
        </span>
        {product.badge && (
          <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-white bg-brand-gold px-2 py-0.5">
            <Star className="w-3 h-3" /> {product.badge}
          </span>
        )}
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-lg font-bold font-heading text-brand-neutral-900 mb-2 leading-snug group-hover:text-brand-gold transition-colors">
          {product.title}
        </h3>
        <p className="text-sm text-brand-neutral-500 mb-4 leading-relaxed line-clamp-3 flex-grow">
          {product.description}
        </p>

        {/* Formats */}
        <div className="flex items-center gap-3 mb-4 text-xs text-brand-neutral-400 font-semibold">
          {product.formats.map((format) => (
            <div key={format} className="flex items-center gap-1">
              {FORMAT_ICONS[format]}
              <span>{format}</span>
            </div>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-brand-neutral-100">
          <span className="font-heading font-bold text-2xl text-brand-neutral-900">
            {product.price}
          </span>
          {product.isAvailable ? (
            <Link
              href={`/products/${product.id}`}
              className="tap-scale inline-flex items-center gap-1.5 bg-brand-gold text-white px-4 py-2.5 min-h-[44px] text-sm font-bold uppercase tracking-wide hover:bg-brand-gold-dark transition-all"
            >
              View Details →
            </Link>
          ) : (
            <span className="text-xs font-bold uppercase tracking-wider text-brand-neutral-400 border border-brand-neutral-200 px-3 py-2">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
