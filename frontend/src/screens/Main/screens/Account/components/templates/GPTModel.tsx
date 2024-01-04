import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import MI from 'react-native-vector-icons/MaterialIcons';
import Ant from 'react-native-vector-icons/AntDesign';

const GPTModel: React.FC = () => {
    const [selected, setSelected] = useState('');
    const options = [
        { key: '1', value: 'GPT-4-Turbo' },
        { key: '2', value: 'GPT-4' },
        { key: '3', value: 'GPT-3.5' },
        { key: '4', value: 'GPT-3.5-Turbo' },
        { key: '5', value: 'GPT-3.0' },
    ];
    return (
        <View className='flex-1'>
            <View className='mt-5 pb-[12px]'>
                <Text className='text-xl font-[Poppins-Medium] ml-5'>
                    Select GPT Model
                </Text>
            </View>
            <View className='border-b-2 border-[#272727]'></View>
            <View className='my-8 mx-5'>
                <SelectList
                    setSelected={(val: string) => setSelected(val)}
                    data={options}
                    save='value'
                    searchicon={
                        <View className='mr-2'>
                            <MI name='model-training' size={25} />
                        </View>
                    }
                    fontFamily='Poppins-Medium'
                    searchPlaceholder='Select GPT Model'
                    defaultOption={{ key: '4', value: 'GPT-3.5-Turbo' }}
                    arrowicon={<Ant name='down' size={20} />}
                    closeicon={<Ant name='close' size={20} />}
                />
            </View>
        </View>
    );
};

export default GPTModel;
