import React from 'react';
import { ScrollView } from 'react-native';

import AIMessage from './templates/AIMessage';
import UserMessage from './templates/UserMessage';
import MessageInput from './templates/MessageInput';

const Chating: React.FC = () => {
    return (
        <>
            <ScrollView>
                <AIMessage />
                <UserMessage />
            </ScrollView>
            <MessageInput />
        </>
    );
};

export default Chating;
