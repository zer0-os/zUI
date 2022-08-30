import React, { ReactElement, ReactNode, HtmlHTMLAttributes } from 'react';
import classnames from 'classnames';
import './story-card.scss';

export interface StoryCardProps extends HtmlHTMLAttributes<HTMLDivElement> {
  title?: string;
  isWrapDisabled?: boolean;
  isContentFull?: boolean;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}

export const StoryCard = ({
  title,
  isWrapDisabled,
  isContentFull,
  className,
  containerClassName,
  children,
  ...restProps
}: StoryCardProps): ReactElement => {
  return (
    <div className={classnames('story_card', containerClassName)} {...restProps}>
      <h3 className="story_card__title">{title}</h3>
      <div
        className={classnames('story_card__content', className, {
          'story_card__content--is-content-full': isContentFull,
          'story_card__content--is-wrap-disabled': isWrapDisabled
        })}
      >
        {children}
      </div>
    </div>
  );
};

StoryCard.defaultProps = {
  title: undefined,
  isWrapDisabled: false,
  className: undefined,
  containerClassName: undefined
};
