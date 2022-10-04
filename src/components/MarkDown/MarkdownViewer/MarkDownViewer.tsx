import type { FC } from 'react';
import type { MarkDownViewerProps } from './MarkdownViewer.types';

import React from 'react';
import classNames from 'classnames/bind';
import MDEditor from '@uiw/react-md-editor';
import { REMARK_PLUGINS } from './MarkdownViewer.constants';
import styles from './MarkdownViewer.module.scss';

export const MarkdownViewer: FC<MarkDownViewerProps> = ({ text, className }) => {
  return (
    <MDEditor.Markdown
      className={classNames(styles.Container, className)}
      linkTarget="_blank"
      source={text}
      remarkPlugins={REMARK_PLUGINS}
    />
  );
};
