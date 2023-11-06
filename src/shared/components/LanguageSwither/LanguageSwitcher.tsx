import { type FC } from 'react'
import LanguageIcon from 'assets/language.svg'
import { useTranslation } from 'react-i18next'
import cls from './LanguageSwitcher.module.scss'
import { classNames } from 'utils/classNames'

export const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation()
  const changeLanguageHandler = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
    <button onClick={changeLanguageHandler} className={classNames(cls.languageSwitcher, {}, [])}>
      <LanguageIcon/>
    </button>
  )
}
