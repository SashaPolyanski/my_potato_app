import './styles/index.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'utils/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar, Sidebar } from 'widgets'
import { useTranslation } from 'react-i18next'
import { IconButton, LanguageSwitcher } from 'shared/components'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useEffect } from 'react'

export const App = () => {
  const { theme } = useTheme()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const currentPath = location.pathname
    const validPaths = Object.values(RoutePath)

    if (!validPaths.includes(currentPath)) {
      navigate('/')
    }
  }, [location])
  // useEffect(() => {
  //   if (Math.random() > 0.5) {
  //     throw new Error()
  //   }
  // })
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <div className={'content-page'}>
        <Sidebar/>
        <div className={'page-container'}>
          <div>{t('test')}</div>
          <LanguageSwitcher/>
          <Link to={'/'}>На главную</Link>
          <Link to={'/about'}>О сайте</Link>
          <IconButton text={'test icon button'} variant={'secondary'}/>
          <AppRouter/>
        </div>
      </div>
    </div>
  )
}
