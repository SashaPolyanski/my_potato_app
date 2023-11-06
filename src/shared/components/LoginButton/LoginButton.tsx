import cls from './LoginButton.module.scss'
import { type FC } from 'react'
import { classNames } from 'utils/classNames'

export enum LoginButtonTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface LoginButtonType {
  theme?: LoginButtonTheme
  className?: string
}

export const LoginButton: FC<LoginButtonType> = ({
  theme = LoginButtonTheme.SECONDARY,
  className
}) => {
  console.log(cls[theme])
  return (
    <button className={classNames(cls.loginButton, {}, [className, cls[theme]])}>
      Login
    </button>
  )
}
