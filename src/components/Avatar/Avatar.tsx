import React from 'react';

import * as RadixAvatar from '@radix-ui/react-avatar';
import { IconCurrencyEthereum } from '../Icons';

import { AVATAR_ICON_SIZE } from './AvatarIconSize.constants';
import styles from './Avatar.module.scss';
import { Status } from '../Status';

export interface AvatarProps {
  imageURL?: string;
  size: 'extra small' | 'small' | 'regular' | 'medium';
  type: 'circle' | 'square';
  userFriendlyName?: string;
  badgeContent?: string;
  statusType?: 'active' | 'idle' | 'busy' | 'offline' | 'unread';
}

export const Avatar = ({
  type = 'circle',
  size = 'regular',
  imageURL,
  userFriendlyName,
  statusType,
  badgeContent
}: AvatarProps) => {
  const initials = userFriendlyName && getInitials(userFriendlyName);

  return (
    <div className={styles.Avatar} data-type={type} data-size={size} tabIndex={0}>
      <RadixAvatar.Root className={styles.Root}>
        <RadixAvatar.Image className={styles.Image} src={imageURL} alt="avatar" />
        <RadixAvatar.Fallback className={styles.Fallback} delayMs={600}>
          {userFriendlyName ? (
            <div> {initials} </div>
          ) : (
            <div className={styles.DefaultIcon}>
              <IconCurrencyEthereum size={AVATAR_ICON_SIZE[size]} />
            </div>
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
