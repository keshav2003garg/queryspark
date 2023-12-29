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
            const res = await database.listDocuments(
                Config.APPWRITE_DATABASE_ID as string,
                Config.APPWRITE_CHATS_COLLECTION_ID as string,
                [Query.equal('user', userID)],
            );
            const document = res.documents;
            let data = [];
            for (let i = 0; i < document.length; i++) {
                let messages = [];
                for (let j = 0; j < document[i].messages.length; j++) {
                    messages.push({
                        sender: document[i].messages[j].sender,
                        message: document[i].messages[j].message,
                        timestamp: document[i].messages[j].timestamp,
                    });
                }
                data.push({
                    chatID: document[i].$id,
                    title: document[i].title,
                    description: document[i].description,
                    pdfs: document[i].pdfs,
                    messages: messages,
                });
            }
            dispatch({
                type: FETCH_CHAT_HISTORY__SUCCESS,
                payload: data,
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
            const message = await database.createDocument(
                Config.APPWRITE_DATABASE_ID as string,
                '658f2861edfb95e666fe',
                document.$id,
                {
                    sender: 'AI',
                    message: 'Hello, I am QuerySpark your PDF Assistant!',
                    timestamp: Date.now(),
                },
            );
            const { title, description } = await setTitleAndDescription(
                document.$id,
                message.$id,
            );
            const data = {
                chatID: document.$id,
                title,
                description,
                pdfs: document.pdfs,
                messages: [
                    {
                        sender: message.sender,
                        message: message.message,
                        timestamp: message.timestamp,
                    },
                ],
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
