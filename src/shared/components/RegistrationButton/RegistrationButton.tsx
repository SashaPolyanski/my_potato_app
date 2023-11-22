import cls from './RegistrationButton.module.scss'
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

export const RegistrationButton: FC<LoginButtonType> = ({
  theme,
  className
}) => {
  const [open, setOpen] = useState(false)
  const toggleOpenHandler = useCallback(() => {
    setOpen((p) => !p)
  }, [])
  return (
    <>
      <button onClick={toggleOpenHandler} className={classNames(cls.RegistrButton, {}, [className, cls[theme]])}>
        Signup
      </button>
      <Modal open={open} onClose={toggleOpenHandler}>Registration modal</Modal>
    </>
  )
}
