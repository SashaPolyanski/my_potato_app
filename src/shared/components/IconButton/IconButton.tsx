import { FC, ReactNode } from 'react'
import { classNames } from 'utils/classNames'
import cls from './IconButton.module.scss'

type IconButtonProps = {
  icon?: ReactNode
  onClick: () => void
  className?: string
  variant?: 'secondary' | 'primary'
}

export const IconButton: FC<IconButtonProps> = ({ icon, className, ...rest }) => {
  return (
    <button className={classNames(cls.iconBtn, {}, [className])} {...rest}>
      {icon}
    </button>
  )
}
