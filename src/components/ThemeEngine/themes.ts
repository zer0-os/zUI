import type { Theme } from './ThemeEngine.types';

import { ThemeVariant } from './ThemeEngine.constants';

export const themes: Record<ThemeVariant, Theme> = {
  [ThemeVariant.Dark]: {
    // Greyscale
    gray1: '#09090a',
    gray2: '#1c1c1f',
    gray3: '#232326',
    gray4: '#28282c',
    gray5: '#2e2e32',
    gray6: '#34343a',
    gray7: '#404040',
    gray8: '#504f57',
    gray9: '#706f78',
    gray10: '#7e7d86',
    gray11: '#a09fa6',
    gray12: '#ededef',

    // Primary
    primary1: '#0e0b10',
    primary2: '#18101e',
    primary3: '#1f1825',
    primary4: '#3a1e48',
    primary5: '#432155',
    primary6: '#4e2667',
    primary7: '#6a3991',
    primary8: '#7f46aa',
    primary9: '#973cdd',
    primary10: '#b14eff',
    primary11: '#bf7af0',
    primary12: '#f5ecfc',

    // Secondary
    secondary1: '#051c18',
    secondary2: '#05201b',
    secondary3: '#052923',
    secondary4: '#01342c',
    secondary5: '#013c32',
    secondary6: '#01453a',
    secondary7: '#005648',
    secondary8: '#136c5e',
    secondary9: '#67eace',
    secondary10: '#8affe5',
    secondary11: '#01f4cb',
    secondary12: '#e4fff9',

    // Success
    success1: '#0D1912',
    success2: '#0C1F17',
    success3: '#0F291E',
    success4: '#113123',
    success5: '#133929',
    success6: '#164430',
    success7: '#1B543A',
    success8: '#236E4A',
    success9: '#30A46C',
    success10: '#3CB179',
    success11: '#58C573',
    success12: '#E5FBEB',

    // Warning
    warning1: '#1F1206',
    warning2: '#2B1400',
    warning3: '#391A03',
    warning4: '#441F04',
    warning5: '#4F2305',
    warning6: '#5F2A06',
    warning7: '#763205',
    warning8: '#943E00',
    warning9: '#F76808',
    warning10: '#FF802B',
    warning11: '#FF8B3E',
    warning12: '#FEEADD',

    // Error
    error1: '#1F1315',
    error2: '#291415',
    error3: '#3C181A',
    error4: '#481A1D',
    error5: '#541B1F',
    error6: '#671E22',
    error7: '#822025',
    error8: '#AA2429',
    error9: '#E5484D',
    error10: '#F2555A',
    error11: '#FF6369',
    error12: '#FEECEE',

    // Black & White
    black: '#101010',
    white: '#FFFFFF',

    // Gradients
    gradientPurple1: 'linear-gradient(223deg, #421349 14.62%, #0D0416 36.73%, #0B060E 59.58%, #2B0659 85.38%)',
    gradientPurple2: 'radial-gradient(66.52% 66.52% at 0% 0%, #26072D 0%, rgba(38, 7, 45, 0) 100%)',
    gradientPurple3: 'radial-gradient(66.52% 66.52% at 0% 0%, #B900E3 0%, rgba(111, 25, 131, 0) 100%)',
    gradientBlue1: 'linear-gradient(90deg, #5257FF 0%, #52CBFF 100%)',
    gradientBlue2: 'linear-gradient(90deg, #5257FF 0%, #52CBFF 100%)',
    gradientBlue3: 'linear-gradient(90deg, #5257FF 0%, #52CBFF 100%)',

    // Alpha Channels
    alphaGray1: '#09090A',
    alphaGray2: 'rgba(215, 215, 250, 0.031)',
    alphaGray3: 'rgba(235, 235, 254, 0.061)',
    alphaGray4: 'rgba(229, 229, 254, 0.087)',
    alphaGray5: 'rgba(234, 234, 254, 0.113)',
    alphaGray6: 'rgba(225, 225, 254, 0.148)',
    alphaGray7: 'rgba(232, 232, 254, 0.191)',
    alphaGray8: 'rgba(234, 231, 255, 0.273)',
    alphaGray9: 'rgba(238, 236, 255, 0.416)',
    alphaGray10: 'rgba(240, 238, 255, 0.477)',
    alphaGray11: 'rgba(247, 245, 255, 0.615)',
    alphaGray12: 'rgba(253, 253, 255, 0.931)',

    alphaPrimary1: 'rgba(177, 78, 255, 0.03)',
    alphaPrimary2: 'rgba(181, 42, 251, 0.035)',
    alphaPrimary3: 'rgba(188, 67, 254, 0.129)',
    alphaPrimary4: 'rgba(190, 72, 254, 0.191)',
    alphaPrimary5: 'rgba(188, 73, 255, 0.248)',
    alphaPrimary6: 'rgba(183, 75, 255, 0.328)',
    alphaPrimary7: 'rgba(177, 74, 255, 0.456)',
    alphaPrimary8: 'rgba(171, 75, 255, 0.66)',
    alphaPrimary9: 'rgba(181, 97, 255, 0.748)',
    alphaPrimary10: 'rgba(189, 109, 255, 0.801)',
    alphaPrimary11: 'rgba(203, 129, 255, 0.934)',
    alphaPrimary12: 'rgba(252, 240, 255, 0.98)',

    alphaSecondary1: '#051C18',
    alphaSecondary2: 'rgba(0, 251, 251, 0.031)',
    alphaSecondary3: 'rgba(0, 253, 237, 0.07)',
    alphaSecondary4: 'rgba(0, 253, 224, 0.105)',
    alphaSecondary5: 'rgba(0, 254, 224, 0.144)',
    alphaSecondary6: 'rgba(0, 254, 220, 0.192)',
    alphaSecondary7: 'rgba(0, 254, 216, 0.266)',
    alphaSecondary8: 'rgba(0, 254, 208, 0.366)',
    alphaSecondary9: 'rgba(128, 255, 227, 0.87)',
    alphaSecondary10: 'rgba(157, 255, 227, 0.948)',
    alphaSecondary11: 'rgba(44, 255, 209, 0.796)',
    alphaSecondary12: 'rgba(236, 255, 251, 0.98)'
  },
  [ThemeVariant.Light]: {
    // Greyscale
    gray1: '#f9f8f9',
    gray2: '#fdfcfd',
    gray3: '#f4f2f4',
    gray4: '#eeedef',
    gray5: '#e9e8ea',
    gray6: '#e4e2e4',
    gray7: '#dcdbdd',
    gray8: '#c8c7cb',
    gray9: '#908e96',
    gray10: '#86848d',
    gray11: '#6f6e77',
    gray12: '#1a1523',

    // Primary
    primary1: '#fdfaff',
    primary2: '#fefcfe',
    primary3: '#f9f1fe',
    primary4: '#f3e7fc',
    primary5: '#eddbf9',
    primary6: '#e3ccf4',
    primary7: '#d3b4ed',
    primary8: '#be93e4',
    primary9: '#8e4ec6',
    primary10: '#8445bc',
    primary11: '#793aaf',
    primary12: '#2b0e44',

    // Secondary
    secondary1: '#fafdfd',
    secondary2: '#f0fdfb',
    secondary3: '#e0fcf7',
    secondary4: '#cffaf3',
    secondary5: '#b8f7ed',
    secondary6: '#96f3e4',
    secondary7: '#63eed7',
    secondary8: '#1ee6c5',
    secondary9: '#26edcc',
    secondary10: '#51f1d6',
    secondary11: '#147d6f',
    secondary12: '#09342e',

    // Success
    success1: '#FBFEFC',
    success2: '#F2FCF5',
    success3: '#E9F9EE',
    success4: '#DDF3E4',
    success5: '#CCEBD7',
    success6: '#B4DFC4',
    success7: '#92CEAC',
    success8: '#5BB98C',
    success9: '#30A46C',
    success10: '#299764',
    success11: '#18794E',
    success12: '#153226',

    // Warning
    warning1: '#FEFCFB',
    warning2: '#FEF8F4',
    warning3: '#FFF1E7',
    warning4: '#FFE8D7',
    warning5: '#FFDCC3',
    warning6: '#FFCCA7',
    warning7: '#FFB381',
    warning8: '#FA934E',
    warning9: '#F76808',
    warning10: '#ED5F00',
    warning11: '#BD4B00',
    warning12: '#451E11',

    // Error
    error1: '#FFFCFC',
    error2: '#FFF8F8',
    error3: '#FFEFEF',
    error4: '#FFE5E5',
    error5: '#FDD8D8',
    error6: '#F9C6C6',
    error7: '#F3AEAF',
    error8: '#EB9091',
    error9: '#E5484D',
    error10: '#DC3D43',
    error11: '#CD2B31',
    error12: '#381316',

    // Black & White
    black: '#101010',
    white: '#FFFFFF',

    // Gradients
    gradientPurple1: 'linear-gradient(219deg, #F5DAFF 14.45%, #F6EFF9 36.67%, #F9EFFF 59.63%, #EDD6FF 85.55%)',
    gradientPurple2: 'radial-gradient(66.52% 66.52% at 0% 0%, #26072D 0%, rgba(38, 7, 45, 0) 100%)',
    gradientPurple3: 'radial-gradient(66.52% 66.52% at 0% 0%, #B900E3 0%, rgba(111, 25, 131, 0) 100%)',
    gradientBlue1: 'linear-gradient(90deg, #5257FF 0%, #52CBFF 100%)',
    gradientBlue2: 'linear-gradient(90deg, #5257FF 0%, #52CBFF 100%)',
    gradientBlue3: 'linear-gradient(90deg, #5257FF 0%, #52CBFF 100%)',

    // Alpha Channels
    alphaGray1: 'rgba(88, 5, 88, 0.012)',
    alphaGray2: 'rgba(41, 5, 41, 0.028)',
    alphaGray3: 'rgba(39, 0, 39, 0.051)',
    alphaGray4: 'rgba(16, 1, 30, 0.071)',
    alphaGray5: 'rgba(13, 2, 24, 0.091)',
    alphaGray6: 'rgba(18, 1, 18, 0.114)',
    alphaGray7: 'rgba(8, 1, 15, 0.142)',
    alphaGray8: 'rgba(5, 0, 18, 0.22)',
    alphaGray9: 'rgba(5, 0, 18, 0.444)',
    alphaGray10: 'rgba(4, 0, 19, 0.483)',
    alphaGray11: 'rgba(2, 0, 16, 0.569)',
    alphaGray12: 'rgba(5, 0, 15, 0.918)',

    alphaPrimary1: 'rgba(171, 5, 171, 0.012)',
    alphaPrimary2: 'rgba(155, 5, 255, 0.02)',
    alphaPrimary3: 'rgba(146, 0, 237, 0.055)',
    alphaPrimary4: 'rgba(128, 2, 224, 0.095)',
    alphaPrimary5: 'rgba(128, 1, 213, 0.142)',
    alphaPrimary6: 'rgba(117, 0, 200, 0.2)',
    alphaPrimary7: 'rgba(107, 1, 194, 0.295)',
    alphaPrimary8: 'rgba(102, 0, 191, 0.424)',
    alphaPrimary9: 'rgba(92, 0, 173, 0.695)',
    alphaPrimary10: 'rgba(87, 0, 163, 0.73)',
    alphaPrimary11: 'rgba(81, 0, 151, 0.773)',
    alphaPrimary12: 'rgba(31, 0, 57, 0.946)',

    alphaSecondary1: 'rgba(5, 213, 172, 0.024)',
    alphaSecondary2: 'rgba(1, 239, 176, 0.063)',
    alphaSecondary3: 'rgba(1, 221, 162, 0.118)',
    alphaSecondary4: 'rgba(1, 210, 154, 0.177)',
    alphaSecondary5: 'rgba(1, 190, 143, 0.248)',
    alphaSecondary6: 'rgba(0, 179, 134, 0.353)',
    alphaSecondary7: 'rgba(0, 171, 131, 0.51)',
    alphaSecondary8: 'rgba(0, 176, 141, 0.75)',
    alphaSecondary9: 'rgba(0, 201, 158, 0.561)',
    alphaSecondary10: 'rgba(0, 190, 149, 0.589)',
    alphaSecondary11: 'rgba(0, 114, 99, 0.922)',
    alphaSecondary12: 'rgba(0, 45, 39, 0.965)'
  }
};
