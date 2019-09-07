import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import projectx from './Reducers/index';
import Route from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(projectx);

ReactDOM.render( 
  <Provider store={store}>
    <Route />
  </Provider>, 
  document.getElementById('root'))
;