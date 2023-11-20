import React from 'react';
import { View, Text } from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons';

import Upload from './templates/Upload';
import Chating from './templates/Chating';

const Add: React.FC = () => {
    return (
        <View className='flex-1'>
            <Navbar />
            <Chating />
        </View>
    );
};

const Navbar: React.FC = () => {
    return (
        <View className='mt-14 mx-5 flex-row justify-start items-center'>
            <Ion name='arrow-back' color='#ffffff' size={30} />
            <Text className='ml-4 text-2xl text-white font-[Poppins-Medium]'>
                New Chat
            </Text>
        </View>
    );
};

export default Add;
