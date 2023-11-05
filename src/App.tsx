import { Suspense, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import "./styles/index.scss";
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

const App = () => {
  const {theme, toggleTheme} = useTheme();
  
  return (
    <div className={classNames("app", { hovered: true, selected: false }, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>

      <Link to={"/"}>Main page</Link>
      <Link to={"/about"}>About page</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>

    </div>
  );
};

export default App;
