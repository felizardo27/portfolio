import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../../context/useThemeStore';
import { StyledToggle } from './styles';

export const ToggleTheme: React.FC = () => {
  const { themeMode, toggleTheme } = useThemeStore();

  return (
    <StyledToggle onClick={toggleTheme} aria-label="Toggle Theme Mode">
      {themeMode === 'dark' ? <Sun /> : <Moon />}
    </StyledToggle>
  );
};
