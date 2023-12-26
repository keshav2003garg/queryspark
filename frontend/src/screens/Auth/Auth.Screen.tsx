import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './screens/SignIn';

import type { StackParamList } from './types/StackNavigator';

const Auth: React.FC = () => {
    const Stack = createNativeStackNavigator<StackParamList>();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='SignIn' component={SignIn} />
        </Stack.Navigator>
    );
};

export default Auth;
