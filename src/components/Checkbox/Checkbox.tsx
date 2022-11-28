import React, { useState } from 'react';

import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { IconCheckBoxCheck } from '../Icons';

import classNames from 'classnames';
import styles from './Checkbox.module.scss';
const cx = classNames.bind(styles);

export interface CheckboxProps {
  className?: string;
  name: string;
  text?: string;
  link?: string;
  isDisabled?: boolean;
  checked?: boolean;
  hasLightBackground?: boolean;
  onChange?: (value: boolean) => void;
  onLinkClick?: () => void;
}

export const Checkbox = ({
  className,
  name,
  text,
  link,
  isDisabled,
  checked,
  hasLightBackground,
  onChange,
  onLinkClick
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (checkState: boolean) => {
    if (!isDisabled) {
      setIsChecked(checkState);
      onChange(checkState);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    if (onLinkClick && !isDisabled) {
      event.preventDefault();
      onLinkClick();
    }
  };

  const getLabelComponent = () => {
    if (text && link) {
      return (
        <label className={styles.Label} htmlFor={name}>
          <span>{text}</span>
          <span onClick={handleClick} className={cx(styles.Link, styles.HasLabel)}>
            {link}
          </span>
        </label>
      );
    } else if (link) {
      return (
        <label className={cx(styles.Label, styles.HasOnlyLink)} htmlFor={name}>
          <span onClick={handleClick} className={styles.Link}>
            {link}
          </span>
        </label>
      );
    } else {
      return (
        <label className={styles.Label} htmlFor={name}>
          {text}
        </label>
      );
    }
  };

  return (
    <div
      className={cx(className, styles.Container, {
        [styles.DisabledCheckbox]: isDisabled,
        [styles.LightBackground]: hasLightBackground
      })}
    >
      <RadixCheckbox.Root
        className={cx(styles.CheckboxRoot, { [styles.CheckedCheckboxRoot]: isChecked })}
        checked={isChecked}
        disabled={isDisabled}
        onCheckedChange={handleChange}
        id={name}
      >
        <RadixCheckbox.Indicator className={styles.CheckboxIndicator}>
          <IconCheckBoxCheck width={10} height={8} />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      {(text || link) && getLabelComponent()}
    </div>
  );
};
