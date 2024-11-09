import { Route, Routes } from "react-router-dom";
import { Container } from "./styles";
import { Home } from "../pages/Home/Index";
import { Navbar } from "../components/Navbar";
import { routesPages } from "./routesPath";


export function Router() {
  return (
    <Container>
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
