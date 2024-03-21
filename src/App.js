import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import MetaTag from './SEOMetaTag';
import { useRecoilState } from 'recoil';
import { lightState } from './state/atoms';
import { AnimatePresence } from "framer-motion";

import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import ProjectDetail from './routes/ProjectDetail';
import Experience from "./routes/Experience";
import NotFound from './routes/NotFound';

import NavFooter from './components/Nav/NavFooter';
import NavHeader from './components/Nav/NavHeader';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';


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
      <MetaTag
        title="misobae" 
        description="FrontEnd Developer Miso&#x27;s Web" 
        keywords="portfolio, FrontEnd"
        imgsrc={`https://misobae.github.io/portfolio/meta-img.jpg`}
        url="https://misobae.github.io/portfolio/" 
      />

      {isHome ? <NavFooter/> : <NavHeader/>}

      <Loading />

      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/experience" element={ <Experience /> } />
          <Route path="/*" element={ <NotFound /> } />
        </Routes>
      </AnimatePresence>

      {isHome ? null : <Footer/>}
    </>
  );
};

export default App;