import {
    GOOGLE_SIGN_IN__REQUEST,
    GOOGLE_SIGN_IN__SUCCESS,
    GOOGLE_SIGN_IN__FAILURE,
    GITHUB_SIGN_IN__REQUEST,
    GITHUB_SIGN_IN__SUCCESS,
    GITHUB_SIGN_IN__FAILURE,
    GOOGLE_SIGN_OUT__REQUEST,
    GOOGLE_SIGN_OUT__SUCCESS,
    GOOGLE_SIGN_OUT__FAILURE,
} from 'store/constants/auth.constant';
import { CLEAR_MESSAGES } from 'store/constants/clear.constant';

interface UserAction {
    type: string;
    payload: any;
}

const initialState = {
    isAuthenticated: false,
    user: null,
    message: null,
    loading: false,
};

const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case GOOGLE_SIGN_IN__REQUEST:
        case GOOGLE_SIGN_OUT__REQUEST:
        case GITHUB_SIGN_IN__REQUEST:
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
            };
        case GOOGLE_SIGN_OUT__SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                user: null,
                message: action.payload.message,
            };
        case GITHUB_SIGN_IN__SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload.user,
                message: action.payload.message,
            };

        case GOOGLE_SIGN_IN__FAILURE:
        case GOOGLE_SIGN_OUT__FAILURE:
        case GITHUB_SIGN_IN__FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
            };

        case CLEAR_MESSAGES:
            return {
                ...state,
                message: null,
            };
        default:
            return state;
    }
};

export default userReducer;
