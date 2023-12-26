import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Navbar from './templates/Navbar';
import ChatList from './components/ChatList';

const ChatHistory: React.FC = () => {
    return (
        <View>
            <Navbar />
            <View className='mt-7'>
                <Text className='mx-4 text-lg text-white font-[Poppins-Medium]'>
                    Chat History
                </Text>
                <View className='h-[85%]'>
                    <ScrollView>
                        <ChatList />
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

export default ChatHistory;
