import {createContext} from "react";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export type ThemeContextProps = {
  theme?: Theme
  setTheme: (theme: Theme) => void
}
export const ThemeCtx = createContext<ThemeContextProps>({
  setTheme: () => {
  },
  theme: Theme.DARK
})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
