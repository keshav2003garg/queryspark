import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { useAppSelector, useAppDispatch } from 'hooks/redux.hooks';
import { fetchChatHistory } from 'store/actions/chat.action';
import Navbar from './templates/Navbar';
import PulseLoading from './templates/PulseLoading';
import ChatList from './components/ChatList';

const ChatHistory: React.FC = () => {
    const { user } = useAppSelector((state) => state.user);
    const { chats, pulseLoading } = useAppSelector((state) => state.chat);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchChatHistory(user.userID));
    }, []);
    return (
        <View className='mt-12'>
            <Navbar />
            <View className='mt-7'>
                <Text className='mx-4 text-lg text-white font-[Poppins-Medium]'>
                    Chat History
                </Text>
                <View className='h-[88.5%]'>
                    <ScrollView>
                        {pulseLoading ? <PulseLoading /> : <ChatList />}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

export default ChatHistory;
