import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './user.reducer';
import chatReducer from './chat.reducer';
import alertReducer from './alert.reducer';
import loadingReducer from './loading.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    chat: chatReducer,
    alert: alertReducer,
    loading: loadingReducer,
});

export default rootReducer;
