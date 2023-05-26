import React, { useEffect, useState, useRef, useCallback } from 'react';

import { Button } from '../Button';
import { IconInfoCircle, IconXClose } from '../Icons';

import * as Toast from '@radix-ui/react-toast';

import styles from './ToastNotification.module.scss';

type ToastPositionVariant = 'left' | 'right';
type ToastThemeVariant = 'primary' | 'success' | 'error';

const { ToastRoot, ToastIcon, TextWrapper, ToastTitle, ToastDescription, ToastButton, ToastClose, ToastViewport } =
  styles;

export type ToastNotificationProps = Toast.ToastProviderProps & {
  title: string;
  description: string;
  actionTitle: string;
  actionAltText: string;
  positionVariant?: ToastPositionVariant;
  themeVariant?: ToastThemeVariant;
  swipeDirection?: Toast.SwipeDirection;
  openToast?: boolean;
  onClick?: () => void;
  onClose?: () => void;
};

export const ToastNotification = ({
  title,
  description,
  actionTitle,
  actionAltText = 'call to action',
  positionVariant = 'right',
  themeVariant = 'primary',
  swipeDirection = 'left',
  openToast = false,
  onClick,
  onClose
}: ToastNotificationProps) => {
  const timerRef = useRef(0);

  const [open, setOpen] = useState(false);

  const buttonVariant = themeVariant === 'error' ? 'negative' : 'primary';

  const handleOnClose = useCallback(() => {
    setOpen(false);
    onClose && onClose();
  }, [onClose]);

  useEffect(() => {
    setOpen(openToast);
    if (openToast) {
      timerRef.current = window.setTimeout(handleOnClose, 10000);
    }

    return () => clearTimeout(timerRef.current);
  }, [openToast, handleOnClose]);

  return (
    <Toast.Provider swipeDirection={swipeDirection}>
      <Toast.Root
        data-testid="toast-root"
        className={ToastRoot}
        data-variant={themeVariant}
        data-position={positionVariant}
        open={open}
        onOpenChange={handleOnClose}
      >
        <div className={ToastIcon}>
          <IconInfoCircle />
        </div>
        <div className={TextWrapper}>
          <Toast.Title className={ToastTitle}>{title}</Toast.Title>
          <Toast.Description className={ToastDescription}>{description}</Toast.Description>
        </div>
        <Toast.Action onClick={onClick} asChild altText={actionAltText}>
          <Button className={ToastButton} variant={buttonVariant}>
            {actionTitle}
          </Button>
        </Toast.Action>
        <Toast.Close className={ToastClose} asChild data-testid="toast-close-button">
          <button onClick={handleOnClose}>
            <IconXClose size={24} />
          </button>
        </Toast.Close>
      </Toast.Root>
      <Toast.Viewport className={ToastViewport} data-variant={positionVariant} />
    </Toast.Provider>
  );
};
