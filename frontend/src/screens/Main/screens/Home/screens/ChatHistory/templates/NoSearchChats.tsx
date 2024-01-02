import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

const NoSearchChats: React.FC = () => {
    return (
        <View className='flex-1'>
            <LottieView
                style={{ flex: 2 }}
                source={require('assets/animations/nohistory.json')}
                autoPlay={true}
                loop={true}
            />
            <View className='flex-1 justify-center items-center'>
                <Text className='text-[#989898] font-[Poppins-Medium] text-4xl absolute bottom-[250px]'>
                    No Chats
                </Text>
                <Text className='text-[#636363] text-lg text-center leading-5 absolute bottom-[210px]'>
                    No chats in your history {'\n'} that match your search.
                </Text>
            </View>
        </View>
    );
};

export default NoSearchChats;
