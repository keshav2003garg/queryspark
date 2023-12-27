import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';

const UpperSection: React.FC = () => {
    return (
        <>
            <ImageBackground
                className='w-full flex-3'
                source={require('assets/img/bg.png')}>
                <View className='p-5 w-36 h-36 absolute top-[115px] left-36 bg-black flex justify-center items-center rounded-full'>
                    <Image
                        className='w-full h-full rounded-full '
                        source={require('assets/img/bg.png')}
                    />
                </View>
            </ImageBackground>
            <View className='flex-1'></View>
            <View className='flex-2'>
                <Text className='text-lg text-center text-[#f79a11] font-[Poppins-Regular]'>
                    Keshav Garg
                </Text>
                <View className='flex-row justify-between'>
                    <View className='ml-20'>
                        <Text className='text-2xl text-center text-[#E9A541] font-[Poppins-Regular]'>
                            155
                        </Text>
                        <Text className='text-base text-center text-[#E9A541] font-[Poppins-Regular]'>
                            Chats
                        </Text>
                    </View>
                    <View className='mr-16'>
                        <Text className='text-2xl text-center text-[#E9A541] font-[Poppins-Regular]'>
                            26
                        </Text>
                        <Text className='text-base text-center text-[#E9A541] font-[Poppins-Regular]'>
                            Document
                        </Text>
                    </View>
                </View>
                <View className={`my-5 border-b-2 border-[#151515]`}></View>
            </View>
        </>
    );
};

export default UpperSection;
