import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

const NoChats: React.FC = () => {
    return (
        <View className='flex-1'>
            <LottieView
                style={{ flex: 7 }}
                source={require('assets/animations/nohistory.json')}
                autoPlay={true}
                loop={false}
            />
            <View className='flex-1 justify-center items-center'>
                <Text className='text-[#989898] font-[Poppins-Medium] text-4xl absolute bottom-[100px]'>
                    No Chats, yet
                </Text>
                <Text className='text-[#636363] text-lg text-center leading-5 absolute bottom-[50px]'>
                    No chats in your history yet! {'\n'} Press below to start a
                    chat.
                </Text>
            </View>
            <View className='flex-1 justify-center items-center'>
                <LottieView
                    style={{
                        width: 100,
                        height: 100,
                        position: 'absolute',
                        bottom: -20,
                    }}
                    source={require('assets/animations/down.json')}
                    autoPlay={true}
                />
            </View>
        </View>
    );
};

export default NoChats;
