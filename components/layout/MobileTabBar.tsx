"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Map, ClipboardList, Library } from 'lucide-react';

export function MobileTabBar() {
  const pathname = usePathname();

  // Hide the global tab bar when the user is actively taking the questionnaire
  // because the questionnaire has its own sticky bottom controls that need focus.
  if (pathname === '/questionnaire') {
    return null;
  }

  const navItems = [
    { name: 'Home', href: '/', icon: <Home size={24} /> },
    { name: 'Pathways', href: '/pathways', icon: <Map size={24} /> },
    { name: 'Products', href: '/products', icon: <Library size={24} /> },
    { name: 'Assessment', href: '/questionnaire', icon: <ClipboardList size={24} /> },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-brand-neutral-200 z-40 pb-[env(safe-area-inset-bottom)]">
      <nav className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
                isActive ? 'text-brand-gold' : 'text-brand-neutral-400 hover:text-brand-neutral-900'
              }`}
            >
              <div className={`transition-transform duration-200 ${isActive ? 'scale-110' : 'scale-100'}`}>
                {item.icon}
              </div>
              <span className="text-[10px] font-bold tracking-wide">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
