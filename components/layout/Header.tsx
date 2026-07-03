"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Mail } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Program', href: '/program' },
    { name: 'Pathways', href: '/pathways' },
    { name: 'Questionnaire', href: '/questionnaire' },
    { name: 'Products', href: '/products' },
    { name: 'Schools', href: '/schools' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Framer Motion Variants
  const menuVariants: Variants = {
    closed: { opacity: 0, clipPath: "circle(0px at calc(100% - 40px) 40px)", transition: { duration: 0.5, delay: 0.2, type: "spring", stiffness: 400, damping: 40 } },
    open: { opacity: 1, clipPath: "circle(150% at calc(100% - 40px) 40px)", transition: { duration: 0.5, type: "spring", stiffness: 20, restDelta: 2 } }
  };

  const linkContainerVariants: Variants = {
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } }
  };

  const linkItemVariants: Variants = {
    closed: { opacity: 0, y: 50, transition: { y: { stiffness: 1000 } } },
    open: { opacity: 1, y: 0, transition: { y: { stiffness: 1000, velocity: -100 } } }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-brand-ivory py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center z-50">
            <Link href="/" className="group flex items-baseline" onClick={() => setIsMobileMenuOpen(false)}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-baseline"
              >
                <span className="font-heading font-bold text-2xl md:text-3xl tracking-tight text-brand-neutral-900 transition-colors group-hover:text-brand-gold">10 F's</span>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, width: 0 },
                    visible: { 
                      opacity: 1, 
                      width: "auto",
                      transition: { duration: 0.8, delay: 0.3, ease: "circOut" }
                    }
                  }}
                  className="overflow-hidden whitespace-nowrap ml-2 hidden sm:block"
                >
                  <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-brand-gold">
                    by Lornette Daye
                  </span>
                </motion.div>
              </motion.div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.filter(link => link.name !== 'Home' && link.name !== 'Questionnaire').map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-brand-neutral-700 hover:text-brand-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/questionnaire"
              className="bg-brand-gold text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-gold-dark hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              Assessment
            </Link>
          </nav>

          {/* Animated Hamburger Button */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 relative focus:outline-none flex flex-col justify-center items-center gap-1.5 z-50"
              aria-label="Toggle Menu"
            >
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-brand-neutral-900 block rounded-full"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                className="w-6 h-0.5 bg-brand-neutral-900 block rounded-full"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-brand-neutral-900 block rounded-full"
              />
            </button>
          </div>
        </div>
      </div>

      {/* 900x Improved Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-8 pb-12 overflow-y-auto"
          >
            {/* Background glowing orb effect */}
            <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-brand-neutral-200/50 rounded-full blur-3xl pointer-events-none"></div>

            <motion.nav 
              variants={linkContainerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col space-y-6 flex-grow relative z-10 mt-12"
            >
              {navLinks.map((item) => (
                <motion.div key={item.name} variants={linkItemVariants}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-bold font-heading text-brand-neutral-900 hover:text-brand-gold transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Bottom Socials Section */}
            <motion.div 
              variants={linkItemVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="relative z-10 mt-auto pt-12"
            >
              <div className="h-px w-full bg-brand-neutral-100 mb-8"></div>
              <p className="text-sm font-bold text-brand-neutral-400 uppercase tracking-widest mb-6">Connect</p>
              <div className="flex space-x-6">
                <a href="#" className="w-12 h-12 rounded-full bg-brand-neutral-50 flex items-center justify-center text-brand-neutral-900 hover:bg-brand-gold hover:text-white transition-all shadow-sm">
                  {/* Instagram SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-brand-neutral-50 flex items-center justify-center text-brand-neutral-900 hover:bg-brand-gold hover:text-white transition-all shadow-sm">
                  {/* Twitter/X SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-brand-neutral-50 flex items-center justify-center text-brand-neutral-900 hover:bg-brand-gold hover:text-white transition-all shadow-sm">
                  {/* LinkedIn SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-brand-neutral-50 flex items-center justify-center text-brand-neutral-900 hover:bg-brand-gold hover:text-white transition-all shadow-sm">
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
