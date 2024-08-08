import React, { forwardRef, ReactNode } from 'react';
import { Actions, Body, Container, Details, Header, Options } from './components';

export interface PostProps {
  actions?: ReactNode;
  body: ReactNode;
  className?: string;
  details: ReactNode;
  options?: ReactNode;
}

export const Post = forwardRef<HTMLDivElement, PostProps>(({ actions, body, options, details }, ref) => {
  return (
    <Container ref={ref}>
      <Header>
        <Details>{details}</Details>
        {options && <Options>{options}</Options>}
      </Header>
      <Body>{body}</Body>
      {actions && <Actions>{actions}</Actions>}
    </Container>
  );
});
