// Your main file

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider'; // Make sure the import path is correct

ReactDOM.render(
  <React.StrictMode>
  <ContextProvider>
    <App />
  </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
