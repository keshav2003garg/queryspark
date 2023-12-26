import {
    SUCCESS_HANDLER,
    WARNING_HANDLER,
    ERROR_HANDLER,
} from 'store/constants/alert.constant';

import type { Dispatch } from '@reduxjs/toolkit';

const asyncHandler = (
    fn: Function,
    EXCEPTION_HANDLER: string,
    message?: string,
    warning?: string,
) => {
    return async (dispatch: Dispatch) => {
        try {
            await Promise.resolve(fn(dispatch));
            if (message) {
                dispatch({
                    type: SUCCESS_HANDLER,
                    payload: message,
                });
            }
            if (warning) {
                dispatch({
                    type: WARNING_HANDLER,
                    payload: warning,
                });
            }
        } catch (error) {
            dispatch({
                type: EXCEPTION_HANDLER,
                payload: error,
            });
            dispatch({
                type: ERROR_HANDLER,
                payload: error,
            });
        }
    };
};

export default asyncHandler;
