import {usersTypes} from './type';

export const getUsersStart = () => ({
    type: usersTypes.GET_USERS_START,
});

export const getUsersSuccess = (data) => ({
    type: usersTypes.GET_USERS_SUCCESS,
    data
});

export const getUsersFailure = (error) => ({
    type: usersTypes.GET_USERS_FAILURE,
    error
});

export const getUserStart = (userId) => ({
    type: usersTypes.GET_USER_START,
    userId
});

export const getUserSuccess = (data) => ({
    type: usersTypes.GET_USER_SUCCESS,
    data
});

export const getUserFailure = (error) => ({
    type: usersTypes.GET_USER_FAILURE,
    error
});