import {globalTypes} from './type';

export const alertSuccess = (message) => ({
    type: globalTypes.ALERT_SUCCESS,
    message,
});

export const alertError = (message) => ({
    type: globalTypes.ALERT_ERROR,
    message
});

// export const alertSuccess = (message) => {
//     return dispatch => {
//         dispatch({type: globalTypes.ALERT_SUCCESS, message})
//     }
// };

// export const alertError = (message) => {
//     console.log("errr")
//     return dispatch => {
//         dispatch({type: globalTypes.ALERT_ERROR, message})
//     }
// };