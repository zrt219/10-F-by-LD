import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-gold/50";
  
  const variants = {
    primary: "bg-brand-gold text-white hover:bg-brand-gold-dark hover:shadow-lg hover:-translate-y-0.5",
    secondary: "bg-brand-neutral-900 text-white hover:bg-brand-neutral-800 hover:shadow-md hover:-translate-y-0.5",
    outline: "border-2 border-brand-neutral-900 text-brand-neutral-900 hover:bg-brand-neutral-900 hover:text-white hover:shadow-md hover:-translate-y-0.5",
    ghost: "text-brand-neutral-900 hover:bg-brand-neutral-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm min-h-[44px]",
    md: "px-6 py-3 text-base min-h-[48px]",
    lg: "px-8 py-4 text-lg min-h-[56px] md:min-h-[48px]",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
