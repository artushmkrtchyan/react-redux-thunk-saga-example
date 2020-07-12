import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import axios from 'axios';
import {store} from './thunk/store'
import {configureStore} from './saga/store/configure-store';
import AppThunk from './AppThunk';
import AppSaga from './AppSaga';
import {globalTypes} from './saga/redux/global/type';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

const storeSaga = configureStore();

axios.interceptors.response.use(response => response, function(err) {
  if(err.response && err.response.status === 401) {
      storeSaga.dispatch({type: globalTypes.ALERT_ERROR, message: "Authorized"});
  }
  storeSaga.dispatch({type: globalTypes.ALERT_ERROR, message: err.message});
  return Promise.reject(err);
});

ReactDOM.render(
  <Provider store = {store}>
    <AppThunk />
  </Provider>,
  document.getElementById('root-thunk')
);


ReactDOM.render(
  <Provider store={storeSaga}>
    <AppSaga />
  </Provider>,
  document.getElementById('root-saga')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
