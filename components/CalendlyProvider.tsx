"use client";

import { createContext, useContext, useState } from "react";
import { PopupModal } from "react-calendly";

interface CalendlyContextType {
  openCalendly: () => void;
}

const CalendlyContext = createContext<CalendlyContextType | undefined>(
  undefined
);

export const useCalendly = () => {
  const context = useContext(CalendlyContext);
  if (!context) {
    throw new Error("useCalendly must be used within CalendlyProvider");
  }
  return context;
};

interface CalendlyProviderProps {
  children: React.ReactNode;
  calendlyUrl: string;
}

export const CalendlyProvider = ({
  children,
  calendlyUrl,
}: CalendlyProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openCalendly = () => setIsOpen(true);

  return (
    <CalendlyContext.Provider value={{ openCalendly }}>
      {children}
      {isOpen && (
        <PopupModal
          url={calendlyUrl}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={document.getElementById("__next") || document.body}
        />
      )}
    </CalendlyContext.Provider>
  );
};
