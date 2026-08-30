import { createContext, useContext } from "react";

type ActiveSectionContextValue = {
  setActiveSection: (section: string) => void;
};

export const ActiveSectionContext = createContext<ActiveSectionContextValue>({
  setActiveSection: () => {},
});

export const useActiveSection = () => useContext(ActiveSectionContext);
