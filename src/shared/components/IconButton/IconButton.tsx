import { FC } from 'react'
import { classNames } from 'utils/classNames'
import cls from './IconButton.module.scss'

interface IconButtonProps {
  text: string
  variant?: 'secondary' | 'primary'
}

export const IconButton: FC<IconButtonProps> = ({ text, variant }) => {
  return (
    <button className={classNames(cls.iconBtn, { [cls[variant]]: true })}>
      {text}
    </button>
  )
}
