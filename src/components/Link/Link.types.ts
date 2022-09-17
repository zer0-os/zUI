import { ReactNode } from 'react';

/**
 * Props which apply to all types of Link
 */
export interface SharedProps {
  className?: string;
  as?: 'link' | 'button' | 'back';
  arrowDirection?: 'left' | 'right';
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  isDisabled?: boolean;
}

/**
 * Omit<SharedProps, ...> to remove any shared props
 * which aren't relevant to a type of Link.
 * 'as' - this is not relevant to
 */
export type ComponentProps = Omit<SharedProps, 'as'>;
