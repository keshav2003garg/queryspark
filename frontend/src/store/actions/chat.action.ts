import { Query } from 'appwrite';
import Config from 'react-native-config';

import { database } from 'lib/appwrite';
import asyncHandler from 'utils/async.handler';
import {
    FETCH_CHAT_HISTORY__REQUEST,
    FETCH_CHAT_HISTORY__SUCCESS,
    FETCH_CHAT_HISTORY__FAILURE,
} from 'store/constants/chat.constant';

import type { Dispatch } from '@reduxjs/toolkit';

export const fetchChatHistory = (userID: string) =>
    asyncHandler(
        async (dispatch: Dispatch) => {
            dispatch({
                type: FETCH_CHAT_HISTORY__REQUEST,
            });
            const document = await database.listDocuments(
                Config.APPWRITE_DATABASE_ID as string,
                Config.APPWRITE_CHATS_COLLECTION_ID as string,
                [Query.equal('user', userID)],
            );
            dispatch({
                type: FETCH_CHAT_HISTORY__SUCCESS,
                payload: document.documents,
            });
        },
        {
            EXCEPTION_HANDLER: FETCH_CHAT_HISTORY__FAILURE,
        },
    );
