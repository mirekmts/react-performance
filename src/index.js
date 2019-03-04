import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducer";

import './index.css';

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update')
  whyDidYouUpdate(React)
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
