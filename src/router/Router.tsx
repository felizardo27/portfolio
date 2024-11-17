import { Route, Routes } from "react-router-dom";
import { Container } from "./styles";
import { Home } from "../pages/Home/Index";
import { Navbar } from "../components/Navbar";
import { routesPages } from "./routesPath";
import { useAnimation } from "../hooks/useAnimation";
import { useCurrentPage } from "../context/useCurrentPage";
import { useEffect } from "react";
import { useTheme } from "../context/useTheme";
import { useLanguage } from "../context/useLanguage";


export function Router() {
  const {opacityAnimation, refAnimation} = useAnimation();
  const {currentPage} = useCurrentPage();
  const {theme} = useTheme();
  const {language} = useLanguage();

  useEffect(() => {
    opacityAnimation();
  }, [currentPage, theme, language])
  
  return (
    <Container ref={refAnimation}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />

        {routesPages.map(({ page: Page, path }) => (
          <Route
            path={path}
            key={path}
            element={
              <>
                <Navbar />
                <Page />
              </>
            }
          />
        ))}


        <Route path="*" element={<>
          <Navbar />
          <></>
        </>} />
      </Routes>
    </Container>
  );
}
