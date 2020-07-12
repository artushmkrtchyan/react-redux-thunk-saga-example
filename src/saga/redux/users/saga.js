import {put, call, takeLatest} from 'redux-saga/effects';
import * as service from '../../../service';
import {getUsersSuccess, getUsersFailure, getUserSuccess, getUserFailure} from './action';
import {usersTypes} from './type';
import {delay} from '../../../helpers/helpers';

export function* getUsersData() {
    try {
        yield delay(500);
        const data = yield call(() => {
            return service.getUsers()
        });
        yield put(getUsersSuccess(data));
    } catch (e) {
        yield put(getUsersFailure(e.message));
    }
};

export function* getUserData({userId}) {
    try {
        yield delay(1200);
        const data = yield call(() => {
            return service.getUser(userId)
        });
        yield put(getUserSuccess(data));
    } catch (e) {
        yield put(getUserFailure(e.message));
    }
};

export function* usersSaga() {
    yield takeLatest(usersTypes.GET_USERS_START, getUsersData);
    yield takeLatest(usersTypes.GET_USER_START, getUserData);
}

export default usersSaga;