// src/components/ui/Button.tsx
'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '../../lib/utils';

const buttonVariants = {
  primary: 'bg-brand-orange text-brand-light hover:bg-brand-orange/90 shadow-brand-orange/30',
  outline: 'bg-transparent text-brand-orange border border-brand-orange hover:bg-brand-orange/10',
  whatsapp: 'bg-brand-orange text-brand-light hover:bg-brand-orange/90 rounded-full',
  outlineWhite: 'bg-brand-light text-brand-orange border border-brand-orange hover:bg-brand-orange/10 rounded-full',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  href?: string;
  iconLeft?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, iconLeft, children, ...props }, ref) => {
    const commonClassNames = cn(
      'inline-flex items-center justify-center font-semibold rounded-full transition shadow-lg',
      buttonVariants[variant],
      buttonSizes[size],
      className
    );

    const iconLeftElement = iconLeft && <span className="mr-2.5 -ml-1 flex items-center">{iconLeft}</span>;

    if (href) {
      return (
        <Link href={href} className={commonClassNames} ref={ref as React.Ref<HTMLAnchorElement>}>
          {iconLeftElement}
          {children}
        </Link>
      );
    }

    return (
      <button
        className={commonClassNames}
        type="button"
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {iconLeftElement}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };