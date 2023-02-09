import React, { JSXElementConstructor } from 'react';

import styles from './IconButton.module.scss';
import { IconProps } from '../Icons/Icons.types';

export interface Properties {
  className?: string;
  onClick: () => void;

  Icon: JSXElementConstructor<IconProps>;
  label?: string;
  size?: string | number;
  isFilled?: boolean;
}

export class IconButton extends React.Component<Properties> {
  handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation();
    this.props.onClick();
  };

  render() {
    return (
      <button className={`${styles.IconButton} ${this.props.className}`} onClick={this.handleClick}>
        <this.props.Icon label={this.props.label} size={this.props.size} isFilled={this.props.isFilled} />
      </button>
    );
  }
}
