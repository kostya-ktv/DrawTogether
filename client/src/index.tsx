import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as RouteProvider } from 'react-router-dom'
import Router from './Router/Router';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouteProvider>
      <Router/>
    </RouteProvider>
  </React.StrictMode>
);

