import { Client } from 'appwrite';
import Config from 'react-native-config';

const appwrite = new Client()
    .setEndpoint(Config.APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
    .setProject(Config.APPWRITE_PROJECT_ID || '');

export default appwrite;
