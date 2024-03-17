import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";

import App from './App';

import { GlobalStyle } from './styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <HelmetProvider>
          <GlobalStyle />
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);