import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducerFileOne from './reducers/reducerFileOne';
//in index.js we import essential files:
//React, ReactDOM, App, Provider, createStore and reducer(s)
//note how we import reducer

const store = createStore(reducerFileOne)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
