import { Theme, useTheme } from 'app/providers/ThemeProvider'
import DarkIcon from 'assets/darkTheme.svg'
import LightIcon from 'assets/lightTheme.svg'
import cls from './ThemeSwitcher.module.scss'

export const ThemeSwitcher = () => {
  const { switchTheme, theme } = useTheme()
  return (
    <button onClick={switchTheme} className={cls.btn}>
      {theme === Theme.DARK ? <DarkIcon width={20} height={20}/> : <LightIcon/>}
    </button>
  )
}
