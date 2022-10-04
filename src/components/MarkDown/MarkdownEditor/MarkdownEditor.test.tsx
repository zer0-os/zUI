import type { MarkDownEditorProps } from './MarkdownEditor.types';

import React from 'react';
import { render } from '@testing-library/react';
import { MDEditorProps } from '@uiw/react-md-editor';
import { MarkdownEditor } from './MarkdownEditor';
import { MarkdownEditorTypes, MarkdownEditorModes } from './MarkdownEditor.constants';
import styles from './MarkdownEditor.module.scss';

const DEFAULT_PROPS: MarkDownEditorProps = {
  type: MarkdownEditorTypes.PRIMARY,
  text: '',
  placeholder: undefined,
  error: false,
  errorText: undefined,
  className: undefined
};

const mockMarkDownEditor = jest.fn();

jest.mock('@uiw/react-md-editor', () => {
  return (props: MDEditorProps) => <>{mockMarkDownEditor(props)}</>;
});

describe('<MarkdownEditor />', () => {
  test('should pass default properties MarkdownEditor', () => {
    render(<MarkdownEditor {...DEFAULT_PROPS} />);

    expect(mockMarkDownEditor).toHaveBeenCalledWith(
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

    expect(mockMarkDownEditor).toHaveBeenCalledWith(expect.objectContaining({ value: 'mock text' }));
  });

  test('should pass Container class to container', () => {
    const { container } = render(<MarkdownEditor {...DEFAULT_PROPS} className={'mock-class'} />);

    expect(container.firstChild).toHaveClass(styles.Container);
  });

  test('should apply className prop to container', () => {
    const { container } = render(<MarkdownEditor {...DEFAULT_PROPS} className={'mock-class'} />);

    expect(container.firstChild).toHaveClass('mock-class');
  });

  test('should pass Secondary class to container', () => {
    const { container } = render(<MarkdownEditor {...DEFAULT_PROPS} type={MarkdownEditorTypes.SECONDARY} />);

    expect(container.firstChild).toHaveClass(styles.Secondary);
  });

  test('should pass Error class to container', () => {
    const { container } = render(<MarkdownEditor {...DEFAULT_PROPS} error />);

    expect(container.firstChild).toHaveClass(styles.Error);
  });

  test('should show error message under MarkdownEditor', () => {
    const { container } = render(<MarkdownEditor {...DEFAULT_PROPS} error errorText={'mock error message'} />);

    expect(container.firstChild.lastChild).toHaveClass(styles.ErrorMessage);
    expect(container.firstChild.lastChild).toHaveTextContent('mock error message');
  });
});
