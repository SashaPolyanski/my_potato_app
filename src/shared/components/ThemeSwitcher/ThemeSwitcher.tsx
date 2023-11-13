import { Theme, useTheme } from 'app/providers/ThemeProvider'
import DarkIcon from 'assets/darkTheme.svg'
import LightIcon from 'assets/lightTheme.svg'
import cls from './ThemeSwitcher.module.scss'
import { IconButton } from 'shared/components'

export const ThemeSwitcher = () => {
  const { switchTheme, theme } = useTheme()
  return (
    <IconButton icon={theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>} onClick={switchTheme}
                className={cls.btn}/>

  )
}
