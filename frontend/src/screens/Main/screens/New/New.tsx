import React, { useEffect } from 'react';
import { View } from 'react-native';

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
        <View className='mt-14 flex-1'>
            <Upload />
        </View>
    );
};

export default New;
