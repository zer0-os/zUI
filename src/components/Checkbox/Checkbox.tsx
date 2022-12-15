import React, { useState } from 'react';

import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { IconCheck } from '../Icons';

import classNames from 'classnames';
import styles from './Checkbox.module.scss';
const cx = classNames.bind(styles);

export interface LinkProps {
  text: string;
  onClick?: () => void;
}
export interface CheckboxProps {
  className?: string;
  name: string;
  text?: string;
  isDisabled?: boolean;
  checked?: boolean;
  link?: LinkProps;
  variant?: 'Standard' | 'Advanced';
  onChange?: (value: boolean) => void;
}

export const Checkbox = ({
  className,
  name,
  text,
  link,
  isDisabled,
  checked,
  variant = 'Standard',
  onChange
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (checkState: boolean) => {
    if (!isDisabled) {
      setIsChecked(checkState);
      onChange(checkState);
    }
  };

  return (
    <div className={cx(className, styles.Checkbox, styles[`Checkbox${variant}`])} data-disabled={isDisabled}>
      <RadixCheckbox.Root
        className={styles.CheckboxRoot}
        data-checked={isChecked}
        checked={isChecked}
        disabled={isDisabled}
        onCheckedChange={handleChange}
        id={name}
      >
        <RadixCheckbox.Indicator className={styles.CheckboxIndicator}>
          <IconCheck size={'0.9rem'} />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      {(text || link) && <Label name={name} link={link} text={text} isDisabled={isDisabled} />}
    </div>
  );
};

/*******************
 * Label and Link
 *******************/

interface LabelProps {
  text?: string;
  link?: LinkProps;
  name: string;
  isDisabled?: boolean;
}

const Label = ({ text, link, name, isDisabled }: LabelProps) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (link && link.onClick && !isDisabled) {
      event.preventDefault();
      link.onClick();
    }
  };

  return (
    <label className={styles.Label} data-link={link && true} htmlFor={name}>
      {text && <div data-label-link={text && link && true}>{text}</div>}
      {link && (
        <div onClick={handleClick} className={styles.Link}>
          {link.text}
        </div>
      )}
    </label>
  );
};
