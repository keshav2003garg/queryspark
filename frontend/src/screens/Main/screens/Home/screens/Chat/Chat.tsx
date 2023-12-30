import React, { useState, useEffect, useRef } from 'react';
import { FlatList, KeyboardAvoidingView, Keyboard } from 'react-native';

import Navbar from './templates/Navbar';
import PulseLoading from './templates/PulseLoading';
import AIMessage from './templates/AIMessage';
import UserMessage from './templates/UserMessage';
import MessageInput from './templates/MessageInput';

import { useAppSelector } from 'hooks/redux.hooks';

import type { ChatScreenProps } from 'types/navigation';
import { View } from 'react-native-animatable';

const Chat: React.FC<ChatScreenProps> = ({ route }) => {
    const { chatID } = route.params;
    const { user } = useAppSelector((state) => state.user);
    const { chats } = useAppSelector((state) => state.chat);
    const [keyboardStatus, setKeyboardStatus] = useState<boolean>(false);
    const ref = useRef<FlatList | null>(null);
    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardStatus(false);
        });
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);
    const { messages, title } = chats.find(
        (chat: any) => chat.chatID === chatID,
    );
    return (
        <KeyboardAvoidingView behavior={'height'} style={{ flex: 1 }}>
            <Navbar title={title} />
            <View className={`h-${keyboardStatus ? '[75.5%]' : '[81.5%]'}`}>
                <FlatList
                    ref={ref}
                    data={messages}
                    renderItem={({ item }) =>
                        item.sender === 'USER' ? (
                            <UserMessage
                                message={item.message}
                                userPhoto={user.photoURL}
                            />
                        ) : (
                            <AIMessage message={item.message} />
                        )
                    }
                    keyExtractor={(item) => item.timestamp.toString()}
                    onContentSizeChange={() => {
                        ref.current?.scrollToEnd({ animated: true });
                    }}
                    onLayout={() => {
                        ref.current?.scrollToEnd({ animated: true });
                    }}
                />
            </View>
            <MessageInput chatID={chatID} keyboardStatus={keyboardStatus} />
        </KeyboardAvoidingView>
    );
};

export default Chat;
