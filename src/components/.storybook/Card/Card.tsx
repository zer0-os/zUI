import React, { ReactElement, ReactNode } from "react";
import classnames from "classnames";
import "./card.scss";

export type CardProps = {
  title?: string;
  isContrast?: boolean;
  isWrapDisabled?: boolean;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
};

export const Card = ({
  title,
  isContrast,
  isWrapDisabled,
  className,
  containerClassName,
  children
}: CardProps): ReactElement => {
  return (
    <div className={classnames("card", containerClassName)}>
      <h3 className="card__title">{title}</h3>
      <div
        className={classnames("card__content", className, {
          "card__content--is-contrast": isContrast,
          "card__content--is-wrap-disabled": isWrapDisabled
        })}
      >
        {children}
      </div>
    </div>
  );
};

Card.defaultProps = {
  title: undefined,
  isContrast: false,
  isWrapDisabled: false,
  className: undefined,
  containerClassName: undefined
};
