import {FC, useState} from 'react'
import {classNames} from "utils/classNames";
import cls from './Sidebar.module.scss'

type SidebarProps = {}

export const Sidebar: FC<SidebarProps> = ({}) => {
  const [collapsed, setCollapsed] = useState(false)
  const toggleSidebarHandler = () => {
    setCollapsed((p) => !p)
  }
  return (
    <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [])}>
      <button onClick={toggleSidebarHandler}>toggle sidebar</button>
    </div>
  );
};

