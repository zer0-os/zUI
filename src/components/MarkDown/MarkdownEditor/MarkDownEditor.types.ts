import { MARKDOWN_EDITOR_TYPES } from './MarkDownEditor.constants';

export type MarkDownEditorProps = {
	type?: MARKDOWN_EDITOR_TYPES;
	text?: string;
	placeholder?: string;
	onChange?: (value?: string) => void;
	error?: boolean;
	errorText?: string;
	className?: string;
};
