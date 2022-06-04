import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


import App from './App';
import CoordinatorPage from './CoordinatorPage';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <CoordinatorPage />
  </StrictMode>
);
