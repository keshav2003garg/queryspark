import {
    FETCH_CHAT_HISTORY__REQUEST,
    FETCH_CHAT_HISTORY__SUCCESS,
    FETCH_CHAT_HISTORY__FAILURE,
} from 'constants/chat.constant';

const initialState = {
    chats: [],
    loading: false,
    error: null,
};

interface ChatAction {
    type: string;
    payload: any;
}

const chatReducer = (state = initialState, action: ChatAction) => {
    switch (action.type) {
        case FETCH_CHAT_HISTORY__REQUEST:
            return {
                ...state,
                loading: true,
            };

        case FETCH_CHAT_HISTORY__SUCCESS:
            return {
                ...state,
                loading: false,
                chats: action.payload,
                error: null,
            };

        case FETCH_CHAT_HISTORY__FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default chatReducer;
