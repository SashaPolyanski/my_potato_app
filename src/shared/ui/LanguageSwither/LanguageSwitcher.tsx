import {FC} from 'react'
import LanguageIcon from 'assets/language.svg'
import {useTranslation} from "react-i18next";
import cls from './LanguageSwitcher.module.scss'
import {classNames} from "utils/classNames";

type LanguageSwitcherProps = {}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({}) => {
  const {i18n} = useTranslation()
  const changeLanguageHandler = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
    <button onClick={changeLanguageHandler} className={classNames(cls.languageSwitcher, {}, [])}>
      <LanguageIcon/>
    </button>
  );
};
