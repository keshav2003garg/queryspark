import {
    FETCH_CHAT_HISTORY__REQUEST,
    FETCH_CHAT_HISTORY__SUCCESS,
    FETCH_CHAT_HISTORY__FAILURE,
} from 'constants/chat.constant';

interface ChatAction {
    type: string;
    payload: any;
}

const initialState = {
    chats: [],
    loading: false,
    error: null,
};


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
