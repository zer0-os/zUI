import React, { useEffect, useState, useCallback } from 'react';

import { Button, Color } from '../Button';
import { IconInfoCircle, IconXClose } from '../Icons';

import * as Toast from '@radix-ui/react-toast';

import classNames from 'classnames';
import styles from './ToastNotification.module.scss';

type ToastPositionVariant = 'left' | 'right';
type ToastThemeVariant = 'primary' | 'success' | 'error';

const { ToastRoot, ToastIcon, TextWrapper, ToastTitle, ToastDescription, ToastButton, ToastClose, ToastViewport } =
  styles;

export type ToastNotificationProps = Toast.ToastProviderProps & {
  viewportClassName?: string;
  duration?: number;
  title: string;
  description: string;
  actionTitle?: string;
  actionAltText: string;
  positionVariant?: ToastPositionVariant;
  themeVariant?: ToastThemeVariant;
  swipeDirection?: Toast.SwipeDirection;
  openToast?: boolean;
  onClick?: () => void;
  onClose?: () => void;
};

export const ToastNotification = ({
  viewportClassName,
  duration = 10000,
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
  const [open, setOpen] = useState(false);

  const buttonVariant = themeVariant === 'error' ? Color.Red : Color.Highlight;

  const handleOnClose = useCallback(() => {
    setOpen(false);
    onClose && onClose();
  }, [onClose]);

  useEffect(() => {
    setOpen(openToast);
  }, [openToast]);

  return (
    <Toast.Provider swipeDirection={swipeDirection}>
      <Toast.Root
        data-testid="toast-root"
        className={ToastRoot}
        data-variant={themeVariant}
        data-position={positionVariant}
        open={open}
        onOpenChange={handleOnClose}
        duration={duration}
      >
        <div className={ToastIcon}>
          <IconInfoCircle />
        </div>
        <div className={TextWrapper}>
          <Toast.Title className={ToastTitle}>{title}</Toast.Title>
          <Toast.Description className={ToastDescription}>{description}</Toast.Description>
        </div>
        {actionTitle && (
          <Toast.Action onClick={onClick} asChild altText={actionAltText}>
            <Button className={ToastButton} color={buttonVariant}>
              {actionTitle}
            </Button>
          </Toast.Action>
        )}
        <Toast.Close
          className={ToastClose}
          data-no-action-button={!actionTitle}
          asChild
          data-testid="toast-close-button"
        >
          <button onClick={handleOnClose}>
            <IconXClose size={24} />
          </button>
        </Toast.Close>
      </Toast.Root>
      <Toast.Viewport
        data-testid="toast-viewport"
        className={classNames(ToastViewport, viewportClassName)}
        data-variant={positionVariant}
      />
    </Toast.Provider>
  );
};
