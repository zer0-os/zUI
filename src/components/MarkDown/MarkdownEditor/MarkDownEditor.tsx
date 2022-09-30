import type { FC } from 'react';
import type { MarkDownEditorProps } from './MarkDownEditor.types';

import React from 'react';
import classNames from 'classnames/bind';
import MDEditor, { ICommand } from '@uiw/react-md-editor';
import {
  MARKDOWN_EDITOR_TYPES,
	MARKDOWN_EDITOR_MODES,
	MARKDOWN_EDITOR_TOOLBAR_TITLES
} from './MarkDownEditor.constants';
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
			case MARKDOWN_EDITOR_MODES.EDIT:
				return {
					...command,
					buttonProps: {
						...command.buttonProps,
						className: styles.CustomTextToolbarButton
					},
					icon: (
						<>{MARKDOWN_EDITOR_TOOLBAR_TITLES[MARKDOWN_EDITOR_MODES.EDIT]}</>
					)
				};

			case MARKDOWN_EDITOR_MODES.PREVIEW:
				return {
					...command,
					buttonProps: {
						...command.buttonProps,
						className: styles.CustomTextToolbarButton
					},
					icon: (
						<>{MARKDOWN_EDITOR_TOOLBAR_TITLES[MARKDOWN_EDITOR_MODES.PREVIEW]}</>
					)
				};

			default:
				return command;
		}
	};

	return (
		<div
			className={cx(
				styles.Container,
        className,
				{
          Secondary: type === MARKDOWN_EDITOR_TYPES.SECONDARY,
          Error: error
        }
			)}
		>
			<MDEditor
				value={text}
				onChange={onChange}
				commandsFilter={onCommandsFilter}
				preview={MARKDOWN_EDITOR_MODES.EDIT}
				textareaProps={{
					placeholder
				}}
			/>
			{errorText && (
				<span className={styles.ErrorMessage}>
					{errorText}
				</span>
			)}
		</div>
	);
};

MarkDownEditor.defaultProps = {
  type: MARKDOWN_EDITOR_TYPES.PRIMARY,
  text: '',
  placeholder: '',
  error: false,
  errorText: '',
  className: ''
};
