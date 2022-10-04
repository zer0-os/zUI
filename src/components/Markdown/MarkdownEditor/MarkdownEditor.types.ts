import { MarkdownEditorVariants } from './MarkdownEditor.constants';

export type MarkdownEditorProps = {
  variant?: MarkdownEditorVariants;
  text?: string;
  placeholder?: string;
  onChange?: (value?: string) => void;
  error?: boolean;
  errorText?: string;
  className?: string;
};
