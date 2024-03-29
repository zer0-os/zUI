import type { MarkdownViewerProps } from './MarkdownViewer.types';

import React from 'react';
import { render } from '@testing-library/react';
import { MarkdownPreviewProps } from '@uiw/react-markdown-preview';
import { MarkdownViewer } from './MarkdownViewer';
import { REMARK_PLUGINS } from './MarkdownViewer.constants';
import { MARKDOWN_TEXT } from './MarkdownViewer.stories.constants';
import styles from './MarkdownViewer.module.scss';

const DEFAULT_PROPS: MarkdownViewerProps = {
  className: undefined,
  text: ''
};

const mockMarkdownViewer = jest.fn();

jest.mock('@uiw/react-md-editor', () => ({
  Markdown: (props: MarkdownPreviewProps) => {
    return <>{mockMarkdownViewer(props)}</>;
  }
}));

jest.mock('remark-emoji', () => jest.fn());
jest.mock('remark-gemoji', () => jest.fn());

describe('<MarkdownViewer />', () => {
  test('should pass default properties MarkdownViewer', () => {
    render(<MarkdownViewer {...DEFAULT_PROPS} />);

    expect(mockMarkdownViewer).toHaveBeenCalledWith(
      expect.objectContaining({
        linkTarget: '_blank',
        source: '',
        remarkPlugins: REMARK_PLUGINS
      })
    );
  });

  test('should forward text to MarkdownViewer', () => {
    render(<MarkdownViewer {...DEFAULT_PROPS} text={MARKDOWN_TEXT} />);

    expect(mockMarkdownViewer).toHaveBeenCalledWith(expect.objectContaining({ source: MARKDOWN_TEXT }));
  });

  test('should forward className to MarkdownViewer', () => {
    render(<MarkdownViewer {...DEFAULT_PROPS} className={'mock-class'} />);

    expect(mockMarkdownViewer).toHaveBeenCalledWith(
      expect.objectContaining({ className: expect.stringContaining('mock-class') })
    );
  });

  test('should pass Container class to MarkdownViewer', () => {
    render(<MarkdownViewer {...DEFAULT_PROPS} />);

    expect(mockMarkdownViewer).toHaveBeenCalledWith(
      expect.objectContaining({ className: expect.stringContaining(styles.Container) })
    );
  });
});
