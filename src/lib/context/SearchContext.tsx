"use client";
// SearchContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface SearchContextProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}

export const SearchContext = createContext<SearchContextProps | undefined>(
  undefined
);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("naruto");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch(): SearchContextProps {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
