import type { FC, ReactNode } from 'react';
import type { ButtonProps } from '../Button';

import React from 'react';

import * as ToastPrimitive from '@radix-ui/react-toast';
import { Button } from '../Button';
import { IconAlertCircle, IconXClose } from '../Icons';

import * as ToastConstants from './Toast.constants';

import classNames from 'classnames';
import styles from './Toast.module.scss';

export type ToastVariant = 'success' | 'error' | 'info';

export type ToastProps = {
  open?: ToastPrimitive.ToastProps['open'];
  defaultOpen?: ToastPrimitive.ToastProps['defaultOpen'];
  onOpenChange?: ToastPrimitive.ToastProps['onOpenChange'];
  duration?: ToastPrimitive.ToastProps['duration'];
  className?: string;
  variant?: ToastVariant;
  title?: ReactNode;
  description?: ReactNode;
  actionAltText?: ToastPrimitive.ToastActionProps['altText'];
  actionButtonText?: ButtonProps['children'];
  onActionButtonPress?: ButtonProps['onPress'];
};

export const Toast: FC<ToastProps> = ({
  open,
  defaultOpen,
  onOpenChange,
  duration = ToastConstants.DEFAULT_DURATION,
  className,
  variant = 'info',
  title,
  description,
  actionAltText,
  actionButtonText,
  onActionButtonPress
}) => {
  return (
    <>
      {/* Root */}
      <ToastPrimitive.Root
        className={classNames(styles.Root, className)}
        data-variant={variant}
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
        duration={duration}
      >
        <IconAlertCircle size={20} className={styles.Icon} />

        <div className={styles.Content}>
          <ToastPrimitive.Title className={styles.Title}>{title}</ToastPrimitive.Title>
          <ToastPrimitive.Description className={styles.Description}>{description}</ToastPrimitive.Description>
        </div>

        {actionAltText && onActionButtonPress && (
          <ToastPrimitive.Action className={styles.Action} asChild altText={actionAltText}>
            <Button onPress={onActionButtonPress}>{actionButtonText}</Button>
          </ToastPrimitive.Action>
        )}

        <ToastPrimitive.Close className={styles.Close} aria-label="Close">
          <IconXClose size={20} className={styles.CloseIcon} />
        </ToastPrimitive.Close>
      </ToastPrimitive.Root>

      {/* Viewport */}
      <ToastPrimitive.ToastViewport className={styles.Viewport} />
    </>
  );
};
