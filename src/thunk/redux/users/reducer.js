import {usersTypes} from './type';

const initialState = {
    users: [],
    user: {},
    error: '',
    isLoading: false
}

export const users = (state = initialState, action) => {
    switch (action.type) {
        case usersTypes.GET_USERS_START:
            return {...state, isLoading: true}
        case usersTypes.GET_USERS_SUCCESS:
            return {...state, users: action.data, isLoading: false}
        case usersTypes.GET_USERS_FAILURE:
            return {...state, users: [], isLoading: false}
        case usersTypes.GET_USER_START:
            return {...state, isLoadingUser: true}
        case usersTypes.GET_USER_SUCCESS:
            return {...state, user: action.data, isLoadingUser: false}
        case usersTypes.GET_USER_FAILURE:
            return {...state, users: [], isLoadingUser: false}
        default:
            return state
    }
}