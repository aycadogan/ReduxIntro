import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux'
import {applyMiddleware,createStore} from 'redux'
import logger from 'redux-logger'

import { snackReducer } from './reducer/snackReducer';

const myStore = createStore(snackReducer,applyMiddleware(logger))

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

