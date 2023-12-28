import React, { useState, useEffect } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ion from 'react-native-vector-icons/Ionicons';

import UploadFiles from './templates/UploadFiles';
import Uploading from './templates/Uploading';
import Uploaded from './templates/Uploaded';

import { useAppDispatch, useAppSelector } from 'hooks/redux.hooks';
import { createChat } from 'store/actions/chat.action';

import type {
    NewScreenNavigationProp,
    UploadScreenProps,
} from 'types/navigation';
import type { UploadState } from './types/uploadState';

const Upload: React.FC<UploadScreenProps> = ({ navigation }) => {
    const nav = useNavigation<NewScreenNavigationProp>();
    const [upload, setUpload] = useState<UploadState>({
        progress: 0,
        uploading: false,
        uploaded: false,
        fileLink: '',
    });
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.user);
    const chatCreated = () => {
        setUpload(() => ({
            progress: 0,
            uploading: false,
            uploaded: false,
            fileLink: '',
        }));
        navigation.navigate('Chating');
    };
    useEffect(() => {
        if (upload.progress === 1 && upload.uploaded === true) {
            dispatch(createChat(user.userID, upload.fileLink, chatCreated));
        }
    }, [upload.progress, upload.uploading, upload.uploaded]);
    return (
        <View className='mt-14 flex-1'>
            <View className='mx-5 flex-row justify-start items-center'>
                <TouchableNativeFeedback
                    onPress={() => {
                        nav.goBack();
                    }}
                    background={TouchableNativeFeedback.Ripple('D0D0D0', true)}>
                    <View>
                        <Ion name='arrow-back' color='#ffffff' size={40} />
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View className='flex-1'>
                {upload.progress === 0 && upload.uploading === false && (
                    <UploadFiles setUpload={setUpload} />
                )}
                {upload.uploading === true && <Uploading upload={upload} />}
                {upload.uploaded === true && <Uploaded />}
            </View>
        </View>
    );
};

export default Upload;
