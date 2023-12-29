import React from 'react';
import { FlatList, KeyboardAvoidingView } from 'react-native';

import Navbar from './templates/Navbar';
import PulseLoading from './templates/PulseLoading';
import AIMessage from './templates/AIMessage';
import UserMessage from './templates/UserMessage';
import MessageInput from './templates/MessageInput';

import { useAppSelector } from 'hooks/redux.hooks';

import type { ChatScreenProps } from 'types/navigation';

const Chat: React.FC<ChatScreenProps> = ({ route }) => {
    const { title, messages } = route.params;
    const { user } = useAppSelector((state) => state.user);
    return (
        <KeyboardAvoidingView behavior={'height'} style={{ flex: 1 }}>
            <Navbar title={title} />
            <FlatList
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
            />
            <MessageInput />
        </KeyboardAvoidingView>
    );
};

export default Chat;
