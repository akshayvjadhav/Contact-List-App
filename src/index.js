import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CustomContextProvider from './contactContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomContextProvider>
    <App />
    </CustomContextProvider>
  </React.StrictMode>
);

