import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PortfolioPage } from './PortfolioPage';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<PortfolioPage />} />
    </Routes>
  );
};
