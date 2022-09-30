import type { FC } from 'react';
import type { MarkDownEditorProps } from './MarkDownEditor.types';

import React from 'react';
import classNames from 'classnames/bind';
import MDEditor, { ICommand } from '@uiw/react-md-editor';
import { MarkdownEditorTypes, MarkdownEditorModes, MARKDOWN_EDITOR_TOOLBAR_TITLES } from './MarkDownEditor.constants';
import styles from './MarkDownEditor.module.scss';

const cx = classNames.bind(styles);

export const MarkDownEditor: FC<MarkDownEditorProps> = ({
  type,
  text,
  placeholder,
  onChange,
  error,
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
        Secondary: type === MarkdownEditorTypes.SECONDARY,
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

MarkDownEditor.defaultProps = {
  type: MarkdownEditorTypes.PRIMARY,
  text: '',
  placeholder: undefined,
  error: false,
  errorText: undefined,
  className: undefined
};
