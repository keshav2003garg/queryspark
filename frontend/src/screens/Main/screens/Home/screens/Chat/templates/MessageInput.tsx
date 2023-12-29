import React, { useState, useEffect } from 'react';
import {
    View,
    TextInput,
    TouchableNativeFeedback,
    Keyboard,
} from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons';

const MessageInput: React.FC = () => {
    const [keyboardStatus, setKeyboardStatus] = useState(false);
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
    return (
        <View
            className={`py-1 flex-row justify-between items-center absolute bottom-${
                keyboardStatus ? '2' : '6'
            } bg-black`}>
            <TextInput
                className='ml-3 mr-1 px-5 w-[82%] text-lg rounded-3xl bg-[#222222]'
                placeholder='Type a message'
                autoCapitalize='none'
            />
            <View className='mr-3 bg-[#F79A11] rounded-full'>
                <TouchableNativeFeedback
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
    );
};

export default MessageInput;
