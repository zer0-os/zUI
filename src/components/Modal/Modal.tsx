import React, { ReactNode } from 'react';

import {
  DialogProps,
  Overlay as DialogOverlay,
  Root as DialogRoot,
  Portal as DialogPortal,
  Trigger as DialogTrigger,
  Content as DialogContent
} from '@radix-ui/react-dialog';

import { Button } from '../..';

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
          <DialogContent className={classNames(className, styles.Content)}>{children}</DialogContent>
        </DialogOverlay>
      </DialogPortal>
    </DialogRoot>
  );
};
