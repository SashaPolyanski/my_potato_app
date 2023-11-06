import cls from './RegistrationButton.module.scss'
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

export const RegistrationButton: FC<LoginButtonType> = ({
  theme,
  className
}) => {
  return (
    <button className={classNames(cls.RegistrButton, {}, [className, cls[theme]])}>
      Signup
    </button>
  )
}
