import './index.scss'
import {Link, Route, Routes} from 'react-router-dom'
import {MainAsync} from "./pages/MainPage/Main.async";
import {AboutAsync} from "./pages/AboutPage/About.async";
import {Suspense} from "react";

export const App = () => {
  return (
    <div className='app'>
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

