import React, { forwardRef, HTMLProps } from 'react';

export type BodyProps = HTMLProps<HTMLDivElement>;

export const Body = forwardRef<HTMLDivElement, BodyProps>((props, ref) => {
  return <div ref={ref} {...props} />;
});
