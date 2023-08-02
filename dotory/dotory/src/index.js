import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './main-page';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';




ReactDOM.render((
  <BrowserRouter>
    <MainPage />
  </BrowserRouter>
), document.getElementById('root'));


reportWebVitals();