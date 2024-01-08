import React from 'react';
import { View, TextInput, TouchableNativeFeedback } from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons';

import { useAppDispatch } from 'hooks/redux.hooks';
import { sendMessage } from 'store/actions/chat.action';

interface MessageInputProps {
    chatID: string;
    keyboardStatus: boolean;
    input: {
        message: string;
        setMessage: Function;
    };
    responseLoading: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({
    chatID,
    keyboardStatus,
    input,
    responseLoading,
}) => {
    const { message, setMessage } = input;
    const dispatch = useAppDispatch();
    return (
        <View
            style={{ paddingBottom: keyboardStatus ? 8 : 27 }}
            className={`py-2 absolute bottom-0 bg-black`}>
            <View className='flex-row justify-between items-center'>
                <TextInput
                    className='ml-3 mr-1 px-5 w-[82%] text-lg rounded-3xl bg-[#222222]'
                    placeholder='Type your query here...'
                    value={message}
                    onChangeText={(text) => {
                        setMessage(text);
                    }}
                />
                <View
                    style={{ opacity: responseLoading ? 0.5 : 1 }}
                    className='mr-3 bg-[#F79A11] rounded-full'>
                    <TouchableNativeFeedback
                        disabled={responseLoading}
                        onPress={() => {
                            if (message.length > 0) {
                                setMessage('');
                                dispatch(sendMessage(chatID, message));
                            }
                        }}
                        background={TouchableNativeFeedback.Ripple(
                            '#D0D0D0',
                            true,
                        )}>
                        <View className='p-[10px]'>
                            <Ion name='send-outline' size={25} />
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    );
};

export default MessageInput;
