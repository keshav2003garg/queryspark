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

interface UserAction {
    type: string;
    payload: any;
}

const initialState = {
    isAuthenticated: false,
    loading: false,
    user: null,
};

const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case GOOGLE_SIGN_IN__REQUEST:
        case GITHUB_SIGN_IN__REQUEST:
        case GOOGLE_SIGN_OUT__REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GOOGLE_SIGN_IN__SUCCESS:
        case GITHUB_SIGN_IN__SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload,
            };
        case GOOGLE_SIGN_OUT__SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                user: null,
            };

        case GOOGLE_SIGN_IN__FAILURE:
        case GITHUB_SIGN_IN__FAILURE:
        case GOOGLE_SIGN_OUT__FAILURE:
            return {
                ...state,
                loading: false,
            };

        default:
            return state;
    }
};

export default userReducer;
