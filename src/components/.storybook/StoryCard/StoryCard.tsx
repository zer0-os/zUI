import React, { ReactElement, ReactNode } from 'react';
import classnames from 'classnames';
import './story-card.scss';

export interface StoryCardProps {
  title?: string;
  isContrast?: boolean;
  isWrapDisabled?: boolean;
  isContentFull?: boolean;
  isContentCentered?: boolean;
  isHeightFull?: boolean;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}

export const StoryCard = ({
  title,
  isContrast,
  isWrapDisabled,
  isContentFull,
  isContentCentered,
  isHeightFull,
  className,
  containerClassName,
  children
}: StoryCardProps): ReactElement => {
  return (
    <div className={classnames('story_card', containerClassName)}>
      <h3 className="story_card__title">{title}</h3>
      <div
        className={classnames('story_card__content', className, {
          'story_card__content--is-contrast': isContrast,
          'story_card__content--is-content-full': isContentFull,
          'story_card__content--is-content-centered': isContentCentered,
          'story_card__content--is-height-full': isHeightFull,
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
  isContrast: false,
  isWrapDisabled: false,
  className: undefined,
  containerClassName: undefined
};
