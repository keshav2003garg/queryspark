import React from 'react';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const Chating: React.FC = () => {
    return (
        <View className='flex-1'>
            <View className='mt-14 mx-5 flex-row justify-start items-center'>
                <Ion name='arrow-back' color='#ffffff' size={30} />
                <Text className='ml-4 text-2xl text-white font-[Poppins-Medium]'>
                    New Chat
                </Text>
            </View>

            <View className='flex-col'>
                <AI />
                <User />
            </View>
        </View>
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

export default Chating;
