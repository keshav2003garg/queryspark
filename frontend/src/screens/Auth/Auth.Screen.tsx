import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './screens/SignIn';

import { StackParamList } from './types/StackNavigator';

const Stack = createNativeStackNavigator<StackParamList>();
const Auth: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='SignIn' component={SignIn} />
        </Stack.Navigator>
    );
};

export default Auth;
