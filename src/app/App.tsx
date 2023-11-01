import './styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom'
import {Suspense} from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "utils/classNames";
import {AboutPage} from "pages/AboutPage";
import {HomePage} from "pages/HomePage";


export const App = () => {
  const {theme, switchTheme} = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={switchTheme}>Switch theme</button>
      <Link to={'/'}>На главную</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path={'/'} element={<HomePage/>}/>
          <Route path={'/about'} element={<AboutPage/>}/>
        </Routes>
      </Suspense>

    </div>
  );
};

