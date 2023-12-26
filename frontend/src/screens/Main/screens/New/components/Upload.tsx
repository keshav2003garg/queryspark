import React from 'react';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';

const Upload: React.FC = ({}) => {
    return (
        <View className='flex-1'>
            <View className='mt-14 flex justify-center items-center'>
                <Image
                    className='w-96 h-96 rounded-2xl'
                    source={require('assets/icons/upload.png')}
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
                    <TouchableNativeFeedback
                        background={TouchableNativeFeedback.Ripple(
                            '#FFB243',
                            true,
                        )}>
                        <View className='mt-2 p-2'>
                            <Image
                                className='w-20 h-20'
                                source={require('assets/icons/arrow-up.png')}
                            />
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    );
};

export default Upload;
