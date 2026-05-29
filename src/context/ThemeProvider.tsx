import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useThemeStore } from './useThemeStore';
import { darkTheme, lightTheme } from '../styles/theme';
import { GlobalStyle } from '../styles/global';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const themeMode = useThemeStore((state) => state.themeMode);
  const selectedTheme = themeMode === 'dark' ? darkTheme : lightTheme;

  return (
    <StyledThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};
