import React from 'react';
import ReactDOM from 'react-dom/client';
import { Bootstrap } from './components/bootstrap/Bootstrap';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Bootstrap />
  </React.StrictMode>
);
