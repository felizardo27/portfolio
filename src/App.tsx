import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { themeColor }  from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { useTheme } from "./context/useTheme";

function App() {
  const {theme} = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? themeColor.lightTheme: themeColor.darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
