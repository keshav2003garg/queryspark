import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import LottieView from 'lottie-react-native';

import { useAppSelector, useAppDispatch } from 'hooks/redux.hooks';
import { uploadPDF } from '../services/upload.service';

interface UploadFilesProps {
    setUpload: Function;
}

const UploadFiles: React.FC<UploadFilesProps> = ({ setUpload }) => {
    const { user } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    return (
        <View className='flex-1'>
            <LottieView
                style={{ flex: 1 }}
                source={require('assets/animations/upload.json')}
                autoPlay={true}
            />
            <View className='flex-1 flex-col items-center'>
                <Text className='text-[#989898] font-[Poppins-Medium] text-4xl '>
                    Upload your files
                </Text>
                <Text className='mt-4 text-[#636363] text-base text-center leading-5 font-[Poppins-Medium]'>
                    Browse and choose any PDF files {'\n'} you want to upload
                </Text>
                <Text className='mt-9 text-base text-slate-500 font-[Poppins-Medium]'>
                    Max File Size (20MB)
                </Text>
                <TouchableNativeFeedback
                    onPress={() => {
                        dispatch(uploadPDF(user.userID, setUpload));
                    }}>
                    <View className='m-4 p-3 bg-[#151515] rounded-md border-[#DEDEDE] border-[0.5px] flex-row justify-between items-center'>
                        <LottieView
                            style={{ height: 50, width: 50 }}
                            source={require('assets/animations/gallery.json')}
                            autoPlay={true}
                            loop={false}
                        />
                        <View>
                            <Text className='ml-3 text-[#989898] text-xl font-[Poppins-Regular]'>
                                Select from Gallery
                            </Text>
                            <Text className='text-[#636363] text-xs text-center leading-4 font-[Poppins-Regular]'>
                                Only PDF files
                            </Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    );
};

export default UploadFiles;
