import { tokens } from './tokens';
import 'styled-components';

export type ColorTheme = typeof tokens.colors.dark;

export interface AppTheme {
  colors: ColorTheme;
  fonts: typeof tokens.fonts;
  fontSizes: typeof tokens.fontSizes;
  breakpoints: typeof tokens.breakpoints;
  transitions: typeof tokens.transitions;
  shadows: typeof tokens.shadows;
  mode: 'dark' | 'light';
}

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}

export const darkTheme: AppTheme = {
  colors: tokens.colors.dark,
  fonts: tokens.fonts,
  fontSizes: tokens.fontSizes,
  breakpoints: tokens.breakpoints,
  transitions: tokens.transitions,
  shadows: tokens.shadows,
  mode: 'dark' as const,
};

export const lightTheme: AppTheme = {
  colors: tokens.colors.light,
  fonts: tokens.fonts,
  fontSizes: tokens.fontSizes,
  breakpoints: tokens.breakpoints,
  transitions: tokens.transitions,
  shadows: tokens.shadows,
  mode: 'light' as const,
};
