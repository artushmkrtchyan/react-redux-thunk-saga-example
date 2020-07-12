import {combineReducers} from "redux";
import {todos} from '../redux/todos/reducer';
import {global} from '../redux/global/reducer';
import {users} from '../redux/users/reducer';

const rootReducer = combineReducers({
    todos,
    global,
    users
});

export default rootReducer;
