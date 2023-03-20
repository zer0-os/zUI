import React from 'react';
import { Title as DialogTitle, Close as DialogClose } from '@radix-ui/react-dialog';
import classNames from 'classnames';
import { Button } from '../../Button';
import { Modal } from '../Modal';
import { IconButton } from '../../IconButton';
import { IconXClose } from '../../Icons';

import styles from './ModalConfirmation.module.scss';

export interface ModalConfirmationProps {
  className?: string;
  title: string;
  cancelLabel: string;
  confirmationLabel: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export const ModalConfirmation: React.FC<ModalConfirmationProps> = ({
  className,
  children,
  title,
  cancelLabel,
  confirmationLabel,
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
          <Button variant="secondary" onPress={onCancel} data-testid="modal-cancel-button">
            {cancelLabel}
          </Button>
        </DialogClose>
        <DialogClose asChild>
          <Button variant="negative" onPress={onConfirm} data-testid="modal-confirm-button">
            {confirmationLabel}
          </Button>
        </DialogClose>
      </div>
    </Modal>
  );
};
