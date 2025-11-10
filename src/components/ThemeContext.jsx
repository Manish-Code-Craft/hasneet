"use client";
import { createContext, useContext, useMemo, useState, useEffect } from "react";

const ThemeCtx = createContext();

export function ThemeProvider({ children }) {
  const [accent, setAccent] = useState("#ff6600");
  const [bgStyle, setBgStyle] = useState("liquid"); // liquid | ball | waves | earth | solid | strings

  // write CSS var to :root so Tailwind can read it
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", accent);
  }, [accent]);

  const value = useMemo(() => ({ accent, setAccent, bgStyle, setBgStyle }), [accent, bgStyle]);
  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}
export const useTheme = () => useContext(ThemeCtx);
