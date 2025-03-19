import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconTrophy1 = ({
  className,
  label = DEFAULT_LABEL,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
  isFilled = false
}: IconProps) => {
  return (
    <div style={{ height: size, width: size }} className={classNames(className, styles.Container)}>
      <AccessibleIcon.Root label={label}>
        {isFilled ? (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.44446 1.00002L7.35455 0.999775C7.04149 0.998509 6.6558 0.99695 6.31598 1.12064C5.76045 1.32283 5.32283 1.76045 5.12064 2.31598C5.04074 2.5355 5.0131 2.77415 5.00389 3L3.47362 3C3.26358 2.99998 3.05895 2.99996 2.88487 3.01184C2.6945 3.02483 2.46877 3.0553 2.23473 3.15224C1.74467 3.35523 1.35533 3.74458 1.15234 4.23464C1.05539 4.46868 1.02492 4.6944 1.01193 4.88478C1.00005 5.05886 1.00007 5.26348 1.00009 5.47353L1.00005 6.13758C0.999617 6.93297 0.999297 7.52363 1.13639 8.03528C1.50626 9.41565 2.58445 10.4938 3.96482 10.8637C4.34537 10.9657 4.76963 10.9916 5.28931 10.9981C6.05718 13.5809 8.27555 15.5394 11 15.9291V17H10.5556C8.03959 17 6 19.0396 6 21.5556C6 22.3533 6.6467 23 7.44444 23H16.5556C17.3533 23 18 22.3533 18 21.5556C18 19.0396 15.9604 17 13.4444 17H13V15.9291C15.7245 15.5394 17.9429 13.5809 18.7107 10.9981C19.2304 10.9916 19.6547 10.9657 20.0353 10.8637C21.4156 10.4938 22.4938 9.41565 22.8637 8.03528C23.0008 7.52363 23.0005 6.93297 23 6.13758L23 5.47352C23 5.26348 23 5.05886 22.9882 4.88478C22.9752 4.6944 22.9447 4.46868 22.8478 4.23464C22.6448 3.74458 22.2554 3.35523 21.7654 3.15224C21.5313 3.0553 21.3056 3.02483 21.1152 3.01184C20.9411 2.99996 20.7365 2.99998 20.5265 3L18.9961 3C18.9869 2.77415 18.9593 2.5355 18.8794 2.31598C18.6772 1.76045 18.2396 1.32283 17.6841 1.12064C17.3442 0.99695 16.9586 0.998509 16.6455 0.999775L16.5556 1.00002H7.44446ZM5.00002 5.8C5.00002 5.51998 5.00002 5.37996 4.94552 5.27301C4.89759 5.17893 4.8211 5.10244 4.72702 5.0545C4.62006 5 4.48005 5 4.20002 5L3.74354 5C3.47937 5 3.34729 5 3.2432 5.051C3.15286 5.09526 3.07519 5.16898 3.02628 5.25688C2.96992 5.35816 2.96324 5.48604 2.94987 5.7418C2.91837 6.34473 2.92158 6.9703 3.06824 7.51764C3.25318 8.20783 3.79227 8.74692 4.48246 8.93186C4.60124 8.96368 4.7425 8.98095 5.00002 8.99014V5.8ZM19 5.80328C19 5.52222 19 5.38169 19.0548 5.27451C19.103 5.18024 19.1798 5.10369 19.2743 5.0559C19.3817 5.00156 19.5222 5.00214 19.8033 5.00328L20.2515 5.00511C20.5146 5.00619 20.6461 5.00672 20.7497 5.05781C20.8397 5.10218 20.9169 5.17569 20.9656 5.26337C21.0217 5.36433 21.0285 5.49181 21.0421 5.74676C21.0742 6.35056 21.0737 6.98839 20.9319 7.51764C20.7469 8.20783 20.2078 8.74692 19.5176 8.93186C19.3989 8.96368 19.2576 8.98096 19 8.99014V5.80328Z"
              fill={color}
            />
          </svg>
        ) : (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 15C8.68629 15 6 12.3137 6 9V3.44444C6 3.0306 6 2.82367 6.06031 2.65798C6.16141 2.38021 6.38021 2.16141 6.65798 2.06031C6.82367 2 7.0306 2 7.44444 2H16.5556C16.9694 2 17.1763 2 17.342 2.06031C17.6198 2.16141 17.8386 2.38021 17.9397 2.65798C18 2.82367 18 3.0306 18 3.44444V9C18 12.3137 15.3137 15 12 15ZM12 15V18M18 4H20.5C20.9659 4 21.1989 4 21.3827 4.07612C21.6277 4.17761 21.8224 4.37229 21.9239 4.61732C22 4.80109 22 5.03406 22 5.5V6C22 6.92997 22 7.39496 21.8978 7.77646C21.6204 8.81173 20.8117 9.62038 19.7765 9.89778C19.395 10 18.93 10 18 10M6 4H3.5C3.03406 4 2.80109 4 2.61732 4.07612C2.37229 4.17761 2.17761 4.37229 2.07612 4.61732C2 4.80109 2 5.03406 2 5.5V6C2 6.92997 2 7.39496 2.10222 7.77646C2.37962 8.81173 3.18827 9.62038 4.22354 9.89778C4.60504 10 5.07003 10 6 10M7.44444 22H16.5556C16.801 22 17 21.801 17 21.5556C17 19.5919 15.4081 18 13.4444 18H10.5556C8.59188 18 7 19.5919 7 21.5556C7 21.801 7.19898 22 7.44444 22Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </AccessibleIcon.Root>
    </div>
  );
};
