import { type ElementType, type HTMLAttributes } from 'react';

import cn from '../libs/utils/cn';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export function Typography({
  as: Component = 'p',
  className,
  children,
  ...props
}: TypographyProps) {
  return (
    <Component className={cn('font-open-sans', className)} {...props}>
      {children}
    </Component>
  );
}
