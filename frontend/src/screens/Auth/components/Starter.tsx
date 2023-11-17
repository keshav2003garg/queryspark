import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';

const Starter: React.FC = () => {
    return (
        <ImageBackground
            className='w-full h-full flex-1'
            source={require('../../../assets/img/starter.png')}>
            <View className='flex-3 bg-transparent'></View>
            <View className='flex-1 bg-transparent rounded-[25px]'></View>
        </ImageBackground>
    );
};

export default Starter;
