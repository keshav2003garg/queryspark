import {
    SUCCESS_HANDLER,
    WARNING_HANDLER,
    ERROR_HANDLER,
} from 'store/constants/alert.constant';
import {
    CLEAR_MESSAGES,
    CLEAR_WARNINGS,
    CLEAR_ERRORS,
} from 'store/constants/clear.constant';

interface AlertAction {
    type: string;
    payload: any;
}

const initialState = {
    message: null,
    warning: null,
    error: null,
};

const alertReducer = (state = initialState, action: AlertAction) => {
    switch (action.type) {
        case SUCCESS_HANDLER:
            return {
                ...state,
                message: action.payload,
            };
        case WARNING_HANDLER:
            return {
                ...state,
                warning: action.payload,
            };
        case ERROR_HANDLER:
            return {
                ...state,
                error: action.payload,
            };


        case CLEAR_MESSAGES:
            return {
                ...state,
                message: null,
            };
        case CLEAR_WARNINGS:
            return {
                ...state,
                warning: null,
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

export default alertReducer;
