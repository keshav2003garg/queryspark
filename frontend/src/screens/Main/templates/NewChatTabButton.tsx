import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';

import type { TabButtonProps } from '../types/BottomTab';

const NewChatTabButton: React.FC<TabButtonProps> = (props) => {
    const { item, onPress } = props;

    return (
        <TouchableNativeFeedback
            onPress={onPress}
            background={TouchableNativeFeedback.Ripple('#FFB243', true)}>
            <View className='w-28 h-28 bg-black -top-14 rounded-full'>
                <View className='flex-1 flex-row justify-center items-center bg-black rounded-full'>
                    <item.Icon
                        name={props.item.icon}
                        color='#FFB64D'
                        size={100}
                    />
                </View>
            </View>
        </TouchableNativeFeedback>
    );
};

export default NewChatTabButton;
