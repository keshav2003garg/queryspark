import React from 'react';
import { Text } from 'react-native';

const Description: React.FC<{ noc: number }> = ({ noc }) => {
    return (
        <Text
            numberOfLines={noc ? noc : 2}
            className='w-[347px] text-sm text-clip text-white font-[Poppins-Regular]'>
            This chat is a text-based interaction between you and me, a language
            model created by OpenAI called GPT-3.5. I'm here to assist you by
            providing information, answering questions, generating text based on
            prompts, and engaging in conversations on a wide range of topics.
            Please feel free to ask me anything or let me know how I can help
            you!
        </Text>
    );
};

export default Description;
