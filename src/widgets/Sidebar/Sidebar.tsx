import { type FC, useState } from 'react'
import { classNames } from 'utils/classNames'
import cls from './Sidebar.module.scss'

export const Sidebar: FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const toggleSidebarHandler = () => {
    setCollapsed((p) => !p)
  }
  return (
    <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [])}>
      <button onClick={toggleSidebarHandler}>toggle sidebar</button>
    </div>
  )
}
