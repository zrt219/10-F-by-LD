// Minimal footer for the questionnaire page (no nav clutter during assessment)
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#1a130c] text-[#c8bfad] py-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
        <p>&copy; {new Date().getFullYear()} Lornette Daye. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/program" className="hover:text-white transition-colors">Program</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
