import React, { useState, useEffect, useRef } from 'react';
import { FlatList, KeyboardAvoidingView, Keyboard } from 'react-native';
// import {} from 'ai';

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
    const [message, setMessage] = useState<string>('');
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
    // const {} = useChat({
    //     api(payload) {
    //         return fetch('https://api.aimate.tech/api/v1/ai', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(payload),
    //         });
    //     },
    // });
    return (
        <KeyboardAvoidingView behavior={'height'} style={{ flex: 1 }}>
            <Navbar title={title} />
            {/* <View className={`h-${keyboardStatus ? '[70.5%]' : '[75.5%]'}`}> */}
            <FlatList
                contentContainerStyle={{ paddingBottom: 30 }}
                style={{
                    flexGrow: 0,
                    height: keyboardStatus ? '77.5%' : '83.5%',
                }}
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
                   (ref.current as any)._listRef._scrollRef.scrollToEnd();
                }}
                onLayout={() => {
                    (ref.current as any)._listRef._scrollRef.scrollToEnd();
                }}
            />
            {/* </View> */}
            <MessageInput
                chatID={chatID}
                keyboardStatus={keyboardStatus}
                input={{ message, setMessage }}
            />
        </KeyboardAvoidingView>
    );
};

export default Chat;
