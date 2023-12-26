import { ERROR_HANDLER } from 'store/constants/error.constant';
import { CLEAR_ERRORS } from 'store/constants/clear.constant';

interface ErrorAction {
    type: string;
    payload: Error;
}

const initialState = {
    error: null,
};

const errorReducer = (state = initialState, action: ErrorAction) => {
    switch (action.type) {
        case ERROR_HANDLER:
            return {
                ...state,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};

export default errorReducer;
