import {
    GOOGLE_SIGN_IN__REQUEST,
    GOOGLE_SIGN_IN__SUCCESS,
    GOOGLE_SIGN_IN__FAILURE,
    GOOGLE_SIGN_OUT__REQUEST,
    GOOGLE_SIGN_OUT__SUCCESS,
    GOOGLE_SIGN_OUT__FAILURE,
} from 'constants/auth.constant';
import { CLEAR_MESSAGES, CLEAR_ERRORS } from 'constants/clear.constant';

const initialState = {
    isAuthenticated: false,
    user: null,
    message: null,
    loading: false,
    error: null,
};

interface UserAction {
    type: string;
    payload: any;
}

const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case GOOGLE_SIGN_IN__REQUEST:
        case GOOGLE_SIGN_OUT__REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GOOGLE_SIGN_IN__SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload.user,
                message: action.payload.message,
                error: null,
            };
        case GOOGLE_SIGN_OUT__SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                user: null,
                message: action.payload.message,
                error: null,
            };

        case GOOGLE_SIGN_IN__FAILURE:
        case GOOGLE_SIGN_OUT__FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                error: action.payload,
            };

        case CLEAR_MESSAGES:
            return {
                ...state,
                message: null,
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

export default userReducer;
