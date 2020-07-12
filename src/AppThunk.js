import React from 'react';
import Users from './thunk/functionalComponents';
import Todos from './thunk/classComponents';
import Notification from './thunk/component/notification';
import './App.scss';

function AppThunk() {
  return (
    <div className="App">
      <Notification />
      <h2 className="title">Thunk</h2>
      <div className="components">
        <Users />
      </div>
      <div className="components">
        <Todos />
      </div>
    </div>
  );
}

export default AppThunk;
