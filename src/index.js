import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import {NavContextProvider} from './NavContext'

ReactDOM.render(
    <NavContextProvider>
      <App />
    </NavContextProvider>
  ,
  document.getElementById('root')
);


