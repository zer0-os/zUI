import type { MarkdownEditorProps } from './MarkdownEditor.types';

import React from 'react';
import { render } from '@testing-library/react';
import { MDEditorProps } from '@uiw/react-md-editor';
import { MarkdownEditor } from './MarkdownEditor';
import { MarkdownEditorVariants, MarkdownEditorModes } from './MarkdownEditor.constants';
import styles from './MarkdownEditor.module.scss';

const DEFAULT_PROPS: MarkdownEditorProps = {
  variant: MarkdownEditorVariants.PRIMARY,
  text: '',
  placeholder: undefined,
  error: false,
  errorText: undefined,
  className: undefined
};

const mockMarkdownEditor = jest.fn();

jest.mock('@uiw/react-md-editor', () => {
  return (props: MDEditorProps) => <>{mockMarkdownEditor(props)}</>;
});

describe('<MarkdownEditor />', () => {
  test('should pass default properties MarkdownEditor', () => {
    render(<MarkdownEditor {...DEFAULT_PROPS} />);

    expect(mockMarkdownEditor).toHaveBeenCalledWith(
      expect.objectContaining({
        value: DEFAULT_PROPS.text,
        textareaProps: {
          placeholder: DEFAULT_PROPS.placeholder
        },
        preview: MarkdownEditorModes.EDIT
      })
    );
  });

  test('should forward text to MarkdownEditor', () => {
    render(<MarkdownEditor {...DEFAULT_PROPS} text={'mock text'} />);

    expect(mockMarkdownEditor).toHaveBeenCalledWith(expect.objectContaining({ value: 'mock text' }));
  });

  test('should pass Container class to container', () => {
    const { container } = render(<MarkdownEditor {...DEFAULT_PROPS} className={'mock-class'} />);

    expect(container.firstChild).toHaveClass(styles.Container);
  });

  test('should apply className prop to container', () => {
    const { container } = render(<MarkdownEditor {...DEFAULT_PROPS} className={'mock-class'} />);

    expect(container.firstChild).toHaveClass('mock-class');
  });

  test('should show error message under MarkdownEditor', () => {
    const { container } = render(<MarkdownEditor {...DEFAULT_PROPS} error errorText={'mock error message'} />);

    expect(container.firstChild.lastChild).toHaveClass(styles.ErrorMessage);
    expect(container.firstChild.lastChild).toHaveTextContent('mock error message');
  });
});
