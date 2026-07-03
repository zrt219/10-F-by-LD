"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const MotionLink = motion.create(Link);

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-full transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-brand-gold/50 shadow-sm";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-gold to-brand-gold-dark text-white shadow-[0_4px_14px_0_rgba(200,168,75,0.39)] hover:shadow-[0_6px_20px_rgba(200,168,75,0.23)] hover:from-brand-gold-dark hover:to-brand-gold border border-brand-gold/50",
    secondary: "bg-gradient-to-r from-brand-neutral-900 to-brand-neutral-800 text-white border border-brand-neutral-700 shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)]",
    outline: "border-2 border-brand-neutral-900 text-brand-neutral-900 hover:bg-brand-neutral-900 hover:text-white bg-white",
    ghost: "text-brand-neutral-900 hover:bg-brand-neutral-100 shadow-none",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm min-h-[44px]",
    md: "px-6 py-3 text-base min-h-[48px]",
    lg: "px-8 py-4 text-lg min-h-[56px] md:min-h-[48px]",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const motionProps = {
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 }
  };

  if (href) {
    // If it's an external link
    if (href.startsWith('http')) {
      return (
        <motion.a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...motionProps}>
          {children}
        </motion.a>
      );
    }
    return (
      <MotionLink href={href} className={classes} {...motionProps}>
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button className={classes} {...(props as any)} {...motionProps}>
      {children}
    </motion.button>
  );
}
