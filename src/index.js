import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AnthropProvider } from './context/Context';

ReactDOM.render(
  <React.StrictMode>
    <AnthropProvider>
       <App />
    </AnthropProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

