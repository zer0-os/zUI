/**
 * This is, in short, a re-export of react-loading-skeleton but
 * with a few props removed from the interface to ensure visual consistency
 * across zApps.
 */

import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import './override.scss';

import { default as SkeletonComponent } from 'react-loading-skeleton';
import type { SkeletonProps as DefaultSkeletonProps } from 'react-loading-skeleton';

export type SkeletonProps = Omit<
  DefaultSkeletonProps,
  'baseColor' | 'highlightColor' | 'duration' | 'direction' | 'borderRadius' | 'enableAnimation'
>;

export const Skeleton = (props: SkeletonProps) => {
  return <SkeletonComponent {...props} />;
};
