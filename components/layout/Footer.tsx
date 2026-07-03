import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1410] text-white py-14 border-t-2 border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand col */}
          <div className="md:col-span-1">
            <span className="font-heading font-bold text-2xl tracking-tight text-white block mb-1">
              The 10 F's
            </span>
            <span className="text-xs uppercase tracking-widest text-brand-gold font-bold block mb-4">
              by Lornette Daye
            </span>
            <p className="text-sm text-[#d8cfc0] leading-relaxed mb-5">
              A student-athlete success program helping athletes finish strong beyond sport.
            </p>
            <a
              href="https://lornettedaye.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-brand-gold hover:text-white text-sm font-bold transition-colors"
            >
              Visit LornetteDaye.com →
            </a>
          </div>

          {/* Program col */}
          <div>
            <h4 className="text-brand-gold font-bold mb-4 uppercase text-xs tracking-widest">Program</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/program" className="text-[#e8dfd0] hover:text-white hover:text-brand-gold transition-colors">The 10 F's Framework</Link></li>
              <li><Link href="/questionnaire" className="text-[#e8dfd0] hover:text-white transition-colors">Student-Athlete Questionnaire</Link></li>
              <li><Link href="/pathways" className="text-[#e8dfd0] hover:text-white transition-colors">Program Pathways</Link></li>
            </ul>
          </div>

          {/* Resources col */}
          <div>
            <h4 className="text-brand-gold font-bold mb-4 uppercase text-xs tracking-widest">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products" className="text-[#e8dfd0] hover:text-white transition-colors">Digital Products</Link></li>
              <li><Link href="/schools" className="text-[#e8dfd0] hover:text-white transition-colors">For Schools &amp; Depts</Link></li>
            </ul>
          </div>

          {/* Connect col */}
          <div>
            <h4 className="text-brand-gold font-bold mb-4 uppercase text-xs tracking-widest">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-[#e8dfd0] hover:text-white transition-colors">About Lornette</Link></li>
              <li><Link href="/contact" className="text-[#e8dfd0] hover:text-white transition-colors">Book a Speaking Event</Link></li>
              <li>
                <a
                  href="mailto:ldayespeaking@gmail.com"
                  className="text-[#e8dfd0] hover:text-white transition-colors"
                >
                  ldayespeaking@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/lornette-d-419276358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e8dfd0] hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#c8bfad] gap-3">
          <p>&copy; {currentYear} Lornette Daye. All rights reserved.</p>
          <span className="text-center">
            Disclaimer: Educational and motivational only. Not medical, financial, or legal advice.
          </span>
        </div>
      </div>
    </footer>
  );
}
