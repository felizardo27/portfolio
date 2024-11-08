import { Route, Routes } from "react-router-dom";
import { Container } from "./styles";
import React from "react";
import { Home } from "../pages/Home/Index";
import { Navbar } from "../components/Navbar";

interface RoutesPageProps {
  page: () => React.ReactNode;
  path: string;
}

export function Router() {

  const routesPages: RoutesPageProps[] = [
    {
      page: Home,
      path: "/home",
    },
  ];

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
