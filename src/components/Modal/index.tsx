import React, { ReactNode } from 'react';

import {
  DialogProps,
  Overlay as DialogOverlay,
  Root as DialogRoot,
  Portal as DialogPortal,
  Trigger as DialogTrigger,
  Content as DialogContent
} from '@radix-ui/react-dialog';
import { styled } from '@stitches/react';

import Button from '../Button';

// @TODO: use color variables

const Overlay = styled(DialogOverlay, {
  background: 'rgba(0 0 0 / 0.9)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'grid',
  placeItems: 'center',
  overflowY: 'auto',
  zIndex: 10000
});

const Content = styled(DialogContent, {
  minWidth: 300,
  background: '#0a0a0a',
  padding: 30,
  borderRadius: 16,
  border: '1px solid #3b3b3b'
});

export interface ModalProps extends DialogProps {
  className?: string;
  trigger?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ className, children, trigger, ...rest }) => {
  return (
    <DialogRoot {...rest}>
      {trigger && (
        <DialogTrigger asChild={true}>
          {typeof trigger === 'string' ? <Button>{trigger}</Button> : trigger}
        </DialogTrigger>
      )}
      <DialogPortal>
        <Overlay>
          <Content className={className}>{children}</Content>
        </Overlay>
      </DialogPortal>
    </DialogRoot>
  );
};

export default Modal;
