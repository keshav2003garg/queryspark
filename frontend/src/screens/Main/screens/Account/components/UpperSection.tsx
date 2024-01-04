import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';

import { useAppSelector } from 'hooks/redux.hooks';

const UpperSection: React.FC = () => {
    const { user } = useAppSelector((state) => state.user);
    return (
        <View className='flex-1 justify-between'>
            <ImageBackground
                className='w-full h-48'
                source={require('assets/img/bg.png')}>
                <View className='p-4 w-36 h-36 absolute top-[115px] left-36 bg-black flex justify-center items-center rounded-full'>
                    <Image
                        className='w-full h-full rounded-full '
                        source={{ uri: user?.photoURL }}
                    />
                </View>
            </ImageBackground>
            <View className='h-12'></View>
            <Text className='text-lg text-center text-[#F79A11] font-[Poppins-Regular]'>
                {user?.name}
            </Text>
            <View className='mt-2 mb-5 border-b-2 border-[#151515]'></View>
        </View>
    );
};

export default UpperSection;
