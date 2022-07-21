import type {LabelProps} from "./Label.types";

import React from 'react';
import classnames from 'classnames';
import {LABEL_ALIGNMENT} from "./Label.constants";
import './label.scss';

export const Label = ({
  label,
  children,
  isFullWidth,
  isBold,
  isContrast,
  labelAlignment,
  className
}: LabelProps) => {
  return (
    <div
      className={classnames(className, 'label', {
        'label--full-width': isFullWidth,
        [`label--alignment-${labelAlignment}`]: true
      })}
    >
      {label && (
        <span
          className={classnames('label__caption', {
            'label__caption--is-bold': isBold,
            'label__caption--is-contrast': isContrast
          })}
        >
          {label}
        </span>
      )}
      {children && <div className="label__content">{children}</div>}
    </div>
  );
};

Label.defaultProps = {
  children: null,
  isFullWidth: false,
  isBold: false,
  isContrast: false,
  className: undefined,
  labelAlignment: LABEL_ALIGNMENT.CENTER
} as LabelProps;
