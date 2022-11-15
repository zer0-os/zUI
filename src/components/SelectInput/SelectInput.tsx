import React, { FC, ReactNode, useState } from 'react';

import { IconChevronDown } from '../Icons';
import { Input } from '../Input';
import { DropdownItem, DropdownMenu } from '../DropdownMenu';
import { AlertProps } from '../Alert';

import styles from './SelectInput.module.scss';

export type SelectInputProps = {
  className?: string;
  items: DropdownItem[];
  value: string;
  label: string;
  helperText?: string;
  placeholder: string;
  alert?: { variant: AlertProps['variant']; text: ReactNode };
  error?: boolean;
};

export const SelectInput: FC<SelectInputProps> = ({
  items = [],
  value,
  label,
  helperText,
  placeholder,
  alert,
  error = false
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const trigger = (
    <Input
      className={styles.InputContainer}
      wrapperClassName={isOpen && styles.WrapperOpen}
      inputClassName={isOpen && styles.InputOpen}
      type="text"
      label={label}
      placeholder={placeholder}
      value={value}
      helperText={helperText}
      alert={alert}
      error={error}
      endEnhancer={<IconChevronDown />}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onChange={() => {}}
    />
  );

  return <DropdownMenu trigger={trigger} items={items} open={isOpen} onOpenChange={onOpenChange} />;
};
