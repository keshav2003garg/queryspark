import {
    FETCH_CHAT_HISTORY__REQUEST,
    FETCH_CHAT_HISTORY__SUCCESS,
    FETCH_CHAT_HISTORY__FAILURE,
    CREATE_CHAT__REQUEST,
    CREATE_CHAT__SUCCESS,
    CREATE_CHAT__FAILURE,
    ADD_USER_MESSAGE_TO_CHAT,
    SEND_MESSAGE__REQUEST,
    SEND_MESSAGE__SUCCESS,
    SEND_MESSAGE__FAILURE,
} from 'store/constants/chat.constant';

interface ChatAction {
    type: string;
    payload: any;
}
interface ChatState {
    chatID: string;
    title: string;
    description: string;
    pdfs: string[];
    messages: {
        sender: string;
        message: string;
        timestamp: number;
    }[];
}
[];

const initialState = {
    chats: [],
    pulseLoading: false,
    responseLoading: false,
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
        case ADD_USER_MESSAGE_TO_CHAT:
            return {
                ...state,
                chats: state.chats.map((chat: ChatState) => {
                    if (chat.chatID === action.payload.chatID) {
                        return {
                            ...chat,
                            messages: [
                                ...chat.messages,
                                action.payload.message,
                            ],
                        };
                    }
                    return chat;
                }),
            };
        case SEND_MESSAGE__REQUEST:
            return {
                ...state,
                responseLoading: true,
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
        case SEND_MESSAGE__SUCCESS:
            return {
                ...state,
                responseLoading: false,
                chats: state.chats.map((chat: ChatState) => {
                    if (chat.chatID === action.payload.chatID) {
                        return {
                            ...chat,
                            messages: [
                                ...chat.messages,
                                action.payload.message,
                            ],
                        };
                    }
                    return chat;
                }),
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
        case SEND_MESSAGE__FAILURE:
            return {
                ...state,
                responseLoading: false,
            };

        default:
            return state;
    }
};

export default chatReducer;
