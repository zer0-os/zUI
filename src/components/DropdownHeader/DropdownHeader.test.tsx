import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { DropdownHeader, DropdownHeaderProps } from './DropdownHeader';

const mockItem = 'Mock Trigger';
const mockText = ['Mock Text', 'Second Mock Text'];
const MockComponent = ({ text }: { text: string }) => {
  return (
    <div id="mockComponent">
      <p>{text}</p>
    </div>
  );
};
const mockClassName = 'Mock-ClassName';

const DEFAULT_PROPS: DropdownHeaderProps = {
  item: '',
  className: undefined,
  titleClassName: undefined
};

const renderComponent = (props?: DropdownHeaderProps) => render(<DropdownHeader {...DEFAULT_PROPS} {...props} />);

describe('<DropdownHeader />', () => {
  test('should recognize a string and render it from props in a <span> tag', () => {
    const { container } = renderComponent({ item: mockItem });
    const item = screen.getByText(mockItem);

    expect(container.firstChild?.textContent).toBe(mockItem);
    expect(item.tagName).toBe('SPAN');
  });

  test('should recognize a Component and render it from props', () => {
    renderComponent({ item: <MockComponent text={mockText[0]} /> });

    expect(screen.getByText(mockText[0])).toBeInTheDocument();
  });

  test('should recognize a Fragment and render it from props', () => {
    renderComponent({
      item: (
        <>
          <MockComponent text={mockText[0]} />
          <MockComponent text={mockText[1]} />
        </>
      )
    });

    expect(screen.getByText(mockText[0])).toBeInTheDocument();
    expect(screen.getByText(mockText[1])).toBeInTheDocument();
  });

  test('should apply className from props to tag container', () => {
    const { container } = renderComponent({ ...DEFAULT_PROPS, className: mockClassName });

    expect(container.firstChild).toHaveClass(mockClassName);
    expect(container.getElementsByClassName(mockClassName).length).toBe(1);
  });

  test('should recognize a string and apply className from props to <span> tag', () => {
    const { container } = renderComponent({ ...DEFAULT_PROPS, item: mockItem, titleClassName: mockClassName });
    const item = screen.getByText(mockItem);

    expect(item).toHaveClass(mockClassName);
    expect(container.getElementsByClassName(mockClassName).length).toBe(1);
  });
});
