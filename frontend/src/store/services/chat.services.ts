import axios from 'axios';
import { database } from 'lib/appwrite';
import Config from 'react-native-config';

export const setTitleAndDescription = async (chatID: string) => {
    let description = await axios.post(`${Config.BACKEND_ENDPOINT}/chat`, {
        nameSpace: chatID,
        streaming: false,
        question:
            'Give a brief description of given data. Try to give a response like : This chat describes about ....',
    });
    let title = await axios.post(`${Config.BACKEND_ENDPOINT}/chat`, {
        nameSpace: chatID,
        streaming: false,
        question:
            'Give a short & crisp title of given data. Try to give only title in the response. Don;t include "Title: " something thing',
    });
    title = title.data.response.text.replace('Title: ', '');
    description = description.data.response.text;
    await database.updateDocument(
        Config.APPWRITE_DATABASE_ID as string,
        Config.APPWRITE_CHATS_COLLECTION_ID as string,
        chatID,
        {
            title,
            description,
        },
    );
    return {
        title,
        description,
    };
};

interface Messages {
    message: string;
    sender: string;
    timestamp: string;
}

export const createChatHistory = (messages: Messages[]) => {
    let chatHistory = '';
    messages.forEach((message) => {
        chatHistory += `${message.sender}: ${message.message}\n`;
    });
    return chatHistory;
};
