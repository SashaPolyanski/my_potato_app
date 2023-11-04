import './styles/index.scss'
import {Link} from 'react-router-dom'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "utils/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar, Sidebar} from "widgets";
import {useTranslation} from "react-i18next";
import {LanguageSwitcher} from "shared/ui";

export const App = () => {
  const {theme} = useTheme()
  const {t, i18n} = useTranslation()

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
          <AppRouter/>
        </div>
      </div>
    </div>
  );
};

