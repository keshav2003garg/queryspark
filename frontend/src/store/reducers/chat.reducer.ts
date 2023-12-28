import {
    FETCH_CHAT_HISTORY__REQUEST,
    FETCH_CHAT_HISTORY__SUCCESS,
    FETCH_CHAT_HISTORY__FAILURE,
    CREATE_CHAT__REQUEST,
    CREATE_CHAT__SUCCESS,
    CREATE_CHAT__FAILURE,
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
        case CREATE_CHAT__REQUEST:
            return {
                ...state,
            };

        case FETCH_CHAT_HISTORY__SUCCESS:
            return {
                ...state,
                pulseLoading: false,
                chats: action.payload,
            };
        case CREATE_CHAT__SUCCESS:
            return {
                ...state,
                chats: [...state.chats, action.payload],
            };

        case FETCH_CHAT_HISTORY__FAILURE:
            return {
                ...state,
                pulseLoading: false,
            };
        case CREATE_CHAT__FAILURE:
            return {
                ...state,
            };

        default:
            return state;
    }
};

export default chatReducer;
