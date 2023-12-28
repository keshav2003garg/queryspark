import axios from 'axios';
import { ID, Query } from 'appwrite';
import Config from 'react-native-config';

import { database } from 'lib/appwrite';
import asyncHandler from 'utils/async.handler';
import {
    FETCH_CHAT_HISTORY__REQUEST,
    FETCH_CHAT_HISTORY__SUCCESS,
    FETCH_CHAT_HISTORY__FAILURE,
    CREATE_CHAT__REQUEST,
    CREATE_CHAT__SUCCESS,
    CREATE_CHAT__FAILURE,
} from 'store/constants/chat.constant';
import { setTitleAndDescription } from 'store/services/setTitleAndDescription';

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

export const createChat = (userID: string, url: string, callback: Function) =>
    asyncHandler(
        async (dispatch: Dispatch) => {
            dispatch({
                type: CREATE_CHAT__REQUEST,
            });
            const document = await database.createDocument(
                Config.APPWRITE_DATABASE_ID as string,
                Config.APPWRITE_CHATS_COLLECTION_ID as string,
                ID.unique(),
                {
                    user: userID,
                    title: 'title',
                    description: 'description',
                    pdfs: [url],
                },
            );
            await axios.post(`${Config.BACKEND_ENDPOINT}/add-data`, {
                url,
                nameSpace: document.$id,
            });
            const { title, description } = await setTitleAndDescription(
                document.$id,
            );
            const data = {
                chatID: document.$id,
                title,
                description,
                pdfs: document.pdfs,
            };
            dispatch({
                type: CREATE_CHAT__SUCCESS,
                payload: data,
            });
            callback();
        },
        {
            EXCEPTION_HANDLER: CREATE_CHAT__FAILURE,
        },
    );
