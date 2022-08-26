import React from 'react';

import classNames from 'classnames/bind';

import { ArrowLink } from '../Link';
import styles from './StepBar.module.scss';
import type { Step } from './StepBar.types';

const cx = classNames.bind(styles);

export type StepBarProps = {
  currentStepId: Step['id'];
  steps: Step[];
  onChangeStep?: (step: Step) => void;
  className?: string;
};

export const StepBar: React.FC<StepBarProps> = ({ currentStepId, steps, onChangeStep, className }) => {
  const currentStepIndex = steps.findIndex(s => s.id === currentStepId);

  const stepStyle = {
    translate: Math.min(steps.length - 1, currentStepIndex) * 100,
    width: 100 / steps.length
  };

  return (
    <div className={classNames(styles.StepBar, className)}>
      {steps
        .map((s: Step, i: number) => {
          return currentStepIndex > i ? (
            <div
              key={s.id}
              className={styles.Step}
              onClick={() => onChangeStep(s)}
              style={{
                position: 'absolute',
                left: `${i * stepStyle.width}%`,
                width: `${stepStyle.width}%`
              }}
            >
              <ArrowLink back>{s.title}</ArrowLink>
            </div>
          ) : null;
        })
        .filter(Boolean)}

      <div
        style={{
          width: `${stepStyle.width}%`,
          transform: `translateX(${stepStyle.translate}%)`
        }}
        className={cx(styles.Bar, {
          Hide: currentStepIndex > steps.length
        })}
      >
        {steps[Math.min(steps.length - 1, currentStepIndex)]?.title}
      </div>
    </div>
  );
};
