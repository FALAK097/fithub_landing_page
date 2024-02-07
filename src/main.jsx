import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import assets from './assets/index.js';

// Set the favicon dynamically
document.querySelector("link[rel~='icon']").href = assets.icon;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
