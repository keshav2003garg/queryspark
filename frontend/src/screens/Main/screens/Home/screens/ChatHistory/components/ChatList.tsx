import React, { useState } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ion from 'react-native-vector-icons/Ionicons';

import Title from './templates/Title';
import Description from './templates/Description';
import Documents from './templates/Documents';

import { StackParamList } from '../../../types/StackNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ScreenNavigationProp = NativeStackNavigationProp<
    StackParamList,
    'ChatHistory'
>;
const ChatList: React.FC = () => {
    const [modal, setModal] = useState<boolean>(false);
    const [lines, setLines] = useState<number>(2);
    const navigation = useNavigation<ScreenNavigationProp>();
    const handlePress = () => {
        setModal((prev) => !prev);
        setLines(lines === 2 ? 10 : 2);
    };
    return (
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('#D0D0D0', false)}
            onPress={() => {
                navigation.navigate('Chat');
            }}>
            <View className='m-4 p-3 bg-[#151515] rounded-md border-[#DEDEDE] border-[0.5px] flex-row justify-between'>
                <View className='flex-col'>
                    <Title />
                    <Description noc={lines} />
                    <Documents noc={lines} />
                </View>
                <TouchableNativeFeedback
                    onPress={handlePress}
                    background={TouchableNativeFeedback.Ripple(
                        '#9F9F9F',
                        true,
                    )}>
                    <View className='h-7'>
                        <Ion
                            name={modal ? 'chevron-up' : 'chevron-down'}
                            color='#ffffff'
                            size={27}
                        />
                    </View>
                </TouchableNativeFeedback>
            </View>
        </TouchableNativeFeedback>
    );
};

export default ChatList;
