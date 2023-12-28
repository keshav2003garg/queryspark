import React from 'react';
import { View, Text, ScrollView, TouchableNativeFeedback } from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons';

import AIMessage from './templates/AIMessage';
import UserMessage from './templates/UserMessage';
import MessageInput from './templates/MessageInput';

import type { ChatingScreenProps } from 'types/navigation';

const Chating: React.FC<ChatingScreenProps> = ({ navigation }) => {
    return (
        <View className='mt-14 flex-1'>
            <View className='mx-3 flex-row justify-start items-center'>
                <View className='flex-row '>
                    <TouchableNativeFeedback
                        onPress={() => {
                            navigation.goBack();
                        }}
                        background={TouchableNativeFeedback.Ripple(
                            'D0D0D0',
                            true,
                        )}>
                        <View>
                            <Ion name='arrow-back' color='#ffffff' size={30} />
                        </View>
                    </TouchableNativeFeedback>
                    <Text className='ml-4 text-2xl text-white font-[Poppins-Medium]'>
                        New Chat
                    </Text>
                </View>
            </View>
            <ScrollView className='mx-3'>
                <AIMessage />
                <UserMessage />
            </ScrollView>
            <MessageInput />
        </View>
    );
};

export default Chating;
