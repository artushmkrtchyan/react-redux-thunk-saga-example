import {usersTypes} from './type';
import {globalTypes} from '../global/type';
import {alertError} from '../global/action';
import {fetchUsers, fetchUser} from '../../../service';

const getUsersStart = () => ({
    type: usersTypes.GET_USERS_START,
});

const getUsersSuccess = data => ({
    type: usersTypes.GET_USERS_SUCCESS,
    data
});

const getUsersFailure = error => ({
    type: usersTypes.GET_USERS_FAILURE,
    error
});

const getUserStart = () => ({
    type: usersTypes.GET_USER_START,
});

const getUserSuccess = data => ({
    type: usersTypes.GET_USER_SUCCESS,
    data
});

const getUserFailure = error => ({
    type: usersTypes.GET_USER_FAILURE,
    error
});

export const getUsers = () => {
    return dispatch => {
        dispatch(getUsersStart());
        fetchUsers()
        .then(data => {
            dispatch(getUsersSuccess(data))
        })
        .catch(e => {
            dispatch(getUsersFailure(e))
            dispatch({type: globalTypes.ALERT_ERROR, message: e.message})
        })
    }
};

export const getUser = id => {
    return dispatch => {
        dispatch(getUserStart());
        fetchUser(id)
        .then(data => {
            dispatch(getUserSuccess(data))
        })
        .catch(e => {
            dispatch(getUserFailure(e))
            dispatch(alertError(e.message))
        })
    }
};