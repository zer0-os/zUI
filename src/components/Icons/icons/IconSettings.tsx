import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { IconProps } from '../Icons.types';
import { DEFAULT_LABEL, DEFAULT_COLOR, DEFAULT_SIZE } from '../Icons.constants';

import styles from '../Icon.module.scss';
import classNames from 'classnames';

export const IconSettings = ({
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
            d="M12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75ZM8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12Z"
            fill={color}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 2.75C11.7167 2.75 11.445 2.86254 11.2447 3.06286C11.0444 3.26319 10.9318 3.53488 10.9318 3.81818V3.97273L10.9318 3.97572C10.9301 4.41452 10.8 4.84323 10.5578 5.20908C10.3155 5.57493 9.9715 5.86195 9.56818 6.03481C9.49983 6.0641 9.42765 6.08301 9.35403 6.09103C8.98303 6.22412 8.58259 6.25772 8.19293 6.18706C7.75057 6.10685 7.34239 5.89597 7.02101 5.5816L7.01509 5.57582L6.96058 5.52124C6.86137 5.42192 6.74327 5.34284 6.6136 5.28908C6.48392 5.23533 6.34492 5.20766 6.20455 5.20766C6.06417 5.20766 5.92517 5.23533 5.7955 5.28908C5.66582 5.34284 5.54801 5.42163 5.44881 5.52094C5.34949 5.62015 5.27011 5.73855 5.21636 5.86822C5.1626 5.9979 5.13493 6.1369 5.13493 6.27727C5.13493 6.41765 5.1626 6.55665 5.21636 6.68632C5.27011 6.816 5.3489 6.93381 5.44822 7.03301L5.50891 7.0937C5.82328 7.41508 6.03413 7.8233 6.11434 8.26566C6.19313 8.70024 6.14226 9.14822 5.96833 9.55382C5.81097 9.96816 5.53465 10.327 5.17386 10.585C4.80664 10.8477 4.36889 10.9938 3.91754 11.0043L3.9 11.0045H3.81818C3.53488 11.0045 3.26319 11.1171 3.06286 11.3174C2.86254 11.5177 2.75 11.7894 2.75 12.0727C2.75 12.356 2.86254 12.6277 3.06286 12.828C3.26319 13.0284 3.53488 13.1409 3.81818 13.1409H3.97572C4.41452 13.1427 4.84323 13.2727 5.20908 13.515C5.57382 13.7565 5.8602 14.0991 6.03323 14.5009C6.21344 14.9112 6.26703 15.366 6.18706 15.8071C6.10685 16.2494 5.89597 16.6576 5.5816 16.979L5.57581 16.9849L5.52124 17.0394C5.42192 17.1386 5.34284 17.2567 5.28908 17.3864C5.23533 17.5161 5.20766 17.6551 5.20766 17.7955C5.20766 17.9358 5.23533 18.0748 5.28908 18.2045C5.34284 18.3342 5.42163 18.452 5.52094 18.5512C5.62015 18.6505 5.73855 18.7299 5.86822 18.7836C5.9979 18.8374 6.1369 18.8651 6.27727 18.8651C6.41765 18.8651 6.55665 18.8374 6.68632 18.7836C6.816 18.7299 6.93381 18.6511 7.03301 18.5518L7.0937 18.4911C7.41508 18.1767 7.8233 17.9659 8.26566 17.8857C8.70023 17.8069 9.14821 17.8577 9.55381 18.0317C9.96816 18.189 10.327 18.4654 10.585 18.8261C10.8477 19.1934 10.9938 19.6311 11.0043 20.0825L11.0045 20.1V20.1818C11.0045 20.4651 11.1171 20.7368 11.3174 20.9371C11.5177 21.1375 11.7894 21.25 12.0727 21.25C12.356 21.25 12.6277 21.1375 12.828 20.9371C13.0284 20.7368 13.1409 20.4651 13.1409 20.1818V20.0273L13.1409 20.0243C13.1427 19.5855 13.2727 19.1568 13.515 18.7909C13.7565 18.4262 14.0991 18.1398 14.5009 17.9668C14.9112 17.7866 15.366 17.733 15.8071 17.8129C16.2494 17.8931 16.6576 18.104 16.979 18.4184L16.9849 18.4242L17.0394 18.4788C17.1386 18.5781 17.2567 18.6572 17.3864 18.7109C17.5161 18.7647 17.6551 18.7923 17.7955 18.7923C17.9358 18.7923 18.0748 18.7647 18.2045 18.7109C18.3342 18.6572 18.452 18.5784 18.5512 18.4791C18.6505 18.3799 18.7299 18.2615 18.7836 18.1318C18.8374 18.0021 18.8651 17.8631 18.8651 17.7227C18.8651 17.5824 18.8374 17.4434 18.7836 17.3137C18.7299 17.184 18.6511 17.0662 18.5518 16.967L18.4911 16.9063C18.1767 16.5849 17.9659 16.1767 17.8857 15.7343C17.8057 15.2933 17.8593 14.8385 18.0395 14.4281C18.2125 14.0264 18.4989 13.6838 18.8636 13.4422C19.2295 13.2 19.6582 13.0699 20.097 13.0682L20.1 13.0682L20.1818 13.0682C20.4651 13.0682 20.7368 12.9556 20.9371 12.7553C21.1375 12.555 21.25 12.2833 21.25 12C21.25 11.7167 21.1375 11.445 20.9371 11.2447C20.7368 11.0444 20.4651 10.9318 20.1818 10.9318H20.0273L20.0243 10.9318C19.5855 10.9301 19.1568 10.8 18.7909 10.5578C18.4251 10.3155 18.1381 9.9715 17.9652 9.56818C17.9359 9.49983 17.917 9.42765 17.909 9.35403C17.7759 8.98303 17.7423 8.58259 17.8129 8.19293C17.8931 7.75057 18.104 7.34239 18.4184 7.02101L18.4242 7.01509L18.4788 6.96058C18.5781 6.86138 18.6572 6.74327 18.7109 6.6136C18.7647 6.48392 18.7923 6.34492 18.7923 6.20455C18.7923 6.06417 18.7647 5.92517 18.7109 5.7955C18.6572 5.66582 18.5784 5.54801 18.4791 5.44881C18.3798 5.34949 18.2615 5.27011 18.1318 5.21636C18.0021 5.1626 17.8631 5.13493 17.7227 5.13493C17.5824 5.13493 17.4434 5.1626 17.3137 5.21636C17.184 5.27011 17.0662 5.3489 16.967 5.44822L16.9063 5.50891C16.5849 5.82328 16.1767 6.03413 15.7343 6.11434C15.2933 6.1943 14.8385 6.14072 14.4281 5.96049C14.0264 5.78746 13.6838 5.50108 13.4422 5.13635C13.2 4.7705 13.0699 4.34179 13.0682 3.90299L13.0682 3.9V3.81818C13.0682 3.53488 12.9556 3.26319 12.7553 3.06286C12.555 2.86254 12.2833 2.75 12 2.75ZM18.7273 14.7273L19.4134 15.0301C19.3529 15.1672 19.3349 15.3193 19.3616 15.4667C19.3881 15.6131 19.4576 15.7482 19.561 15.8549L19.6119 15.9057C19.8506 16.1443 20.0401 16.4275 20.1693 16.7393C20.2985 17.051 20.3651 17.3852 20.3651 17.7227C20.3651 18.0602 20.2985 18.3944 20.1693 18.7062C20.0401 19.0178 19.8508 19.301 19.6122 19.5394C19.3737 19.7781 19.0906 19.9674 18.7789 20.0966C18.4671 20.2258 18.133 20.2923 17.7955 20.2923C17.458 20.2923 17.1238 20.2258 16.812 20.0966C16.5002 19.9673 16.217 19.7779 15.9785 19.5391L15.9276 19.4883C15.8209 19.3848 15.6858 19.3154 15.5395 19.2889C15.392 19.2621 15.2399 19.2802 15.1028 19.3407L15.0955 19.3439C14.961 19.4016 14.8464 19.4972 14.7656 19.6191C14.685 19.7408 14.6417 19.8832 14.6409 20.0291V20.1818C14.6409 20.8629 14.3703 21.5162 13.8887 21.9978C13.4071 22.4794 12.7539 22.75 12.0727 22.75C11.3916 22.75 10.7384 22.4794 10.2567 21.9978C9.77512 21.5162 9.50455 20.8629 9.50455 20.1818V20.1103C9.49965 19.9624 9.45112 19.8192 9.36498 19.6988C9.27743 19.5764 9.15508 19.4831 9.01384 19.4312C8.99901 19.4257 8.98436 19.4198 8.9699 19.4134C8.83281 19.3529 8.68073 19.3349 8.53327 19.3616C8.38694 19.3881 8.25183 19.4576 8.14508 19.561L8.09426 19.6119C7.85574 19.8506 7.5725 20.0401 7.26073 20.1693C6.94896 20.2985 6.61477 20.3651 6.27727 20.3651C5.93977 20.3651 5.60558 20.2985 5.29381 20.1693C4.98204 20.0401 4.6988 19.8506 4.46028 19.6119C4.22178 19.3735 4.03256 19.0904 3.90343 18.7789C3.77418 18.4671 3.70766 18.133 3.70766 17.7955C3.70766 17.458 3.77418 17.1238 3.90343 16.812C4.03261 16.5004 4.22194 16.2172 4.46058 15.9788L4.5117 15.9276C4.61517 15.8209 4.6846 15.6858 4.71113 15.5395C4.73786 15.392 4.71981 15.2399 4.65931 15.1028L4.65606 15.0955C4.59844 14.961 4.50281 14.8464 4.38086 14.7656C4.25924 14.685 4.11678 14.6417 3.97093 14.6409H3.81818C3.13706 14.6409 2.48383 14.3703 2.0022 13.8887C1.52058 13.4071 1.25 12.7539 1.25 12.0727C1.25 11.3916 1.52058 10.7384 2.0022 10.2567C2.48383 9.77512 3.13706 9.50455 3.81818 9.50455H3.88972C4.03761 9.49965 4.1808 9.45112 4.30123 9.36498C4.42364 9.27743 4.51688 9.15509 4.56883 9.01384C4.57428 8.99901 4.5802 8.98436 4.58658 8.9699C4.64709 8.83281 4.66514 8.68072 4.6384 8.53327C4.61187 8.38694 4.54244 8.25183 4.43897 8.14508L4.38815 8.09426C4.14937 7.85575 3.95994 7.57251 3.8307 7.26073C3.70146 6.94896 3.63493 6.61477 3.63493 6.27727C3.63493 5.93977 3.70146 5.60559 3.8307 5.29381C3.95989 4.98217 4.14921 4.69903 4.38785 4.46058C4.62631 4.22194 4.90944 4.03261 5.22109 3.90343C5.53286 3.77418 5.86705 3.70766 6.20455 3.70766C6.54204 3.70766 6.87623 3.77418 7.18801 3.90343C7.49978 4.03267 7.78302 4.22209 8.02153 4.46087L8.07235 4.51169C8.1791 4.61516 8.31421 4.6846 8.46055 4.71113C8.608 4.73786 8.76008 4.71981 8.89718 4.65931C8.9538 4.63432 9.01315 4.6165 9.07384 4.60614C9.16674 4.54919 9.24649 4.47243 9.30714 4.38086C9.38768 4.25924 9.431 4.11678 9.43182 3.97093V3.81818C9.43182 3.13706 9.70239 2.48383 10.184 2.0022C10.6656 1.52058 11.3189 1.25 12 1.25C12.6811 1.25 13.3344 1.52058 13.816 2.0022C14.2976 2.48383 14.5682 3.13706 14.5682 3.81818V3.8982C14.569 4.04405 14.6123 4.18651 14.6929 4.30813C14.7736 4.43008 14.8883 4.52575 15.0227 4.58337L15.0301 4.58654C15.1672 4.64705 15.3193 4.66514 15.4667 4.6384C15.6131 4.61187 15.7482 4.54244 15.8549 4.43897L15.9057 4.38815C16.1442 4.1495 16.4276 3.95989 16.7393 3.8307C17.051 3.70146 17.3852 3.63493 17.7227 3.63493C18.0602 3.63493 18.3944 3.70146 18.7062 3.8307C19.0177 3.95984 19.3007 4.14905 19.5391 4.38756C19.7779 4.62607 19.9673 4.90931 20.0966 5.22109C20.2258 5.53286 20.2923 5.86705 20.2923 6.20455C20.2923 6.54205 20.2258 6.87623 20.0966 7.18801C19.9674 7.49965 19.7781 7.78278 19.5394 8.02124L19.4883 8.0724C19.3848 8.17914 19.3154 8.31423 19.2889 8.46055C19.2621 8.608 19.2802 8.76008 19.3407 8.89718C19.3657 8.9538 19.3835 9.01314 19.3939 9.07384C19.4508 9.16673 19.5276 9.24649 19.6191 9.30714C19.7408 9.38768 19.8832 9.431 20.0291 9.43182H20.1818C20.8629 9.43182 21.5162 9.70239 21.9978 10.184C22.4794 10.6656 22.75 11.3189 22.75 12C22.75 12.6811 22.4794 13.3344 21.9978 13.816C21.5162 14.2976 20.8629 14.5682 20.1818 14.5682H20.1018C19.9559 14.569 19.8135 14.6123 19.6919 14.6929C19.5699 14.7736 19.4742 14.8883 19.4166 15.0227L18.7273 14.7273Z"
            fill={color}
          />
        </svg>
      </AccessibleIcon.Root>
    </div>
  );
};
