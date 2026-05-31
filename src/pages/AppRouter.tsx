import React from "react";
import { Routes, Route } from "react-router-dom";
import { PortfolioPage } from "./PortfolioPage";
import { LinksPage } from "./Links";
import { NotFoundPage } from "./NotFound";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/links" element={<LinksPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
