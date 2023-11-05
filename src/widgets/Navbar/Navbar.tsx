import s from './Navbar.module.scss'
import { classNames } from 'utils/classNames'
import { type FC } from 'react'
import { LoginButton, RegistrationButton } from 'shared/ui/AuthButtons'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'

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
      </div>
    </div>
  )
}
