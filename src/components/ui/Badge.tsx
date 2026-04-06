// src/components/ui/Badge.tsx
'use client';

import * as React from 'react';
import { cn } from '../../lib/utils';

const badgeVariants = {
  hero: 'bg-white/10 text-brand-light backdrop-blur-sm',
};

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants;
  iconLeft?: React.ReactNode;
}

const Badge = ({ className, variant = 'hero', iconLeft, children, ...props }: BadgeProps) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full shadow-sm',
        badgeVariants[variant],
        className
      )}
      {...props}
    >
      {iconLeft && <span className="flex items-center text-current">{iconLeft}</span>}
      {children}
    </div>
  );
};

Badge.displayName = 'Badge';

export { Badge };