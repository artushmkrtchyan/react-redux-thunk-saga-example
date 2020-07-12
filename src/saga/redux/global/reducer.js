import {globalTypes} from './type';

const initialState = {
    message: '',
    status: ''
}

export function global(state = initialState, action) {
    switch (action.type) {
      case globalTypes.ALERT_SUCCESS: 
        return {...state, message: action.message, status: 'success'};
      case globalTypes.ALERT_ERROR:
        return {...state, message: action.message, status: 'error'};
      default:
        return state
    }
}