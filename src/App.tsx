import './styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom'
import {MainAsync} from "./pages/MainPage/Main.async";
import {AboutAsync} from "./pages/AboutPage/About.async";
import {Suspense} from "react";
import {useTheme} from "./theme/useTheme";


export const App = () => {
  const {theme, switchTheme} = useTheme()
  return (
    <div className={`app ${theme}`}>
      <button onClick={switchTheme}>Switch theme</button>
      <Link to={'/'}>На главную</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path={'/'} element={<MainAsync/>}/>
          <Route path={'/about'} element={<AboutAsync/>}/>
        </Routes>
      </Suspense>

    </div>
  );
};

