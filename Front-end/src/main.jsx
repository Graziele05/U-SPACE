import React from 'react';
import { createRoot } from 'react-dom/client';
import MainRoutes from './router';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <MainRoutes />
  </React.StrictMode>
);
