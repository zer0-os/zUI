import type { FC } from 'react';
import type { MarkdownEditorProps } from './MarkdownEditor.types';

import React from 'react';
import classNames from 'classnames/bind';
import MDEditor, { ICommand } from '@uiw/react-md-editor';
import {
  MarkdownEditorVariants,
  MarkdownEditorModes,
  MARKDOWN_EDITOR_TOOLBAR_TITLES
} from './MarkdownEditor.constants';
import styles from './MarkdownEditor.module.scss';

const cx = classNames.bind(styles);

export const MarkdownEditor: FC<MarkdownEditorProps> = ({
  variant = MarkdownEditorVariants.PRIMARY,
  text = '',
  placeholder,
  onChange,
  error = false,
  errorText,
  className
}) => {
  const onCommandsFilter = (command: ICommand<string>) => {
    switch (command.name) {
      case MarkdownEditorModes.EDIT:
        return {
          ...command,
          buttonProps: {
            ...command.buttonProps,
            className: styles.CustomTextToolbarButton
          },
          icon: <>{MARKDOWN_EDITOR_TOOLBAR_TITLES[MarkdownEditorModes.EDIT]}</>
        };

      case MarkdownEditorModes.PREVIEW:
        return {
          ...command,
          buttonProps: {
            ...command.buttonProps,
            className: styles.CustomTextToolbarButton
          },
          icon: <>{MARKDOWN_EDITOR_TOOLBAR_TITLES[MarkdownEditorModes.PREVIEW]}</>
        };

      default:
        return command;
    }
  };

  return (
    <div
      className={cx(styles.Container, className, {
        Secondary: variant === MarkdownEditorVariants.SECONDARY,
        Error: error
      })}
    >
      <MDEditor
        value={text}
        onChange={onChange}
        commandsFilter={onCommandsFilter}
        preview={MarkdownEditorModes.EDIT}
        textareaProps={{
          placeholder
        }}
      />
      {errorText && <span className={styles.ErrorMessage}>{errorText}</span>}
    </div>
  );
};
