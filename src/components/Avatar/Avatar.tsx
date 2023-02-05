import React, { useEffect, useState } from 'react';

import * as RadixAvatar from '@radix-ui/react-avatar';
import { IconCurrencyEthereum } from '../Icons';

import { AVATAR_ICON_SIZE } from './AvatarIconSize.constants';
import styles from './Avatar.module.scss';

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
  const [avatarName, setAvatarName] = useState('');

  // Used to fetch the first two letter of the name
  useEffect(() => {
    if (userFriendlyName) {
      const userNameArray = userFriendlyName.split(' ');
      let charFromName = userNameArray[0].substring(0, 1);
      charFromName += userNameArray.length >= 2 ? userNameArray[1].substring(0, 1) : userNameArray[0].substring(1, 2);
      setAvatarName(charFromName);
    }
  }, [userFriendlyName]);

  return (
    <div className={styles.Avatar} data-type={type} data-size={size} tabIndex={0}>
      <RadixAvatar.Root className={styles.AvatarRoot}>
        <RadixAvatar.Image className={styles.AvatarImage} src={imageURL} alt={userFriendlyName} />
        <RadixAvatar.Fallback className={styles.AvatarFallback} delayMs={600}>
          {userFriendlyName ? (
            <div> {avatarName}</div>
          ) : (
            <div className={styles.DefaultAvatarIcon}>
              <IconCurrencyEthereum size={AVATAR_ICON_SIZE[size]} />
            </div>
          )}
        </RadixAvatar.Fallback>
      </RadixAvatar.Root>
      {size != 'extra small' && statusType && <AvatarStatus statusType={statusType} />}
      {size != 'extra small' && badgeContent && <AvatarBadge badgeContent={badgeContent} />}
    </div>
  );
};

interface StatusTypeProps {
  statusType: AvatarProps['statusType'];
}
const AvatarStatus = ({ statusType }: StatusTypeProps) => {
  return <div className={styles.Status} data-status-type={statusType}></div>;
};

interface StatusBadgeTypeProps {
  badgeContent: AvatarProps['badgeContent'];
}

const AvatarBadge = ({ badgeContent }: StatusBadgeTypeProps) => {
  return <div className={styles.Badge}> {badgeContent}</div>;
};
