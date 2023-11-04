import './styles/index.scss'
import {Link} from 'react-router-dom'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "utils/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar, Sidebar} from "widgets";


export const App = () => {
  const {theme} = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <div className={'content-page'}>
        <Sidebar/>
        <div className={'page-container'}>
          <Link to={'/'}>На главную</Link>
          <Link to={'/about'}>О сайте</Link>
          <AppRouter/>
        </div>
      </div>
    </div>
  );
};

