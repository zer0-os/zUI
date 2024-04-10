import React from 'react';
import { DialogProps, Title as DialogTitle, Close as DialogClose } from '@radix-ui/react-dialog';
import classNames from 'classnames';
import { Button, Color, Variant } from '../../Button';
import { Modal } from '../Modal';
import { IconButton } from '../../IconButton';
import { IconXClose } from '../../Icons';

import styles from './ModalConfirmation.module.scss';

export interface ModalConfirmationProps extends DialogProps {
  className?: string;
  title: string;
  cancelLabel: string;
  confirmationLabel: string;
  inProgress?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export const ModalConfirmation: React.FC<ModalConfirmationProps> = ({
  className,
  children,
  title,
  cancelLabel,
  confirmationLabel,
  inProgress,
  onCancel,
  onConfirm,
  ...rest
}) => {
  return (
    <Modal className={classNames(styles.WiderContent, className)} {...rest}>
      <div className={styles.Head} data-testid="modal-head">
        <DialogTitle className={styles.Title}>{title}</DialogTitle>

        <DialogClose asChild className={styles.CloseIcon}>
          <IconButton Icon={IconXClose} onClick={onCancel} />
        </DialogClose>
      </div>

      {children}

      <div className={styles.FooterActions} data-testid="modal-actions">
        <DialogClose asChild>
          <Button
            variant={Variant.Secondary}
            color={Color.Greyscale}
            onPress={onCancel}
            data-testid="modal-cancel-button"
          >
            {cancelLabel}
          </Button>
        </DialogClose>
        <DialogClose asChild>
          <Button color={Color.Red} onPress={onConfirm} data-testid="modal-confirm-button" isLoading={inProgress}>
            {confirmationLabel}
          </Button>
        </DialogClose>
      </div>
    </Modal>
  );
};
