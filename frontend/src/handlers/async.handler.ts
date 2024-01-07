import {
    sendError,
    sendSuccess,
    sendWarning,
} from 'store/actions/alert.action';
import { loadingEnd } from 'store/actions/loading.action';
import { errorHandler } from 'utils/error.util';

import type { Dispatch } from '@reduxjs/toolkit';
import type { AsyncHandler, AsyncOptions } from './types/async.handler';

const asyncHandler = (fn: Function, options?: AsyncOptions): AsyncHandler => {
    return async (dispatch: Dispatch) => {
        try {
            await Promise.resolve(fn(dispatch));
            if (options?.message) {
                sendSuccess(dispatch, options.message);
            }
            if (options?.warning) {
                sendWarning(dispatch, options.warning);
            }
        } catch (error) {
            loadingEnd(dispatch);
            if (options?.EXCEPTION_HANDLER) {
                dispatch({
                    type: options?.EXCEPTION_HANDLER,
                    payload: error,
                });
            }
            const customError = errorHandler(error as Error);
            sendError(dispatch, customError as Error);
        }
    };
};

export default asyncHandler;
