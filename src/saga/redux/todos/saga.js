import {put, call, takeLatest, select} from 'redux-saga/effects';
import * as service from '../../../service';
import {getTodosSuccess, getTodosFailure, setTodoSuccess} from './action';
import {alertSuccess} from '../global/action';
import {todoTypes} from './type';
import {getTodos} from './selectors';
import {delay} from '../../../helpers/helpers';

export function* getTodoList(params) {
    const {start, limit} = params
    try {
        yield delay(1000);
        const data = yield call(() => {
            return service.getTodos(start, limit)
        });
        yield put(getTodosSuccess(data));
    } catch (e) {
        yield put(getTodosFailure(e.message));
    }
};

export function* editTodo(params) {
    const {payload} = params;
    console.log("payload: ", payload)
    try {
        yield delay(100);
        const data =yield select(getTodos)
        const todos = data.map((item) => {
            if(item.id === payload.id) {
                item.completed = !!payload.done
            }
            return item
        })
        yield put(setTodoSuccess(todos));
        yield put(alertSuccess("Updated successfully"));
    } catch (e) {
        yield put(getTodosFailure(e.message));
    }
};

export function* deleteTodo(params) {
    const {id} = params
    try {
        yield delay(100);
        const data =yield select(getTodos)
        const todos = data.filter(item => item.id !== id)
        yield put(setTodoSuccess(todos));
        yield put(alertSuccess("Deleted successfully"));
    } catch (e) {
        yield put(getTodosFailure(e.message));
    }
}

export function* todosSaga() {
    yield takeLatest(todoTypes.GET_TODOS_START, getTodoList);
    yield takeLatest(todoTypes.EDIT_TODO_START, editTodo);
    yield takeLatest(todoTypes.DELETE_TODO_START, deleteTodo);
}

export default todosSaga;