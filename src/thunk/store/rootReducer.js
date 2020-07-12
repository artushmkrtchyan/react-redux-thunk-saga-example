import { combineReducers } from 'redux';
import {global} from '../redux/global/reducer';
import {todos} from '../redux/todos/reducer';
import {users} from '../redux/users/reducer';

const rootReducer = combineReducers({
    global,
    todos,
    users
});

export default rootReducer;