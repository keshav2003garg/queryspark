import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ion from 'react-native-vector-icons/Ionicons';

import type { ChatScreenNavigationProp } from 'types/navigation';

interface NavbarProps {
    title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
    const navigation = useNavigation<ChatScreenNavigationProp>();
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
            <Text
                numberOfLines={1}
                className='w-[80%] ml-4 text-2xl text-white font-[Poppins-Medium] text-clip'>
                {title}
            </Text>
        </View>
    );
};

export default Navbar;
