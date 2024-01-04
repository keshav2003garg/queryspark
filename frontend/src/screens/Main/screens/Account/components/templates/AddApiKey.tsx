import React, { useState } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';

const AddApiKey: React.FC = () => {
    const [api, setApi] = useState<string>('');
    return (
        <View className='flex-1'>
            <View className='mt-5 pb-[12px]'>
                <Text className='text-xl font-[Poppins-Medium] ml-5'>
                    Add API Key
                </Text>
            </View>
            <View className='border-b-2 border-[#272727]'></View>
            <View className='mx-8 mt-10 mb-4 p-2 py-4 flex-row items-center bg-[#272727] rounded-2xl'>
                <View className='mx-2 mr-5'>
                    <MCI name='api' size={35} color='#F79A11' />
                </View>
                <View className='flex-1 justify-center'>
                    <Text className='text-base text-[#888888] font-[Poppins-Regular]'>
                        API
                    </Text>
                    <BottomSheetTextInput
                        style={{
                            margin: 0,
                            padding: 0,
                            height: 25,
                            fontSize: 20,
                        }}
                        placeholder='Enter your API Key'
                        placeholderTextColor='#3D3D3D'
                        value={api}
                        selectionColor='#F7B24B'
                        onChangeText={(text) => {
                            setApi(text);
                        }}
                    />
                </View>
            </View>
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('#D0D0D0', false)}>
                <View className='mx-6 mt-3 py-3 bg-[#F79A11] rounded-xl'>
                    <Text className='text-white text-center text-base font-[Poppins-Medium]'>
                        Add API Key
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

export default AddApiKey;
