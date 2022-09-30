import React, { FC } from 'react';

import classNames from 'classnames';

import { Buttons, Confirmation, Loading } from './Presets';

import { InfoTooltip } from '../InfoTooltip/InfoTooltip';

import './Wizard.scss';

export interface HeaderProps {
  header?: React.ReactNode;
  headerInfo?: string;
  subHeader?: string;
  sectionDivider?: boolean;
}

export interface WizardProps extends HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: FC<HeaderProps> = ({ children, header, headerInfo, subHeader, sectionDivider = true }) => (
  <div className={'zui-wizard-header'}>
    <div className="zui-wizard-header-container">
      <h1>{header}</h1>
      {headerInfo && <InfoTooltip content={headerInfo} />}
    </div>
    {subHeader && <h2>{subHeader}</h2>}
    {children}
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

export const Wizard = { Buttons, Container, Confirmation, Header, Loading };
