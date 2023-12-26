import { CLEAR_MESSAGES, CLEAR_ERRORS } from 'constants/clear.constant';

import type { Dispatch } from '@reduxjs/toolkit';

export const clearErrors = () => (dispatch: Dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};

export const clearMessages = () => (dispatch: Dispatch) => {
    dispatch({
        type: CLEAR_MESSAGES,
    });
};
