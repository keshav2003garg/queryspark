import React, { useState } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import {
    BottomSheetTextInput,
    BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';

const MyApiKeys: React.FC = () => {
    const apis = [
        'sx7-dsf4d5s4fg65dgs46g4ds5g4d5sg4d',
        'sx7-dfsgsdg5dsf54sd541f5ds45f45sdf',
        'sx7-f54cd5s4gf51ds54g8vs4df8g4sf4d',
        'sx7-5sda4f54ds54fg4sdg8g4bfs1b41sd',
        'sx7-ds5gf5dsgsd5f54sd6fds46f5sf4dg',
    ];
    const [selected, setSelected] = useState(0);
    return (
        <View className='flex-1'>
            <View className='mt-5 pb-[12px]'>
                <Text className='text-xl font-[Poppins-Medium] ml-5'>
                    My API Keys
                </Text>
            </View>
            <View className='border-b-2 border-[#272727]'></View>
            <BottomSheetFlatList
                data={apis}
                keyExtractor={(api) => api}
                renderItem={({ item, index }) => (
                    <APIKey
                        apiKey={item}
                        index={index}
                        state={{ selected, setSelected }}
                    />
                )}
            />
        </View>
    );
};

interface APIKeyProps {
    apiKey: string;
    index: number;
    state: {
        selected: number;
        setSelected: Function;
    };
}

const APIKey: React.FC<APIKeyProps> = ({ apiKey, index, state }) => {
    const { selected, setSelected } = state;
    const handleSelect = () => {
        setSelected(index);
    };
    return (
        <TouchableNativeFeedback
            onPress={handleSelect}
            background={TouchableNativeFeedback.Ripple('#6C6C6C', false)}>
            <View
                key={apiKey}
                className={`mx-8 my-4 p-2 py-4 flex-row items-center bg-[#272727] rounded-2xl ${
                    selected === index ? 'border-2 border-white' : ''
                }`}>
                <View className='mx-2 mr-5'>
                    <MCI name='api' size={35} color='#F79A11' />
                </View>
                <View className='flex-1 justify-center'>
                    <Text className='text-base text-[#A4A4A4] font-[Poppins-Regular]'>
                        API Key - #{index + 1}
                    </Text>
                    <BottomSheetTextInput
                        editable={false}
                        style={{
                            margin: 0,
                            padding: 0,
                            height: 45,
                            textAlignVertical: 'top',
                            fontSize: 19,
                        }}
                        placeholder='Enter your API Key'
                        placeholderTextColor='#3D3D3D'
                        value={apiKey}
                        selectionColor='#F7B24B'
                        numberOfLines={2}
                        multiline={true}
                    />
                </View>
            </View>
        </TouchableNativeFeedback>
    );
};

export default MyApiKeys;
