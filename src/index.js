import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";

import App from './App';
import { GlobalStyle } from './styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <GlobalStyle />
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);