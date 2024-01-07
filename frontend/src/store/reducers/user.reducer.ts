import {
    GOOGLE_SIGN_IN,
    GITHUB_SIGN_IN,
    GOOGLE_SIGN_OUT,
} from 'store/constants/auth.constant';

interface UserAction {
    type: string;
    payload: any;
}

const initialState = {
    isAuthenticated: false,
    user: null,
};

const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case GOOGLE_SIGN_IN:
        case GITHUB_SIGN_IN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };
        case GOOGLE_SIGN_OUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };

        default:
            return state;
    }
};

export default userReducer;
