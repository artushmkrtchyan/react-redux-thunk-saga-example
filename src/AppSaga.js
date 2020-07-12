import React from 'react';
import Users from './saga/functionalComponents';
import Todos from './saga/classComponents';
import Notification from './saga/component/notification';
import './App.scss';

function AppSaga() {
  return (
    <div className="App">
      <Notification />
      <h2 className="title">Saga</h2>
      <div className="components">
        <Users />
      </div>
      <div className="components">
        <Todos />
      </div>
    </div>
  );
}

export default AppSaga;
