import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './user.reducer';
import chatReducer from './chat.reducer';
import alertReducer from './alert.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    chat: chatReducer,
    alert: alertReducer,
});

export default rootReducer;
