import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { forSlide } from './utils/transition';
import ChatHistory from './screens/ChatHistory/ChatHistory';
import Chat from './screens/Chat/Chat';

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
                            tabBarStyle: {
                                marginHorizontal: 40,
                                marginBottom: 10,
                                position: 'absolute',
                                bottom: 25,
                                backgroundColor: '#220404',
                                borderColor: '#220404',
                                borderRadius: 20,
                                shadowColor: '#7E7E7E',
                                shadowOffset: {
                                    width: 0,
                                    height: 10,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.5,
                                elevation: 5,
                            },
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
