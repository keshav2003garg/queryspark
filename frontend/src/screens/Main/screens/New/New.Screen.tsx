import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Upload from './screens/Upload/Upload';
import Chating from './screens/Chating/Chating';

import { forSlide } from './utils/transition';

import type { NewStackParamList, NewScreenProps } from 'types/navigation';

const New: React.FC<NewScreenProps> = ({ navigation }) => {
    const Stack = createStackNavigator<NewStackParamList>();
    useEffect(() => {
        navigation.setOptions({
            tabBarStyle: {
                display: 'none',
            },
        });
    }, []);
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                cardStyleInterpolator: forSlide,
            }}>
            <Stack.Screen name='Upload' component={Upload} />
            <Stack.Screen name='Chating' component={Chating} />
        </Stack.Navigator>
    );
};

export default New;
