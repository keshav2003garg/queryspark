import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ion from 'react-native-vector-icons/Ionicons';

import { StackParamList } from '../../../types/StackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

type ScreenNavigationProp = StackNavigationProp<StackParamList, 'Chat'>;
const Navbar: React.FC = () => {
    const navigation = useNavigation<ScreenNavigationProp>();
    return (
        <View className='mt-14 mx-3 flex-row justify-start items-center'>
            <TouchableNativeFeedback
                onPress={() => {
                    navigation.navigate('ChatHistory');
                }}
                background={TouchableNativeFeedback.Ripple('#9F9F9F', true)}>
                <View>
                    <Ion name='arrow-back' color='#ffffff' size={30} />
                </View>
            </TouchableNativeFeedback>
            <Text className='ml-4 text-2xl text-white font-[Poppins-Medium]'>
                New Chat
            </Text>
        </View>
    );
};

export default Navbar;
