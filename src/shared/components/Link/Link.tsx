import { FC, ReactNode } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import cls from './Link.module.scss'
import { classNames } from 'utils/classNames'

type LinkProps = {
  to: string
  title: string
} & (
  | { icon: ReactNode, collapsed: boolean }
  | { icon?: undefined, collapsed?: undefined }
)

export const Link: FC<LinkProps> = ({ to, title, icon, collapsed }) => {
  return (
    <LinkRouter to={to} className={cls.link}>
      {icon}
      <div className={classNames(cls.linkTitle, { [cls.collapsed]: collapsed })}>{title}</div>
    </LinkRouter>
  )
}
