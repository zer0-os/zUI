import React, { createElement } from 'react';

import { AsyncText, HTMLTextElement } from '../../lib/types';
import { Skeleton, SkeletonProps } from '../Skeleton';

import classNames from 'classnames';

/**
 * Props shared between SkeletonText and MaybeSkeletonText
 */
export interface SharedProps {
  as?: HTMLTextElement;
  className?: string;
  skeletonOptions?: SkeletonProps;
}

/**
 * Props specific to SkeletonText
 */
interface AsyncProps {
  asyncText: AsyncText;
}

export type SkeletonTextProps = SharedProps & AsyncProps;

export const SkeletonText = ({
  as,
  className: classNameProp,
  asyncText: { text, isLoading, errorText: errorTextProp, errorClassName },
  skeletonOptions
}: SkeletonTextProps) => {
  const isError = !isLoading && text === undefined;
  const className = classNames(classNameProp, isError && errorClassName);

  let children;
  if (isLoading) {
    children = <Skeleton {...skeletonOptions} />;
  } else if (text !== undefined) {
    children = text;
  } else {
    children = errorTextProp ?? 'ERR';
  }

  return createElement(
    as ?? 'span',
    {
      className
    },
    children
  );
};

/**
 * MaybeSkeletonText
 * Simple utility wrapper for when you don't know if you have an AsyncText or a string
 */

/**
 * Props specific to MaybeSkeletonText
 */
interface MaybeProps {
  text: string | AsyncProps['asyncText'];
}

export type MaybeSkeletonTextProps = SharedProps & MaybeProps;

export const MaybeSkeletonText = (props: MaybeSkeletonTextProps) => {
  const asyncText = typeof props.text === 'object' ? props.text : { text: props.text, isLoading: false };
  return <SkeletonText {...props} asyncText={asyncText as AsyncProps['asyncText']} />;
};
