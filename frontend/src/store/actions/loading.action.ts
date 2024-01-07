import { LOADING_START, LOADING_END } from 'store/constants/loading.constant';

import type { Dispatch } from '@reduxjs/toolkit';

export const loadingStart = (dispatch: Dispatch) => {
    dispatch({
        type: LOADING_START,
    });
};

export const loadingEnd = (dispatch: Dispatch) => {
    dispatch({
        type: LOADING_END,
    });
};
