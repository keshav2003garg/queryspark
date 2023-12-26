import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ChatHistory from './screens/ChatHistory/ChatHistory';
import Chat from './screens/Chat/Chat';

import TabStyle from 'screens/Main/utils/BottomTabBarStyle';
import { forSlide } from './utils/transition';

import type { HomeStackParamList, HomeScreenProps } from 'types/navigation';

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
    const Stack = createStackNavigator<HomeStackParamList>();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                cardStyleInterpolator: forSlide,
            }}>
            <Stack.Screen
                name='ChatHistory'
                component={ChatHistory}
                listeners={{
                    focus: () => {
                        navigation.setOptions({
                            tabBarStyle: TabStyle,
                        });
                    },
                }}
            />
            <Stack.Screen
                name='Chat'
                component={Chat}
                listeners={{
                    focus: () => {
                        navigation.setOptions({
                            tabBarStyle: {
                                display: 'none',
                            },
                        });
                    },
                }}
            />
        </Stack.Navigator>
    );
};

export default Home;
