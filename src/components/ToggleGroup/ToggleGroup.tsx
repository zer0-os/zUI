import React, { useCallback } from 'react';

import * as RadixToggleGroup from '@radix-ui/react-toggle-group';
import { ToggleGroupProps, ImplMultipleSelectProps, ImplSingleSelectProps, ToggleOption } from './ToggleGroup.types';

import 'focus-visible';
import classNames from 'classnames';
import styles from './ToggleGroup.module.scss';

export const ToggleGroup = ({
  className,
  options,
  selection,
  onSelectionChange,
  isRequired = false,
  isDisabled = false,
  selectionType = 'single',
  variant = 'default'
}: ToggleGroupProps) => {
  const handleOnValueChange = useCallback(
    (selection: ImplSingleSelectProps['selection'] | ImplMultipleSelectProps['selection']) => {
      if (isRequired && (!selection || selection.length === 0)) {
        return;
      }
      onSelectionChange(selection as never);
    },
    [onSelectionChange, isRequired]
  );

  return (
    <RadixToggleGroup.Root
      className={classNames(styles.Container, className)}
      type={selectionType as never}
      value={selection as never}
      onValueChange={handleOnValueChange}
      data-variant={variant}
      data-disabled={isDisabled ? '' : undefined}
    >
      {options.map(option => (
        <Option option={option} key={option.key} isGroupDisabled={isDisabled} />
      ))}
    </RadixToggleGroup.Root>
  );
};

interface OptionProps {
  option: ToggleOption;
  isGroupDisabled: boolean;
}

const Option = ({ option, isGroupDisabled }: OptionProps) => {
  const isIcon = 'icon' in option;

  return (
    <RadixToggleGroup.Item
      disabled={isGroupDisabled ?? option.isDisabled}
      className={classNames(styles.Toggle)}
      key={option.key}
      value={option.key}
      data-type={isIcon ? 'icon' : 'text'}
    >
      {isIcon ? option.icon : <span>{option.label}</span>}
    </RadixToggleGroup.Item>
  );
};
