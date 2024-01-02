import React, { memo } from 'react';

import UserMessage from './templates/UserMessage';
import AIMessage from './templates/AIMessage';

interface MessageListProps {
    item: {
        message: string;
        sender: string;
    };
    user: {
        photoURL: string;
    };
}

const MessageList: React.FC<MessageListProps> = ({ item, user }) => {
    return item.sender === 'USER' ? (
        <UserMessage message={item.message} userPhoto={user.photoURL} />
    ) : (
        <AIMessage message={item.message} />
    );
};

export default memo(MessageList);
