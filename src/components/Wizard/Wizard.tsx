import React, { FC, ReactNode, PropsWithChildren } from 'react';

// Style Imports
import classNames from 'classnames';

// Component Imports
import { InfoTooltip } from '../InfoTooltip/InfoTooltip';

// Preset Screens
import { Buttons } from './Presets/Buttons';
import { Confirmation } from './Presets/Confirmation';
import { Loading } from './Presets/Loading';
import './Wizard.scss';

export interface HeaderProps {
  header?: ReactNode;
  headerInfo?: string;
  subHeader?: string;
  sectionDivider?: boolean;
}

export interface WizardProps extends HeaderProps {
  className?: string;
}

const Header: FC<PropsWithChildren<HeaderProps>> = ({
  children,
  header,
  headerInfo,
  subHeader,
  sectionDivider = true
}) => (
  <div className={classNames('zui-wizard-header')}>
    <div className="zui-wizard-header-container">
      <h1>{header}</h1>
      {headerInfo && <InfoTooltip content={headerInfo} />}
    </div>
    {subHeader && <h2>{subHeader}</h2>}
    {children}
    {sectionDivider && <hr />}
  </div>
);

const Container: FC<PropsWithChildren<WizardProps>> = ({ children, className, ...headerProps }) => (
  <div className={classNames('zui-wizard', className)}>
    {/* Header */}
    {headerProps.header && <Header {...headerProps} />}

    {/* Wizard Body */}
    {children}
  </div>
);

export const Wizard = { Container, Loading, Buttons, Confirmation, Header };
