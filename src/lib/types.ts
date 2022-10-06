export interface AsyncText {
  isLoading: boolean;
  text?: string;
  errorText?: string;
  errorClassName?: string;
}

export type HTMLTextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'b';
