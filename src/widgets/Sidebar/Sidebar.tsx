import { type FC, useState } from 'react'
import { classNames } from 'utils/classNames'
import cls from './Sidebar.module.scss'
import SidebarIcon from 'assets/sidebarArrow.svg'
import { IconButton, Link } from 'shared/components'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import HomeIcon from 'assets/homeIcon.svg'
import AboutIcon from 'assets/aboutIcon.svg'
import { useTranslation } from 'react-i18next'

export const Sidebar: FC = () => {
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState(false)
  const toggleSidebarHandler = () => {
    setCollapsed((p) => !p)
  }
  return (
    <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [])}>
      <IconButton className={classNames(cls.sidebarBtn, { [cls.collapsedBtn]: !collapsed })} icon={<SidebarIcon/>}
                  onClick={toggleSidebarHandler}/>
      <div className={cls.sidebarItems}>
        <Link to={RoutePath.home} icon={<HomeIcon/>} title={t('home')} collapsed={collapsed}/>
        <Link to={RoutePath.about} icon={<AboutIcon/>} title={t('about')} collapsed={collapsed}/>
      </div>
    </div>
  )
}
