import { MarkdownEditorTypes } from './MarkdownEditor.constants';

export type MarkDownEditorProps = {
  type?: MarkdownEditorTypes;
  text?: string;
  placeholder?: string;
  onChange?: (value?: string) => void;
  error?: boolean;
  errorText?: string;
  className?: string;
};
