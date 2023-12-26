import { Client, Account, Databases } from 'appwrite';
import Config from 'react-native-config';

const appwrite = new Client()
    .setEndpoint(Config.APPWRITE_ENDPOINT as string)
    .setProject(Config.APPWRITE_PROJECT_ID as string);
const account = new Account(appwrite);
const database = new Databases(appwrite);

export { account, database };
export default appwrite;
