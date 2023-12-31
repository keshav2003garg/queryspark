import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    FlatList,
    TouchableNativeFeedback,
    KeyboardAvoidingView,
    Keyboard,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import Navbar from './templates/Navbar';
import AIMessagePulseLoading from './templates/AIMessagePulseLoading';
import AIMessage from './templates/AIMessage';
import UserMessage from './templates/UserMessage';
import MessageInput from './templates/MessageInput';

import { useAppSelector } from 'hooks/redux.hooks';

import type { ChatScreenProps } from 'types/navigation';

const Chat: React.FC<ChatScreenProps> = ({ route }) => {
    const { chatID } = route.params;
    const { user } = useAppSelector((state) => state.user);
    const { chats, responseLoading } = useAppSelector((state) => state.chat);
    const [keyboardStatus, setKeyboardStatus] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [isBottom, setIsBottom] = useState<boolean>(false);
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
            <FlatList
                onScroll={(e) => {
                    const totalHeight =
                        e.nativeEvent.contentOffset.y +
                        e.nativeEvent.layoutMeasurement.height +
                        e.nativeEvent.contentInset.bottom;
                    setIsBottom(
                        totalHeight.toPrecision(2) ===
                            e.nativeEvent.contentSize.height.toPrecision(2),
                    );
                }}
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
                ListFooterComponent={() => {
                    return responseLoading ? <AIMessagePulseLoading /> : null;
                }}
                onContentSizeChange={() => {
                    (ref.current as any)._listRef._scrollRef.scrollToEnd();
                }}
                onLayout={(e) => {
                    (ref.current as any)._listRef._scrollRef.scrollToEnd();
                }}
            />
            {!isBottom && !keyboardStatus && (
                <View className='mr-4 absolute bottom-28 right-2 z-1 bg-[#F79A11] rounded-full'>
                    <TouchableNativeFeedback
                        onPress={() => {
                            (
                                ref.current as any
                            )._listRef._scrollRef.scrollToEnd();
                        }}
                        background={TouchableNativeFeedback.Ripple(
                            'D0D0D0',
                            true,
                        )}>
                        <View className='p-2'>
                            <Feather name='chevrons-down' size={25} />
                        </View>
                    </TouchableNativeFeedback>
                </View>
            )}
            <MessageInput
                chatID={chatID}
                keyboardStatus={keyboardStatus}
                input={{ message, setMessage }}
            />
        </KeyboardAvoidingView>
    );
};

export default Chat;
