// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css'; // Import global styles
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure app performance by sending metrics to an analytics endpoint
reportWebVitals(console.log);
