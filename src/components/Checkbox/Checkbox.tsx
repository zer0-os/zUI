import React, { useState } from 'react';

import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { IconCheck } from '../Icons';

import classNames from 'classnames';
import styles from './Checkbox.module.scss';
const cx = classNames.bind(styles);

interface LinkProps {
  text: string;
}
export interface ExternalLink extends LinkProps {
  href: string;
  openInNewTab?: boolean;
}

export interface ButtonLink extends LinkProps {
  onClickLink: () => void;
}

export interface CheckboxProps {
  className?: string;
  name: string;
  isDisabled?: boolean;
  checked?: boolean;
  variant?: 'standard' | 'advanced';
  onChange?: (value: boolean) => void;
}

interface StandardCheckboxLabel extends CheckboxProps {
  variant: 'standard';
  text: string;
  link?: ButtonLink | ExternalLink;
}

export type StandardCheckboxProps = StandardCheckboxLabel & CheckboxProps;

interface AdvancedCheckboxLabel {
  variant: 'advanced';
  title: string;
  description: string;
  image: string;
}

export type AdvancedCheckboxProps = AdvancedCheckboxLabel & CheckboxProps;

export const Checkbox = ({
  className,
  name,
  isDisabled,
  checked,
  variant = 'standard',
  onChange,
  ...rest
}: CheckboxProps | StandardCheckboxProps | AdvancedCheckboxProps) => {
  let bodyProps;
  const commonProps = { isDisabled, name };
  if (variant === 'standard') {
    bodyProps = { ...(rest as StandardCheckboxProps), ...commonProps };
  } else {
    bodyProps = { ...(rest as AdvancedCheckboxProps), ...commonProps };
  }

  const [isChecked, setIsChecked] = useState(checked);
  const handleChange = (checkState: boolean) => {
    if (!isDisabled) {
      setIsChecked(checkState);
      onChange(checkState);
    }
  };

  return (
    <div className={styles.Checkbox} data-disabled={isDisabled} data-variant={variant}>
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
      {variant === 'standard' ? (
        <StandardBody {...(bodyProps as StandardCheckboxProps)} />
      ) : (
        <AdvancedBody {...(bodyProps as AdvancedCheckboxProps)} />
      )}
    </div>
  );
};

/*******************
 * Advanced Title and Description
 *******************/
const AdvancedBody = (props: AdvancedCheckboxProps) => {
  return <></>;
};

/*******************
 * Standard Label
 *******************/
const StandardBody = (props: StandardCheckboxProps) => {
  const { text, name, isDisabled, link } = props;
  return (
    <label className={styles.Label} data-link={link && true} htmlFor={name}>
      {text && <div data-label-link={text && link && true}>{text}</div>}
      {link && <LinkComponent link={link} isDisabled={isDisabled} />}
    </label>
  );
};

/*******************
 * Link
 *******************/

interface LinkComponentProps {
  link: StandardCheckboxProps['link'];
  isDisabled: StandardCheckboxProps['isDisabled'];
}

const LinkComponent = ({ link, isDisabled }: LinkComponentProps) => {
  if ((link as ButtonLink).onClickLink) {
    let { text, onClickLink } = link as ButtonLink;

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (!isDisabled) {
        event.preventDefault();
        onClickLink();
      }
    };
    return (
      <div onClick={handleClick} className={styles.Link}>
        {text}
      </div>
    );
  }

  let { text, href, openInNewTab = true } = link as ExternalLink;

  return (
    <a href={href} target={openInNewTab ? '_blank' : '_self'} className={styles.Link}>
      {text}
    </a>
  );
};
