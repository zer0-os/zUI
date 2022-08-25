import { CSSProperties } from '@stitches/react';
import { Theme } from './ThemeEngine.constants';

export const ThemeColors: Record<Theme, { [key: string]: CSSProperties['color'] }> = {
  [Theme.Dark]: {
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
    secondary12: '#e4fff9'
  },
  [Theme.Light]: {
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
    secondary12: '#09342e'
  }
};
