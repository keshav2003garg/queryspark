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
        question: 'Give a short and crisp title of given data',
    });
    title = title.data.response.text
        .replace(/[^a-zA-Z\s]/g, '')
        .replace(/^\s+|\s+$/g, '');
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
