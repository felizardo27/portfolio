import { useEffect } from "react";
import { create } from "zustand";

interface NavbarState {
  currentPage: string;
  setCurrentPage: (details: string) => void;
}

const useCurrentPageStore = create<NavbarState>((set) => ({
  currentPage: "Portfolio",
  setCurrentPage: (page: string) => set(() => ({ currentPage: page })),
}));

export function useCurrentPage() {
  const currentPage = useCurrentPageStore((state) => state.currentPage);
  const setCurrentPage = useCurrentPageStore((state) => state.setCurrentPage);

  useEffect(() => {
    document.title =
      currentPage === "Portfolio"
        ? currentPage
        : currentPage === "Home"
          ? "Portifolio"
          : `Portfolio - ${currentPage}`;
  }, [currentPage]);

  return {
    currentPage,
    setCurrentPage,
  };
}
