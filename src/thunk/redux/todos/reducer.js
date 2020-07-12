import {todoTypes} from './type';

const initialState = {
    loading: false,
    data: [],
    error: "",
}

export function todos(state = initialState, action) {
    switch (action.type) {
      case todoTypes.GET_TODOS_START:
      case todoTypes.EDIT_TODO_START: 
      case todoTypes.DELETE_TODO_START: 
        return {...state, loading: true};
      case todoTypes.GET_TODOS_SUCCESS:
        return {...state, data: [...state.data, ...action.data], loading: false};
      case todoTypes.GET_TODOS_FAILURE:
        return {...state, error: action.error, data: [], loading: false};
      case todoTypes.SET_TODO_SUCCESS:
        return {...state, data: action.data, loading: false};
      default:
        return state
    }
}