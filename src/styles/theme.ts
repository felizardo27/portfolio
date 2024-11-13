const palette = {
  black: "#000000",
  white: "#FFFFFF",

  info100: "#B4D1F2",
  info200: "#8AB9E0",
  info300: "#3D84C6",
  info400: "#2C6D9D",
  info500: "#1A4C73",

  navBar100: "#FEFEFE",
  navBar200: "#DEDEDE",
};

const lightTheme = {
  ...palette,

  background: "#fff",
  backgroundContrast: "#121212",

  chronoTheme: {
    cardBgColor: "white",
    cardForeColor: "black",
    titleColor: "white",
  },

  timelineLineColor: "#ccc",
  cardBackground: "#fff",
  cardFooterBackground: "#f7f7f7",
  cardBorderColor: "#00000020",
  bsPrimaryVariant: "light",
  bsSecondaryVariant: "dark",
  socialIconBgColor: "#121212",
};

const darkTheme = {
  ...palette,

  background: "#121212",
  backgroundContrast: "#eee",

  chronoTheme: {
    cardBgColor: "#1B1B1B",
    cardForeColor: "#eee",
    titleColor: "black",
  },

  timelineLineColor: "#444",
  cardBackground: "#060606",
  cardFooterBackground: "#181818",
  cardBorderColor: "#ffffff20",
  bsPrimaryVariant: "dark",
  bsSecondaryVariant: "light",
  socialIconBgColor: "#fefefe",
};

export const themeColor = { lightTheme, darkTheme };
