import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconCamera = ({
  className,
  label = DEFAULT_LABEL,
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE
}: IconProps) => {
  return (
    <div style={{ height: size, width: size }} className={classNames(className, styles.Container)}>
      <AccessibleIcon.Root label={label}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.56073 1.25H14.4393C14.5528 1.24998 14.6411 1.24997 14.7247 1.25503C15.7852 1.31926 16.7138 1.98855 17.11 2.97426C17.1413 3.05195 17.1692 3.13577 17.2051 3.24347L17.2115 3.26283C17.2569 3.39885 17.2697 3.43626 17.2817 3.46625C17.4619 3.9143 17.8839 4.21853 18.366 4.24772C18.398 4.24966 18.4412 4.25 18.5944 4.25L18.6415 4.25C18.9654 4.24996 19.1846 4.24993 19.3697 4.26828C21.1484 4.44451 22.5555 5.85159 22.7317 7.63027C22.7501 7.81537 22.75 8.02528 22.75 8.33357L22.75 16.2321C22.75 17.045 22.75 17.7006 22.7066 18.2315C22.662 18.7781 22.5676 19.2582 22.3413 19.7025C21.9818 20.4081 21.4081 20.9818 20.7025 21.3413C20.2583 21.5676 19.7781 21.662 19.2315 21.7066C18.7006 21.75 18.045 21.75 17.2321 21.75H6.76788C5.95505 21.75 5.29944 21.75 4.76854 21.7066C4.2219 21.662 3.74176 21.5676 3.29754 21.3413C2.59193 20.9818 2.01826 20.4081 1.65873 19.7025C1.43239 19.2582 1.33803 18.7781 1.29337 18.2315C1.24999 17.7006 1.25 17.0449 1.25001 16.2321L1.25001 8.37723C1.25001 8.36246 1.25001 8.34791 1.25 8.33358C1.24996 8.02529 1.24994 7.81537 1.26828 7.63027C1.44451 5.85159 2.85159 4.44451 4.63027 4.26828C4.81541 4.24993 5.03457 4.24996 5.35854 4.25C5.37398 4.25 5.38966 4.25 5.40559 4.25C5.55876 4.25 5.602 4.24966 5.63405 4.24772C6.11607 4.21853 6.53816 3.9143 6.71828 3.46625C6.73033 3.43627 6.74315 3.39886 6.78849 3.26283C6.79068 3.25628 6.79283 3.24982 6.79496 3.24344C6.83083 3.13576 6.85876 3.05195 6.88999 2.97426C7.28625 1.98855 8.21485 1.31926 9.27528 1.25503C9.35887 1.24997 9.44722 1.24998 9.56073 1.25ZM9.58115 2.75C9.43777 2.75 9.39822 2.75034 9.36596 2.75229C8.88394 2.78148 8.46186 3.08571 8.28174 3.53375C8.26968 3.56374 8.25686 3.60115 8.21152 3.73717L8.20506 3.75657C8.16918 3.86425 8.14126 3.94806 8.11003 4.02575C7.71376 5.01146 6.78517 5.68075 5.72473 5.74497C5.64111 5.75004 5.54834 5.75002 5.42799 5.75001C5.42063 5.75 5.41316 5.75 5.40559 5.75C5.01719 5.75 4.87927 5.75095 4.77817 5.76097C3.71096 5.8667 2.86671 6.71096 2.76097 7.77816C2.75093 7.87951 2.75001 8.00896 2.75001 8.37723V16.2C2.75001 17.0525 2.75059 17.6467 2.78839 18.1093C2.82547 18.5632 2.8946 18.824 2.99524 19.0215C3.21096 19.4448 3.55516 19.7891 3.97853 20.0048C4.17605 20.1054 4.43681 20.1745 4.89069 20.2116C5.35332 20.2494 5.94755 20.25 6.80001 20.25H17.2C18.0525 20.25 18.6467 20.2494 19.1093 20.2116C19.5632 20.1745 19.824 20.1054 20.0215 20.0048C20.4449 19.7891 20.7891 19.4448 21.0048 19.0215C21.1054 18.824 21.1745 18.5632 21.2116 18.1093C21.2494 17.6467 21.25 17.0525 21.25 16.2V8.37723C21.25 8.00896 21.2491 7.87952 21.239 7.77816C21.1333 6.71095 20.2891 5.8667 19.2218 5.76097C19.1207 5.75095 18.9828 5.75 18.5944 5.75L18.572 5.75001C18.4517 5.75002 18.3589 5.75004 18.2753 5.74497C17.2148 5.68075 16.2863 5.01146 15.89 4.02575C15.8588 3.94805 15.8308 3.86423 15.7949 3.75654L15.7885 3.73717C15.7432 3.60115 15.7303 3.56374 15.7183 3.53375C15.5382 3.08571 15.1161 2.78148 14.6341 2.75229C14.6018 2.75034 14.5622 2.75 14.4189 2.75H9.58115ZM12 9.25C10.2051 9.25 8.75001 10.7051 8.75001 12.5C8.75001 14.2949 10.2051 15.75 12 15.75C13.7949 15.75 15.25 14.2949 15.25 12.5C15.25 10.7051 13.7949 9.25 12 9.25ZM7.25001 12.5C7.25001 9.87665 9.37665 7.75 12 7.75C14.6234 7.75 16.75 9.87665 16.75 12.5C16.75 15.1234 14.6234 17.25 12 17.25C9.37665 17.25 7.25001 15.1234 7.25001 12.5Z"
            fill={color}
          />
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
