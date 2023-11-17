import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import Starter from './components/Starter';

const Stack = createNativeStackNavigator();
const Auth: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Starter' component={Starter} />
        </Stack.Navigator>
    );
};

export default Auth;
