import { create } from 'zustand';

interface ThemeState {
  themeMode: 'dark' | 'light';
  toggleTheme: () => void;
  setTheme: (theme: 'dark' | 'light') => void;
}

const getInitialTheme = (): 'dark' | 'light' => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const stored = window.localStorage.getItem('theme-mode');
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
  }
  return 'dark';
};

export const useThemeStore = create<ThemeState>((set) => ({
  themeMode: getInitialTheme(),
  toggleTheme: () => set((state) => {
    const nextTheme = state.themeMode === 'dark' ? 'light' : 'dark';
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('theme-mode', nextTheme);
    }
    return { themeMode: nextTheme };
  }),
  setTheme: (themeMode) => set(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('theme-mode', themeMode);
    }
    return { themeMode };
  }),
}));
