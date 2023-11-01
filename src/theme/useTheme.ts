import {useCallback, useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeCtx} from "./ThemeContext";

type useThemeProps = {
  theme: Theme
  switchTheme: () => void
}
export const useTheme = (): useThemeProps => {
  const {theme, setTheme} = useContext(ThemeCtx)
  const switchTheme = useCallback(() => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }, [theme])
  return {theme, switchTheme}
}
