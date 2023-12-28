import { Client, Account, Databases, Storage } from 'appwrite';
import Config from 'react-native-config';

const appwrite = new Client()
    .setEndpoint(Config.APPWRITE_ENDPOINT as string)
    .setProject(Config.APPWRITE_PROJECT_ID as string);
const account = new Account(appwrite);
const database = new Databases(appwrite);
const storage = new Storage(appwrite);

export { account, database, storage };
export default appwrite;
