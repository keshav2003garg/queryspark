import React, { useEffect } from 'react';
import { View } from 'react-native';

import Navbar from './template/Navbar';
import Upload from './components/Upload';
import Chating from './components/Chating';

import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { BottomTabParamList } from 'screens/Main/types/BottomTab';

type Props = BottomTabScreenProps<BottomTabParamList, 'New'>;

const New: React.FC<Props> = ({ navigation }) => {
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
