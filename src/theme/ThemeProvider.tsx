import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeCtx} from "./ThemeContext";
import {FC, ReactNode, useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.DARK
export const ThemeProvider: FC<{ children: ReactNode }> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const value = useMemo(() => ({
    theme, setTheme
  }), [theme])
  return (
    <ThemeCtx.Provider value={value}>
      {children}
    </ThemeCtx.Provider>
  );
};

