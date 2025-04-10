import React, { ReactNode } from 'react';

import {
  DialogProps,
  Overlay as DialogOverlay,
  Root as DialogRoot,
  Portal as DialogPortal,
  Trigger as DialogTrigger,
  Content as DialogContent,
  Title as DialogTitle,
  Description as DialogDescription
} from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { Button } from '../Button';

import styles from './Modal.module.scss';
import classNames from 'classnames';

export interface ModalProps extends DialogProps {
  className?: string;
  trigger?: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ className, children, trigger, ...rest }) => {
  return (
    <DialogRoot {...rest}>
      {trigger && (
        <DialogTrigger asChild={true}>
          {typeof trigger === 'string' ? <Button>{trigger}</Button> : trigger}
        </DialogTrigger>
      )}
      <DialogPortal>
        <DialogOverlay className={styles.Overlay}>
          <div className={styles.ContentWrapper}>
            <DialogContent className={classNames(className, styles.Content)}>
              {/* 
              Visually hidden title and description required by Radix UI for accessibility 
              This is a workaround to avoid the title and description being visible in the modal
              */}
              <VisuallyHidden asChild>
                <DialogTitle>Modal</DialogTitle>
              </VisuallyHidden>
              <VisuallyHidden asChild>
                <DialogDescription>This is a modal dialog</DialogDescription>
              </VisuallyHidden>

              {children}
            </DialogContent>
          </div>
        </DialogOverlay>
      </DialogPortal>
    </DialogRoot>
  );
};
