import React, { FC } from "react";

// Style Imports
import classNames from "classnames/bind";

// Preset Screens
import Buttons from "./Presets/Buttons";
import Confirmation from "./Presets/Confirmation";
import Loading from "./Presets/Loading";
import NFTDetails from "./Presets/NFTDetails";
import styles from "./Wizard.module.scss";

interface HeaderProps {
  header?: string;
  headerClassName?: string;
  subHeader?: string;
  sectionDivider?: boolean;
}

interface WizardProps extends HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: FC<HeaderProps> = ({ headerClassName, header, subHeader, sectionDivider = true }) => (
  <div className={classNames(styles.Header, headerClassName)}>
    <h1>{header}</h1>
    {subHeader && <h2>{subHeader}</h2>}

    {sectionDivider && <hr />}
  </div>
);

const Container: FC<WizardProps> = ({ children, className, ...headerProps }) => (
  <div className={classNames(styles.Container, className, "border-rounded border-primary background-primary")}>
    {/* Header */}
    {headerProps.header && <Header {...headerProps} />}

    {/* Wizard Body */}
    {children}
  </div>
);

export default { Container, Loading, Buttons, Confirmation, NFTDetails, Header };
