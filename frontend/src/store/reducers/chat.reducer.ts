import {
    FETCH_CHAT_HISTORY__REQUEST,
    FETCH_CHAT_HISTORY__SUCCESS,
    FETCH_CHAT_HISTORY__FAILURE,
} from 'store/constants/chat.constant';

interface ChatAction {
    type: string;
    payload: any;
}

const initialState = {
    chats: [],
    loading: false,
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
            };

        case FETCH_CHAT_HISTORY__FAILURE:
            return {
                ...state,
                loading: false,
            };

        default:
            return state;
    }
};

export default chatReducer;
