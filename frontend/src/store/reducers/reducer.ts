import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './user.reducer';
import chatReducer from './chat.reducer';
import errorReducer from './error.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    chat: chatReducer,
    error: errorReducer,
});

export default rootReducer;
