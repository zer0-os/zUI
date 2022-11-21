import React, { MouseEventHandler, useState } from 'react';

import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { IconCheckBoxCheck } from '../Icons';

import classNames from 'classnames';

import styles from './Checkbox.module.scss';

export interface CheckboxProps {
  className?: string;
  text?: string;
  link?: string;
  isDisabled?: boolean;
  checked?: boolean;
  name: string;
  hasLightBg?: boolean;
  onChange?: (value: boolean) => void;
  redirectLinkTriggered?: () => void;
}

export const Checkbox = ({
  isDisabled = false,
  className,
  text,
  link,
  checked = false,
  name,
  hasLightBg =false,
  onChange,
  redirectLinkTriggered
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleOnChange = (checkState: boolean) => {
    if (!isDisabled) {
      setIsChecked(checkState);
      onChange(checkState);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    if (redirectLinkTriggered && !isDisabled) {
      event.preventDefault();
      redirectLinkTriggered();
    }
  };

  const appendLabelComponent = () => {
    if (text && link) {
      return (
        <label className={classNames(styles.Label)} htmlFor={name}>
          <span>{text}</span>
          <span onClick={handleClick} className={classNames(styles.Link, styles.hasLable)}>
            {link}
          </span>
        </label>
      );
    } else if (link) {
      return (
        <label className={classNames(styles.Label)} htmlFor={name}>
          <span onClick={handleClick} className={classNames(styles.Link)}>
            {link}
          </span>
        </label>
      );
    } else {
      return (
        <label className={classNames(styles.Label)} htmlFor={name}>
          {text}
        </label>
      );
    }
  };

  return (
    <div
      style={{ display: 'flex', alignItems: 'center' }}
      className={classNames(className, styles.Container, `${isDisabled ? styles.DisabledCheckbox : ''}`,
      `${hasLightBg ? styles.LightBg : ''}`
      )}
    >
      <RadixCheckbox.Root
        className={classNames(styles.CheckboxRoot, `${isChecked ? styles.CheckedCheckboxRoot : ''}`)}
        checked={isChecked}
        disabled={isDisabled}
        onCheckedChange={(checked: boolean) => handleOnChange(checked)}
        id={name}
      >
        <RadixCheckbox.Indicator className={classNames(styles.CheckboxIndicator)}>
          <IconCheckBoxCheck width={10} height={8} />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      {text || link ? appendLabelComponent() : null}
    </div>
  );
};
