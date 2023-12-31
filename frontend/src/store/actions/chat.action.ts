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
    ADD_USER_MESSAGE_TO_CHAT,
    SEND_MESSAGE__REQUEST,
    SEND_MESSAGE__SUCCESS,
    SEND_MESSAGE__FAILURE,
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
            const message = await database.createDocument(
                Config.APPWRITE_DATABASE_ID as string,
                Config.APPWRITE_MESSAGES_COLLECTION_ID as string,
                ID.unique(),
                {
                    sender: 'AI',
                    message: 'Hello, I am QuerySpark your PDF Assistant!',
                    timestamp: new Date(Date.now()).toDateString(),
                },
            );
            const document = await database.createDocument(
                Config.APPWRITE_DATABASE_ID as string,
                Config.APPWRITE_CHATS_COLLECTION_ID as string,
                ID.unique(),
                {
                    user: userID,
                    title: 'title',
                    description: 'description',
                    pdfs: [url],
                    messages: [message.$id],
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

    export const sendMessage = (chatID: string, message: string) =>
    asyncHandler(
        async (dispatch: Dispatch) => {
            dispatch({
                type: ADD_USER_MESSAGE_TO_CHAT,
                payload: {
                    chatID,
                    message: {
                        sender: 'USER',
                        message,
                        timestamp: new Date().toString(),
                    },
                },
            });
            dispatch({
                type: SEND_MESSAGE__REQUEST,
            });
            const userMessage = await database.createDocument(
                Config.APPWRITE_DATABASE_ID as string,
                Config.APPWRITE_MESSAGES_COLLECTION_ID as string,
                ID.unique(),
                {
                    sender: 'USER',
                    message,
                    timestamp: new Date(Date.now()).toString(),
                },
            );
            const currentChat = await database.getDocument(
                Config.APPWRITE_DATABASE_ID as string,
                Config.APPWRITE_CHATS_COLLECTION_ID as string,
                chatID,
            );
            await database.updateDocument(
                Config.APPWRITE_DATABASE_ID as string,
                Config.APPWRITE_CHATS_COLLECTION_ID as string,
                chatID,
                {
                    messages: [...currentChat.messages, userMessage.$id],
                },
            );
            const {data} = await axios.post(
                `${Config.BACKEND_ENDPOINT}/chat`,
                {
                    nameSpace: chatID,
                    streaming: false,
                    question: message,
                },
            );
            const aiResponse = data.response.text;
            const aiMessage = await database.createDocument(
                Config.APPWRITE_DATABASE_ID as string,
                Config.APPWRITE_MESSAGES_COLLECTION_ID as string,
                ID.unique(),
                {
                    sender: 'AI',
                    message: aiResponse,
                    timestamp: new Date(Date.now()).toString(),
                },
            );
            const chatAfterUserMessage = await database.getDocument(
                Config.APPWRITE_DATABASE_ID as string,
                Config.APPWRITE_CHATS_COLLECTION_ID as string,
                chatID,
            );
            await database.updateDocument(
                Config.APPWRITE_DATABASE_ID as string,
                Config.APPWRITE_CHATS_COLLECTION_ID as string,
                chatID,
                {
                    messages: [...chatAfterUserMessage.messages, aiMessage.$id],
                },
            );
            dispatch({
                type: SEND_MESSAGE__SUCCESS,
                payload: {
                    chatID,
                    message: {
                        sender: aiMessage.sender,
                        message: aiMessage.message,
                        timestamp: aiMessage.timestamp,
                    },
                },
            });
        },
        {
            EXCEPTION_HANDLER: SEND_MESSAGE__FAILURE,
        },
    );
