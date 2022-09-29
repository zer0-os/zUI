import React, { FC } from 'react';

import classNames from 'classnames';

import { Header, HeaderProps } from './Presets';

import './Wizard.scss';

export interface WizardProps extends HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const Wizard: FC<WizardProps> = ({ children, className, header, headerInfo, subHeader, sectionDivider }) => (
  <div className={classNames('zui-wizard', className)}>
    {/* Header */}
    {header && <Header header={header} headerInfo={headerInfo} subHeader={subHeader} sectionDivider={sectionDivider} />}

    {/* Wizard Body */}
    {children}
  </div>
);
