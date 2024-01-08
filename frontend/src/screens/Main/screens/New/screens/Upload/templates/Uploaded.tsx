import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

const Uploaded: React.FC = () => {
    return (
        <View className='flex-1'>
            <LottieView
                style={{ flex: 2 }}
                source={require('assets/animations/uploaded.json')}
                autoPlay={true}
                loop={true}
            />
            <Text className='text-center text-white text-2xl font-[Poppins-Medium]'>
                Wait while your chat is being created...
            </Text>
            <View className='flex-1'></View>
        </View>
    );
};

export default Uploaded;
