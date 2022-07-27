// - React Imports
import React from "react";

import classNames from "classnames/bind";
import { Link } from "react-router-dom";

// - Style Imports
import styles from "./ArrowLink.module.scss";

const cx = classNames.bind(styles);

type ArrowLinkProps = {
  children: React.ReactNode;
  href?: string;
  style?: React.CSSProperties;
  to?: string;
  replace?: boolean;
  className?: string;
  back?: boolean;
  isLinkToExternalUrl?: boolean;
};

export const TEST_ID = {
  CONTAINER: "arrow-link-container",
  ARROW: {
    CONTAINER: "arrow-link-arrow-container",
    ARROW: "arrow-link-arrow",
  },
};

export const ArrowLink: React.FC<ArrowLinkProps> = ({
  className,
  href,
  children,
  replace,
  style,
  back,
  isLinkToExternalUrl,
}) => {
  const content = (
    <>
      {children}{" "}
      <div
        className={cx(styles.ArrowContainer, {
          Back: back,
        })}
        data-testid={TEST_ID.ARROW.CONTAINER}
      >
        <div className={styles.Arrow} data-testid={TEST_ID.ARROW.ARROW}></div>
      </div>
    </>
  );

  const sharedProps = {
    className: `${className} ${styles.ArrowLink}`,
    style,
    target: !replace ? "_blank" : undefined,
    rel: "noreferrer",
    "data-testid": TEST_ID.CONTAINER,
  };

  /**
   * 04/04/2022
   * For some reason, we're still using an <a> tag even when there's no
   * href. Going to leave it like this for now, but we should
   * refactor this in the future.
   */
  return href ? (
    <Link {...sharedProps} to={isLinkToExternalUrl ? { pathname: href } : href}>
      {content}
    </Link>
  ) : (
    <a {...sharedProps}>{content}</a>
  );
};

export default ArrowLink;
