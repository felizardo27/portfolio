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
      path: "/About",
    },
  ];

  return (
    <Container>
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
          {...routesPages.map(({ page: Page, path }: RoutesPageProps) => {
            <Route
              path={`/${path}`}
              key={path}
              element={
                <>
                  <Navbar />
                  <Page />
                </>
              }
            />;
          })}
        />

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Container>
  );
}
