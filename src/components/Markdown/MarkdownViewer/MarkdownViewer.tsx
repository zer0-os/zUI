import type { FC } from 'react';
import type { MarkdownViewerProps } from './MarkdownViewer.types';

import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import { REMARK_PLUGINS } from './MarkdownViewer.constants';
import styles from './MarkdownViewer.module.scss';

export const MarkdownViewer: FC<MarkdownViewerProps> = ({ text, className }) => {
  return (
    <MDEditor.Markdown
      className={`${styles.Container} ${className}`}
      linkTarget="_blank"
      source={text}
      remarkPlugins={REMARK_PLUGINS}
    />
  );
};
