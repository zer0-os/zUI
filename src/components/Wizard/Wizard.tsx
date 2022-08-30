import React, { FC, ReactNode } from 'react';

// Style Imports
import classNames from 'classnames';

// Preset Screens
import { Buttons } from './Presets/Buttons';
import { Confirmation } from './Presets/Confirmation';
import { Loading } from './Presets/Loading';
import './Wizard.scss';

export interface HeaderProps {
  header?: ReactNode;
  subHeader?: string;
  sectionDivider?: boolean;
}

export interface WizardProps extends HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: FC<HeaderProps> = ({ header, subHeader, sectionDivider = true }) => (
  <div className={classNames('zui-wizard-header')}>
    <h1>{header}</h1>
    {subHeader && <h2>{subHeader}</h2>}

    {sectionDivider && <hr />}
  </div>
);

const Container: FC<WizardProps> = ({ children, className, ...headerProps }) => (
  <div className={classNames('zui-wizard', className)}>
    {/* Header */}
    {headerProps.header && <Header {...headerProps} />}

    {/* Wizard Body */}
    {children}
  </div>
);

export const Wizard = { Container, Loading, Buttons, Confirmation, Header };
