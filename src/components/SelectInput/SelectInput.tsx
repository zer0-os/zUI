import React, { FC, ReactNode, useState } from 'react';

import { IconChevronDown } from '../Icons';
import { Input } from '../Input';
import { DropdownItem, DropdownMenu } from '../DropdownMenu';
import { AlertProps } from '../Alert';

import styles from './SelectInput.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export type SelectInputProps = {
  className?: string;
  items: DropdownItem[];
  value: string;
  label: string;
  helperText?: string;
  placeholder: string;
  alert?: { variant: AlertProps['variant']; text: ReactNode };
  error?: boolean;
  itemSize: 'compact' | 'spacious';
};

export const SelectInput: FC<SelectInputProps> = ({
  items = [],
  value,
  label,
  helperText,
  placeholder,
  alert,
  error = false,
  itemSize = 'compact'
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const trigger = (
    <Input
      className={styles.InputContainer}
      wrapperClassName={cx(styles.Wrapper, {
        WrapperOpen: isOpen
      })}
      inputClassName={styles.Input}
      alertClassName={styles.Alert}
      helperTextClassName={styles.HelperText}
      type="text"
      label={label}
      placeholder={placeholder}
      value={value}
      helperText={helperText}
      alert={alert}
      error={error}
      endEnhancer={<IconChevronDown size={16} />}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onChange={() => { }}
    />
  );

  return (
    <DropdownMenu
      menuClassName={cx({ AlertOverlap: alert })}
      trigger={trigger}
      items={items}
      open={isOpen}
      onOpenChange={onOpenChange}
      itemSize={itemSize}
    />
  );
};
