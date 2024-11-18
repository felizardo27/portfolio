import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { themeColor } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { useTheme } from "./context/useTheme";
import { useEffect } from "react";
import { useFirebase } from "./hooks/useFirebase";

function App() {
  const { theme } = useTheme();
  const { analytics } = useFirebase();

  useEffect(() => {
    analytics;
  }, [])

  return (
    <ThemeProvider theme={theme === 'light' ? themeColor.lightTheme : themeColor.darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
