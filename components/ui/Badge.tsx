import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'success' | 'warning';
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        {
          'border-transparent bg-neutral-900 text-neutral-50':
            variant === 'default',
          'border-transparent bg-primary text-white': variant === 'primary',
          'border-transparent bg-secondary text-white': variant === 'secondary',
          'bg-white text-neutral-900': variant === 'outline',
          'border-transparent bg-green-500 text-white': variant === 'success',
          'border-transparent bg-yellow-500 text-neutral-900': variant === 'warning',
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };

