import React from 'react';
import type { FC } from 'react';

import { MarkdownEditorModes, MARKDOWN_EDITOR_TOOLBAR_TITLES } from './MarkdownEditor.constants';
import type { MarkdownEditorProps } from './MarkdownEditor.types';

import MDEditor, { ICommand } from '@uiw/react-md-editor';
import { Alert } from '../../Alert';

import classNames from 'classnames';
import styles from './MarkdownEditor.module.scss';

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

export const MarkdownEditor: FC<MarkdownEditorProps> = ({ text = '', placeholder, onChange, errorText, className }) => {
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
        <Alert variant={'error'} className={styles.ErrorMessage} isFilled>
          {errorText}
        </Alert>
      )}
    </div>
  );
};
