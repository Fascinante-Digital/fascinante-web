import React from 'react';

type BadgeAlign = 'left' | 'center' | 'right';

type BadgeProps = {
  children: React.ReactNode;
  align?: BadgeAlign;
  className?: string;
};

export default function Badge({ children, align = 'left', className = '' }: BadgeProps) {
  const alignmentClasses: Record<BadgeAlign, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <p className={`text-tagline text-sm sm:text-base ${alignmentClasses[align]} ${className}`}>
      {children}
    </p>
  );
}
