import type { FC } from 'react';
import type { MarkDownViewerProps } from './MarkDownViewer.types';

import React from 'react';
import classNames from 'classnames/bind';
import MDEditor from '@uiw/react-md-editor';
import { REMARK_PLUGINS } from './MarkDownViewer.constants';
import styles from './MarkDownViwer.module.scss';

export const MarkDownViewer: FC<MarkDownViewerProps> = ({ text, className }) => {
  return (
    <MDEditor.Markdown
      className={classNames(styles.Container, className)}
      linkTarget="_blank"
      source={text}
      remarkPlugins={REMARK_PLUGINS}
    />
  );
};

MarkDownViewer.defaultProps = {
  className: undefined
};
