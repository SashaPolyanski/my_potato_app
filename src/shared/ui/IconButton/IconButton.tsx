import { type FC, type ReactNode } from 'react'
import { classNames } from 'utils/classNames'
import cls from './IconButton.module.scss'

interface IconButtonProps {
  icon: ReactNode
}

export const IconButton: FC<IconButtonProps> = ({ icon }) => {
  return (
    <button className={classNames(cls.iconBtn, {}, [])}>
      {icon}
    </button>
  )
}
