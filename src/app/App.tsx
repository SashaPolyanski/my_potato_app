import './styles/index.scss'
import {Link} from 'react-router-dom'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "utils/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


export const App = () => {
  const {theme} = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <Link to={'/'}>На главную</Link>
      <Link to={'/about'}>О сайте</Link>
      <AppRouter/>
    </div>
  );
};

