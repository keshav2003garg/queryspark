import React from 'react';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons';

const Upload: React.FC = ({}) => {
    return (
        <View className='flex-1'>
            <View className='mt-14 mx-5 flex-row justify-start items-center'>
                <Ion name='arrow-back' color='#ffffff' size={30} />
                <Text className='ml-4 text-2xl text-white font-[Poppins-Medium]'>
                    New Chat
                </Text>
            </View>
            <View className='mt-14 flex justify-center items-center'>
                <Image
                    className='w-96 h-96 rounded-2xl'
                    source={require('../../../../assets/icons/upload.png')}
                />
                <View className='mt-5 flex-col items-center'>
                    <Text className='mt-5 text-3xl text-[#f79a11] font-semibold'>
                        Upload your files
                    </Text>
                    <Text className='mt-4 text-base text-center text-[#E9A541] font-[Poppins-Medium]'>
                        Browse and choose the files {'\n'} you want to upload
                    </Text>
                    <Text className='mt-9 text-base text-slate-500 font-[Poppins-Medium]'>
                        Max File Size (15MB)
                    </Text>
                    <Image
                        className='mt-3 w-20 h-20'
                        source={require('../../../../assets/icons/arrow-up.png')}
                    />
                </View>
            </View>
        </View>
    );
};

export default Upload;
