import { DefaultTheme } from 'styled-components';
import { ThemeType } from './types';

export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const colors = {
  black: '#000000',
  white: '#ffffff',
  blue1: '#01a1fe',
  blue3: '#80d0fe',
  blue2: '#4dbdfe',
  gray1: '#333333',
  gray2: '#454545',
  gray3: '#828282',
  gray4: '#bdbdbd',
  gray5: '#e0e0e0',
  green1: '#219653',
  gray6: '#f2f2f2',
  green2: '#27ae60',
  green3: '#6fcf97',
  pink1: '#ff00ff',
  pink2: '#ff33ff',
  pink3: '#ff66ff',
  orange1: '#f2994a',
  orange2: '#f5ae70',
  orange3: '#f8c9a0',
  red1: '#ff0000',
  red2: '#ff4545',
  red3: '#ff8888',
  lightBackground: '#ffffff',
  darkBackground: '#333333',
};

const light = {
  background: colors.lightBackground,
  secondaryBackground: colors.white,
  btnPrimary: colors.orange1,
  btnPrimaryFont: colors.white,
  btnPrimaryLight: colors.lightBackground,
  btnPrimaryLightFont: colors.gray1,
  fontColor: colors.gray1,
};

export type Theme = typeof light;

const dark: Theme = {
  background: colors.darkBackground,
  secondaryBackground: colors.gray2,
  btnPrimary: colors.orange1,
  btnPrimaryFont: colors.white,
  btnPrimaryLight: colors.lightBackground,
  btnPrimaryLightFont: colors.gray1,
  fontColor: colors.white,
};

const theme = {
  light,
  dark,
};

export const createTheme = (type = ThemeType.LIGHT): DefaultTheme => {
  switch (type) {
    case ThemeType.LIGHT:
      return theme.light;
    case ThemeType.DARK:
      return theme.dark;
  }
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
