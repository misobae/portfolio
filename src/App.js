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

const App = () => {
  const location = useLocation();
  const [isLight, setIsLight] = useRecoilState(lightState);

  useEffect(() => {
    if (location.pathname === '/' && !isLight) {
      setIsLight(1);
    } else if (location.pathname !== '/' && isLight) {
      setIsLight(0);
    }
  }, [location.pathname, setIsLight, isLight]);

  return (
    <>
      <AnimatePresence mode="wait">   
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/experience" element={ <Experience /> } />
        </Routes>
      </AnimatePresence>

      <Suspense>
        <Scene />
      </Suspense>
    </>
  );
};

export default App;