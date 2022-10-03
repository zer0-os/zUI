import React, { FC } from 'react';

import { InfoTooltip } from '../../../InfoTooltip';

import './Header.scss';

export interface HeaderProps {
  header?: React.ReactNode;
  headerInfo?: string;
  subHeader?: string;
  sectionDivider?: boolean;
}

export const Header: FC<HeaderProps> = ({ children, header, headerInfo, subHeader, sectionDivider = true }) => (
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
