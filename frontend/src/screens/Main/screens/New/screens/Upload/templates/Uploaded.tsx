import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

const Uploaded: React.FC = () => {
    return (
        <View className='flex-1'>
            <LottieView
                style={{ flex: 6 }}
                source={require('assets/animations/uploaded.json')}
                autoPlay={true}
                loop={true}
            />
            <View className='flex-1'></View>
        </View>
    );
};

export default Uploaded;
