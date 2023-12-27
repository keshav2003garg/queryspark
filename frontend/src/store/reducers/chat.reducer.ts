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
    pulseLoading: false,
};

const chatReducer = (state = initialState, action: ChatAction) => {
    switch (action.type) {
        case FETCH_CHAT_HISTORY__REQUEST:
            return {
                ...state,
                pulseLoading: true,
            };

        case FETCH_CHAT_HISTORY__SUCCESS:
            return {
                ...state,
                pulseLoading: false,
                chats: action.payload,
            };

        case FETCH_CHAT_HISTORY__FAILURE:
            return {
                ...state,
                pulseLoading: false,
            };

        default:
            return state;
    }
};

export default chatReducer;
