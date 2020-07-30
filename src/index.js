import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
        <main>
          <App />
        </main>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

