import React from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons';
import FA from 'react-native-vector-icons/FontAwesome';

import Upload from './templates/Upload';
import Chating from './templates/Chating';

const Add: React.FC = () => {
    return (
        <View className='flex-1'>
            <Navbar />
            <ScrollView>
                <Chating />
            </ScrollView>
            <MessageBar />
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

const MessageBar: React.FC = () => {
    return (
        <View className='py-1 w-[100%] absolute bottom-0 bg-black'>
            <View className='mx-4 pr-3 flex-row items-center rounded-lg bg-[#151515]'>
                <TextInput
                    className='px-3 text-lg flex-1'
                    placeholder='Type a message'
                    autoCapitalize='none'
                />
                <FA name='send' size={25} />
            </View>
        </View>
    );
};

export default Add;
