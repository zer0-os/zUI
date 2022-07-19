import React from "react";

import classNames from "classnames/bind";

import { ArrowLink } from "../../Link";
import styles from "./StepBar.module.scss";

type StepBarProps = {
  step: number;
  steps: string[];
  stepFormatter?: string;
  onNavigate?: (i: number) => void;
  className?: string;
};

export const StepBar: React.FC<StepBarProps> = ({ step, steps, stepFormatter, onNavigate, className }) => {
  const translate = step >= steps.length ? `${(steps.length - 1) * 100}%` : `${(step - 1) * 100}%`;
  const width = `${(1 / steps.length) * 100}%`;
  const left = (i: number) => `${(i / steps.length) * 100}%`;

  const goToStep = (i: number) => () => {
    if (step - 1 >= i) onNavigate?.(i);
  };

  const text = (stepName: string, i: number) => {
    if (stepFormatter) {
      return stepFormatter
        .replace(/TOTAL_STEP_COUNT/g, String(steps.length))
        .replace(/CURRENT_STEP_INDEX/g, String(i))
        .replace(/CURRENT_STEP_NAME/g, stepName);
    }

    return `Step ${i + 1} of ${steps.length}: ${stepName}`;
  };

  return (
    <div className={classNames(styles.StepBar, className)}>
      {steps.map((s: string, i: number) => {
        const isVisible = step - 1 > i;
        const cursor = isVisible ? "pointer" : "default";
        return (
          <div
            key={i + s}
            className={`${styles.Placeholder} ${isVisible ? styles.Show : ""}`}
            onClick={goToStep(i)}
            style={{
              position: "absolute",
              left: left(i),
              width,
              cursor,
            }}
          >
            <ArrowLink style={{ cursor }} back>
              {text(s, i)}
            </ArrowLink>
          </div>
        );
      })}

      <div
        style={{
          width,
          transform: `translateX(${translate})`,
        }}
        className={`${styles.Bar} ${step > steps.length ? styles.Hide : ""}`}
        data-text={text(steps[step - 1] || steps[steps.length - 1], step > steps.length ? steps.length : step)}
      ></div>
    </div>
  );
};

export default StepBar;
