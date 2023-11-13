import { type FC } from 'react'
import LanguageIcon from 'assets/language.svg'
import { useTranslation } from 'react-i18next'
import { IconButton } from 'shared/components'
import cls from './LanguageSwitcher.module.scss'

export const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation()
  const changeLanguageHandler = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
    <div className={cls.languageSwitcherWrapper}>
      <IconButton icon={<LanguageIcon/>} onClick={changeLanguageHandler}/>
      <div className={cls.languageText}>{i18n.language}</div>
    </div>

  )
}
