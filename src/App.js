import React, { Suspense, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { lightState } from './state/atoms';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Experience from "./routes/Experience";

import Scene from "./components/Scene/Scene";
import NavFooter from './components/Nav/NavFooter';
import NavHeader from './components/Nav/NavHeader';
import ProjectDetail from './routes/ProjectDetail';

const App = () => {
  const location = useLocation();
  const [isHome, setIsHome] = useRecoilState(lightState);
  
  useEffect(() => {
    if (location.pathname === '/' && !isHome) {
      setIsHome(1);
    } else if (location.pathname !== '/' && isHome) {
      setIsHome(0);
    }
  }, [location.pathname, setIsHome, isHome]);

  return (
    <>
      {isHome ? <NavFooter/> : <NavHeader/>}

      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/experience" element={ <Experience /> } />
        </Routes>
      </AnimatePresence>

      <Suspense fallback={<div>loading...</div>}>
        <Scene />
      </Suspense>
    </>
  );
};

export default App;