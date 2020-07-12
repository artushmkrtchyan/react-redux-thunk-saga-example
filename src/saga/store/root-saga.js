import {all, spawn} from "redux-saga/effects";
import {todosSaga} from '../redux/todos/saga';
import {usersSaga} from '../redux/users/saga'

export default function* rootSaga() {
    yield all([
        spawn(todosSaga),
        spawn(usersSaga)
    ]);
}
