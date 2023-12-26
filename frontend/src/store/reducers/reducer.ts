import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './user.reducer';
import chatReducer from './chat.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    chat: chatReducer,
});

export default rootReducer;
