import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { forSlide } from './utils/transition';
import ChatHistory from './screens/ChatHistory/ChatHistory';
import Chat from './screens/Chat/Chat';

import TabStyle from 'screens/Main/utils/BottomTabBarStyle';

import { StackParamList } from './types/StackNavigator';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from 'screens/Main/types/BottomTab';

const Stack = createStackNavigator<StackParamList>();
type Props = BottomTabScreenProps<BottomTabParamList, 'Home'>;
const Home: React.FC<Props> = ({ navigation }) => {
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
