import cls from './LoginButton.module.scss'
import { type FC, useCallback, useState } from 'react'
import { classNames } from 'utils/classNames'
import { Modal } from 'shared/components'

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
  const [open, setOpen] = useState(false)
  const toggleOpenHandler = useCallback(() => {
    setOpen((p) => !p)
  }, [])
  return (
    <>
      <button onClick={toggleOpenHandler} className={classNames(cls.loginButton, {}, [className, cls[theme]])}>
        Login
      </button>
      <Modal open={open} onClose={toggleOpenHandler}>Login modal</Modal>
    </>
  )
}
