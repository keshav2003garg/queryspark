import React, { useEffect } from 'react';
import { View } from 'react-native';

import Navbar from './template/Navbar';
import Upload from './components/Upload';
import Chating from './components/Chating';

import type { NewScreenProps } from 'types/navigation';

const New: React.FC<NewScreenProps> = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({
            tabBarStyle: {
                display: 'none',
            },
        });
    }, []);

    return (
        <View className='flex-1'>
            <Navbar />
            {/* <Upload /> */}
            <Chating />
        </View>
    );
};

export default New;
