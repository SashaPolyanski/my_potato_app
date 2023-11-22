import { useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'utils/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar, Sidebar } from 'widgets'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useEffect, useState } from 'react'
import { Modal } from 'shared/components'

export const App = () => {
  const { theme } = useTheme()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const currentPath = location.pathname
    const validPaths = Object.values(RoutePath)

    if (!validPaths.includes(currentPath)) {
      navigate('/')
    }
  }, [location, navigate])
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
          <button onClick={() => {
            setOpen(true)
          }}>open modal
          </button>
          <Modal open={open} onClose={() => {
            setOpen(false)
          }}>asdasdasdasdas</Modal>
          <AppRouter/>
        </div>
      </div>
    </div>
  )
}
