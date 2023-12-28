import storage from '@react-native-firebase/storage';
import DocumentPicker, {
    DocumentPickerResponse,
} from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';

import asyncHandler from 'utils/async.handler';

import type { UploadState } from '../types/uploadState';

export const uploadPDF = (userID: string, setUpload: Function) =>
    asyncHandler(async () => {
        const fileData: Array<DocumentPickerResponse> =
            await DocumentPicker.pick({
                allowMultiSelection: true,
                type: [DocumentPicker.types.pdf],
            });
        const file = await RNFetchBlob.fs.readFile(fileData[0].uri, 'base64');
        const bucket = storage()
            .ref(`${userID}/${fileData[0].name}`)
            .putString(file, 'base64', {
                contentType: fileData[0].type,
            });
        bucket.on(
            'state_changed',
            ({ bytesTransferred, totalBytes }) => {
                const progress = bytesTransferred / totalBytes;
                setUpload((prevState: UploadState) => ({
                    ...prevState,
                    uploading: true,
                    progress,
                }));
            },
            () => {},
            () => {
                setUpload((prevState: UploadState) => ({
                    ...prevState,
                    uploading: false,
                    uploaded: true,
                }));
            },
        );
    }, {});
