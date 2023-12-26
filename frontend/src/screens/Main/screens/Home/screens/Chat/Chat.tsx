import React from 'react';
import { ScrollView } from 'react-native';

import Navbar from './templates/Navbar';
import AIMessage from './templates/AIMessage';
import UserMessage from './templates/UserMessage';
import MessageInput from './templates/MessageInput';

const Chat: React.FC = () => {
    return (
        <>  
            <Navbar />
            <ScrollView>
                <AIMessage />
                <UserMessage />
            </ScrollView>
            <MessageInput />
        </>
    );
};

export default Chat;
