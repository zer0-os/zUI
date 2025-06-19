import React, { memo, useEffect, useState } from 'react';

import { Status } from '../Status';
import { IconCurrencyEthereum, IconUsers1 } from '../Icons';

import { AVATAR_ICON_SIZE } from './AvatarIconSize.constants';

import classNames from 'classnames';
import styles from './Avatar.module.scss';

export interface AvatarProps {
  className?: string;
  imageURL?: string;
  size: 'extra small' | 'small' | 'regular' | 'medium';
  badgeContent?: string;
  statusType?: 'active' | 'idle' | 'busy' | 'offline' | 'unread';
  isActive?: boolean;
  isRaised?: boolean;
  tabIndex?: number;
  isGroup?: boolean;
}

export const Avatar = memo(
  ({
    className,
    size = 'regular',
    imageURL,
    statusType,
    badgeContent,
    isActive,
    isRaised,
    tabIndex = 0,
    isGroup = false
  }: AvatarProps) => {
    const renderDefaultIcon = () => {
      if (isGroup) {
        return <IconUsers1 size={AVATAR_ICON_SIZE[size]} />;
      } else {
        return <IconCurrencyEthereum size={AVATAR_ICON_SIZE[size]} />;
      }
    };

    const [renderFallback, setRenderFallback] = useState(!imageURL);
    const handleError = () => {
      setRenderFallback(true);
    };
    const handleLoad = () => {
      setRenderFallback(false);
    };

    useEffect(() => {
      if (imageURL) {
        setRenderFallback(false);
      }
    }, [imageURL]);

    return (
      <div
        className={classNames(styles.Avatar, { [styles.isActive]: isActive, [styles.isRaised]: isRaised }, className)}
        data-size={size}
        tabIndex={tabIndex}
      >
        <div className={styles.Root}>
          {renderFallback ? (
            <span className={styles.Fallback}>
              <div className={classNames(styles.DefaultIcon, { [styles.isGroup]: isGroup })}>{renderDefaultIcon()}</div>
            </span>
          ) : (
            <img className={styles.Image} src={imageURL} alt="" onError={handleError} onLoad={handleLoad} />
          )}
        </div>
        {size != 'extra small' && statusType && <Status className={styles.Status} type={statusType} />}
        {size != 'extra small' && badgeContent && <AvatarBadge badgeContent={badgeContent} />}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

interface StatusBadgeTypeProps {
  badgeContent: AvatarProps['badgeContent'];
}

const AvatarBadge = ({ badgeContent }: StatusBadgeTypeProps) => {
  return <div className={styles.Badge}> {badgeContent}</div>;
};
