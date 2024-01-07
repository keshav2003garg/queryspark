import {
    SUCCESS_HANDLER,
    WARNING_HANDLER,
    ERROR_HANDLER,
} from 'store/constants/alert.constant';

import type { Dispatch } from '@reduxjs/toolkit';

export const sendSuccess = (dispatch: Dispatch, message: string) => {
    dispatch({
        type: SUCCESS_HANDLER,
        payload: message,
    });
};
export const sendDSuccess = (message: string) => (dispatch: Dispatch) => {
    dispatch({
        type: SUCCESS_HANDLER,
        payload: message,
    });
};

export const sendWarning = (dispatch: Dispatch, message: string) => {
    dispatch({
        type: WARNING_HANDLER,
        payload: message,
    });
};
export const sendDWarning = (message: string) => (dispatch: Dispatch) => {
    dispatch({
        type: WARNING_HANDLER,
        payload: message,
    });
};

export const sendError = (dispatch: Dispatch, error: Error) => {
    dispatch({
        type: ERROR_HANDLER,
        payload: error,
    });
};
export const sendDError = (error: Error) => (dispatch: Dispatch) => {
    dispatch({
        type: ERROR_HANDLER,
        payload: error,
    });
};
