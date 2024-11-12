import { create } from "zustand";
import { IconsProps } from "../styles/icons/icons";
import { darkIcons } from "../styles/icons/darkIcons";
import { lightIcons } from "../styles/icons/lighIcons";

export type ThemeType = "dark" | "light";

interface ThemeStorage {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  icons: IconsProps;
}

function getInitialTheme(): ThemeType {
  const storedTheme = localStorage.getItem("theme") as ThemeType;
  return storedTheme ? storedTheme : "dark";
}

export const useTheme = create<ThemeStorage>((set) => ({
  theme: getInitialTheme(),
  icons: getInitialTheme() === "dark" ? darkIcons : lightIcons,
  setTheme: (theme: ThemeType) => {
    localStorage.setItem("theme", theme);
    set(() => ({
      theme,
      icons: theme === "dark" ? darkIcons : lightIcons,
    }));
  },
}));
