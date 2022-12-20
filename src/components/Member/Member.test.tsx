import React from 'react';
import { render, screen } from '@testing-library/react';

import { Member, MemberProps } from '.';

import styles from './Member.module.scss';

const mockUrl = 'Mock URL';
const mockLabel = 'Mock class name';
const mockChildren = 'Mock Content';
const mockClassName = 'Mock class name';

const DEFAULT_PROPS: MemberProps = {
  label: '',
  href: undefined,
  className: undefined,
  variant: undefined
};

describe('Member', () => {
  test('should render label and content in the correct order - label, children', () => {
    const { container } = render(
      <Member {...DEFAULT_PROPS} label={mockLabel}>
        <div>{mockChildren}</div>
      </Member>
    );

    expect(container.firstChild?.textContent).toBe(`${mockLabel}${mockChildren}`);
  });

  describe('label', () => {
    test('should apply primary variant to <label> by default', () => {
      render(<Member {...DEFAULT_PROPS} label={mockLabel} />);
      const label = screen.getByText(mockLabel);

      expect(label).toHaveAttribute('data-variant', 'primary');
    });

    test('should pass and apply secondary variant to <label>', () => {
      render(<Member {...DEFAULT_PROPS} label={mockLabel} variant={'secondary'} />);
      const label = screen.getByText(mockLabel);

      expect(label).toHaveAttribute('data-variant', 'secondary');
    });
  });

  describe('member content', () => {
    test('should not render member content as <a> by default', () => {
      render(
        <Member {...DEFAULT_PROPS}>
          <>{mockChildren}</>
        </Member>
      );
      const memberContent = screen.getByText(mockChildren);

      expect(memberContent).toBeInTheDocument();
      expect(memberContent).not.toHaveAttribute('href', mockUrl);
    });

    test('should render member content as <a> when href is defined', () => {
      render(
        <Member {...DEFAULT_PROPS} href={mockUrl}>
          <>{mockChildren}</>
        </Member>
      );
      const memberContent = screen.getByText(mockChildren);

      expect(memberContent).toBeInTheDocument();
      expect(memberContent).toHaveAttribute('href', mockUrl);
    });
  });

  describe('class names', () => {
    test('should apply Container class to container', () => {
      const { container } = render(<Member {...DEFAULT_PROPS} />);

      expect(container.firstChild).toHaveClass('Container');
      expect(container.getElementsByClassName('Container').length).toBe(1);
    });

    test('should apply className class to container', () => {
      const { container } = render(<Member {...DEFAULT_PROPS} className={mockClassName} href={mockUrl} />);

      expect(container.firstChild).toHaveClass(mockClassName);
      expect(container.getElementsByClassName(mockClassName).length).toBe(1);
    });

    test('should apply Label class to <label>', () => {
      const { container } = render(<Member {...DEFAULT_PROPS} label={mockLabel} />);
      const label = container.getElementsByClassName(styles.Label);

      expect(label[0]).toHaveClass(styles.Label);
      expect(label[0].textContent).toBe(mockLabel);
      expect(label.length).toBe(1);
    });

    test('should apply Content class to <a> (member content - link)', () => {
      const { container } = render(<Member {...DEFAULT_PROPS} href={mockUrl} />);
      const memberContent = container.getElementsByClassName(styles.Content);

      expect(memberContent[0]).toHaveClass(styles.Content);
      expect(memberContent.length).toBe(1);
    });

    test('should apply Content class to <div> (member content - text)', () => {
      const { container } = render(<Member {...DEFAULT_PROPS} />);
      const memberContent = container.getElementsByClassName(styles.Content);

      expect(memberContent[0]).toHaveClass(styles.Content);
      expect(memberContent.length).toBe(1);
    });
  });
});
