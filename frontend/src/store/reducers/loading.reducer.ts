import { LOADING_START, LOADING_END } from 'store/constants/loading.constant';

interface LoadingAction {
    type: string;
    payload: any;
}

const initialState = {
    loading: false,
};

const loadingReducer = (state = initialState, action: LoadingAction) => {
    switch (action.type) {
        case LOADING_START:
            return {
                ...state,
                loading: true,
            };

        case LOADING_END:
            return {
                ...state,
                loading: false,
            };

        default:
            return state;
    }
};

export default loadingReducer;
