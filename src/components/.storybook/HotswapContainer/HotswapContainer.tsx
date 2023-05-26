import { FC } from 'react';

// @ts-ignore
import styles from './HotswapContainer.module.scss';

export interface HotswapContainerProps {
  text?: string;
}

export const HotswapContainer: FC<HotswapContainerProps> = ({ text }) => {
  return <div className={styles.Container}>{text ?? 'This area is hotswappable.'}</div>;
};
