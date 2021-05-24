import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {NavContextProvider} from './NavContext'

ReactDOM.render(
    <NavContextProvider>
      <App />
    </NavContextProvider>
  ,
  document.getElementById('root')
);


