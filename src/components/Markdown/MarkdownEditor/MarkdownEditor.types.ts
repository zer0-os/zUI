import { MarkdownEditorVariants } from './MarkdownEditor.constants';

export type MarkDownEditorProps = {
  variant?: MarkdownEditorVariants;
  text?: string;
  placeholder?: string;
  onChange?: (value?: string) => void;
  error?: boolean;
  errorText?: string;
  className?: string;
};
