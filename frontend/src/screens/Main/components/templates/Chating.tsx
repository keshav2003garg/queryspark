import React from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import FA from 'react-native-vector-icons/FontAwesome';

const Chating: React.FC = () => {
    return (
        <>
            <ScrollView>
                <AI />
                <User />
            </ScrollView>
            <MessageBar />
        </>
    );
};

const AI: React.FC = () => {
    return (
        <View className='flex-row'>
            <View className='mt-5 flex-4 flex-row justify-start items-start'>
                <View className='mx-2 w-8 h-8 bg-white flex justify-center items-center rounded-full'>
                    <Image
                        className='w-5 h-5'
                        source={require('../../../../assets/img/spark-flip.png')}
                    />
                </View>
                <View className='px-4 py-2 rounded-lg rounded-tl-none bg-[#151515]'>
                    <Text className='text-base text-left text-white font-[Poppins-Regular]'>
                        Hello, I am QuerySpark your PDF Assistant!
                    </Text>
                </View>
            </View>
            <View className='flex-1'></View>
        </View>
    );
};

const User: React.FC = () => {
    return (
        <View className='flex-row'>
            <View className='flex-1'></View>
            <View className='mt-5 flex-4 flex-row justify-end items-start'>
                <View className='px-4 py-2 rounded-lg rounded-tr-none bg-[#151515]'>
                    <Text className='text-base text-left text-white font-[Poppins-Regular]'>
                        Hey, Can you help me with my PDF?
                    </Text>
                </View>
                <View className='mx-2 w-8 h-8 bg-white flex justify-center items-center rounded-full'>
                    <Image
                        className='w-5 h-5'
                        source={require('../../../../assets/img/spark.png')}
                    />
                </View>
            </View>
        </View>
    );
};

const MessageBar: React.FC = () => {
    return (
        <View className='py-1 w-[100%] absolute bottom-7 bg-black'>
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

export default Chating;
