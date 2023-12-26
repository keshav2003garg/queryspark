import {
    CLEAR_MESSAGES,
    CLEAR_WARNINGS,
    CLEAR_ERRORS,
} from 'store/constants/clear.constant';

import type { Dispatch } from '@reduxjs/toolkit';

export const clearMessages = () => (dispatch: Dispatch) => {
    dispatch({
        type: CLEAR_MESSAGES,
    });
};

export const clearWarnings = () => (dispatch: Dispatch) => {
    dispatch({
        type: CLEAR_WARNINGS,
    });
};

export const clearErrors = () => (dispatch: Dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};
