import { ERROR_HANDLER } from 'store/constants/error.constant';

import type { Dispatch } from '@reduxjs/toolkit';

const asyncHandler = (fn: Function, EXCEPTION_HANDLER: string) => {
    return async (dispatch: Dispatch) => {
        try {
            return await Promise.resolve(fn(dispatch));
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
