"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "The 10 F's completely changed how I approach my life outside of basketball. I finally feel confident walking into an interview room.",
    author: "Division I Basketball Player",
    role: "Senior, Point Guard"
  },
  {
    id: 2,
    quote: "Lornette's framework is exactly what our athletic department needed. We are seeing athletes make smarter decisions on social media and taking their futures seriously.",
    author: "Athletic Director",
    role: "Power 5 Conference"
  },
  {
    id: 3,
    quote: "Transitioning out of sport was the hardest thing I've ever done. The 'Because You Matter' journal helped me rebuild my identity.",
    author: "Former Pro Athlete",
    role: "Current Business Founder"
  }
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden py-12 px-4 md:px-12 bg-white rounded-3xl shadow-sm border border-brand-neutral-100 max-w-4xl mx-auto">
      <div className="absolute top-8 left-8 text-brand-gold/20">
        <Quote size={80} />
      </div>
      
      <div className="relative z-10 min-h-[200px] flex items-center justify-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <p className="text-xl md:text-3xl font-medium text-brand-neutral-900 mb-8 leading-relaxed max-w-3xl">
              "{testimonials[currentIndex].quote}"
            </p>
            <div>
              <p className="font-bold text-lg text-brand-neutral-900">{testimonials[currentIndex].author}</p>
              <p className="text-brand-gold-dark font-medium">{testimonials[currentIndex].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center space-x-3 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 ${
              idx === currentIndex ? 'bg-brand-gold w-8' : 'bg-brand-neutral-300 hover:bg-brand-neutral-400'
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
