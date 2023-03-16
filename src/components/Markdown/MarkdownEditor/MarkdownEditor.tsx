import type { FC } from 'react';
import type { MarkdownEditorProps } from './MarkdownEditor.types';

import React from 'react';
import classNames from 'classnames';
import MDEditor, { ICommand } from '@uiw/react-md-editor';
import { MarkdownEditorModes, MARKDOWN_EDITOR_TOOLBAR_TITLES } from './MarkdownEditor.constants';
import styles from './MarkdownEditor.module.scss';
import { Alert } from '../../Alert';

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

export const MarkdownEditor: FC<MarkdownEditorProps> = ({
  text = '',
  placeholder,
  onChange,
  error = false,
  errorText,
  className
}) => {
  return (
    <div className={classNames(styles.Container, className)} data-error={errorText && true}>
      <div className={styles.Editor}>
        <MDEditor
          value={text}
          onChange={onChange}
          commandsFilter={onCommandsFilter}
          preview={MarkdownEditorModes.EDIT}
          textareaProps={{
            placeholder
          }}
        />
      </div>
      {errorText && (
        <Alert variant={'error'} className={styles.ErrorMessage}>
          {errorText}
        </Alert>
      )}
    </div>
  );
};
