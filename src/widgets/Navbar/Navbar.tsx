import s from './Navbar.module.scss'
import { classNames } from 'utils/classNames'
import { type FC } from 'react'
import { ThemeSwitcher } from 'shared/components/ThemeSwitcher'
import { LanguageSwitcher, LoginButton, RegistrationButton } from 'shared/components'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={s.navbarButtons}>
        <LoginButton/>
        <RegistrationButton/>
        <ThemeSwitcher/>
        <LanguageSwitcher/>
      </div>
    </div>
  )
}
