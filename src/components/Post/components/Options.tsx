import React, { forwardRef, ReactNode } from 'react';

export interface OptionsProps {
  children: ReactNode;
}
export const Options = forwardRef<HTMLDivElement, OptionsProps>((props, ref) => {
  return <div ref={ref} {...props} />;
});
