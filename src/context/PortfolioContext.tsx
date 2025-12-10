"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type PortfolioType = "digital-marketing" | "frontend-developer" | null;

interface PortfolioContextType {
  portfolioType: PortfolioType;
  setPortfolioType: (type: PortfolioType) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [portfolioType, setPortfolioType] = useState<PortfolioType>(null);

  return (
    <PortfolioContext.Provider value={{ portfolioType, setPortfolioType }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}

