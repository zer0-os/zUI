import React from 'react';

import classBind from 'classnames/bind';
import classNames from 'classnames';

import { ArrowLink } from '../Link';
import styles from './StepBar.module.scss';
import type { Step } from './StepBar.types';

const cx = classBind.bind(styles);

export type StepBarProps = {
  currentStepId: Step['id'];
  steps: Step[];
  onChangeStep?: (step: Step) => void;
  className?: string;
};

export const StepBar: React.FC<StepBarProps> = ({ currentStepId, steps, onChangeStep, className }) => {
  const currentStepIndex = steps.findIndex(s => s.id === currentStepId);
  const translate = (100 / steps.length) * currentStepIndex;

  return (
    <div className={classNames(styles.StepBar, className)}>
      {steps.map((s: Step, i: number) => (
        <div
          key={s.id}
          className={styles.Step}
          onClick={() => currentStepIndex > i && onChangeStep(s)}
          data-selected={currentStepIndex === i ? '' : undefined}
          data-disabled={currentStepIndex < i ? '' : undefined}
        >
          {i + 1}. {s.title}
        </div>
      ))}

      <div
        style={{
          width: `${100 / steps.length}%`,
          left: `${translate}%`
        }}
        className={styles.Bar}
      ></div>
    </div>
  );
};
