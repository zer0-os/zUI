import React, { useEffect, useState } from 'react';

import * as RadixAvatar from '@radix-ui/react-avatar';

import { Status } from '../Status';
import { IconCurrencyEthereum, IconUsers1 } from '../Icons';

import { AVATAR_ICON_SIZE } from './AvatarIconSize.constants';

import classNames from 'classnames';
import styles from './Avatar.module.scss';

export interface AvatarProps {
  imageURL?: string;
  size: 'extra small' | 'small' | 'regular' | 'medium';
  type: 'circle' | 'square';
  userFriendlyName?: string;
  badgeContent?: string;
  statusType?: 'active' | 'idle' | 'busy' | 'offline' | 'unread';
  isActive?: boolean;
  isRaised?: boolean;
  tabIndex?: number;
  isGroup?: boolean;
}

export const Avatar = ({
  type = 'circle',
  size = 'regular',
  imageURL,
  userFriendlyName,
  statusType,
  badgeContent,
  isActive,
  isRaised,
  tabIndex = 0,
  isGroup = false
}: AvatarProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderDefaultIcon = () => {
    if (userFriendlyName) {
      const initials = getInitials(userFriendlyName);
      return <div>{initials}</div>;
    } else if (isGroup) {
      return <IconUsers1 size={AVATAR_ICON_SIZE[size]} />;
    } else {
      return <IconCurrencyEthereum size={AVATAR_ICON_SIZE[size]} />;
    }
  };

  return (
    <div
      className={classNames(styles.Avatar, {
        [styles.isLoaded]: isLoaded,
        [styles.isActive]: isActive,
        [styles.isRaised]: isRaised
      })}
      data-type={type}
      data-size={size}
      tabIndex={tabIndex}
    >
      <RadixAvatar.Root className={styles.Root}>
        <RadixAvatar.Image className={styles.Image} src={imageURL} alt="avatar" onLoad={() => setIsLoaded(true)} />
        <RadixAvatar.Fallback className={styles.Fallback}>
          {!imageURL && (
            <div className={classNames(styles.DefaultIcon, { [styles.isGroup]: isGroup })}>{renderDefaultIcon()}</div>
          )}
        </RadixAvatar.Fallback>
      </RadixAvatar.Root>
      {size != 'extra small' && statusType && <Status className={styles.Status} type={statusType} />}
      {size != 'extra small' && badgeContent && <AvatarBadge badgeContent={badgeContent} />}
    </div>
  );
};

interface StatusBadgeTypeProps {
  badgeContent: AvatarProps['badgeContent'];
}

const AvatarBadge = ({ badgeContent }: StatusBadgeTypeProps) => {
  return <div className={styles.Badge}> {badgeContent}</div>;
};

/**
 *
 * Used to fetch the first two letter of the name
 * @param userFriendlyName provided user name
 * @returns two chars from the string
 */
const getInitials = (userFriendlyName: string): string => {
  const userNameArray = userFriendlyName.split(' ');
  let charFromName = userNameArray[0].substring(0, 1);
  charFromName += userNameArray.length >= 2 ? userNameArray[1].substring(0, 1) : userNameArray[0].substring(1, 2);
  return charFromName;
};
