import { forwardRef } from 'react';
import { DynamicIcon, type IconName } from 'lucide-react/dynamic';
import type { LucideProps } from 'lucide-react';

export interface IconProps extends LucideProps {
  name: IconName;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 20, strokeWidth = 2, ...props }, ref) => {
    return (
      <DynamicIcon
        ref={ref}
        name={name}
        size={size}
        strokeWidth={strokeWidth}
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';