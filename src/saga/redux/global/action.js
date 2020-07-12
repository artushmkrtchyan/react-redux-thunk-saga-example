import {globalTypes} from './type';

export const alertSuccess = (message) => ({
    type: globalTypes.ALERT_SUCCESS,
    message,
});

export const alertError = (error) => ({
    type: globalTypes.ALERT_ERROR,
    message: error,
});