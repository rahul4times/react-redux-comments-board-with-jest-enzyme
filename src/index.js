import React from 'react';
import reactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import configureStore from './redux/configureStore';
import defaultState from './redux/defaultState';
import './css/main.css';

const store = configureStore(defaultState);

reactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));
