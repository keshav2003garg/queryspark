import React, { useEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableNativeFeedback } from 'react-native';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';
import Ion from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

import Chat from './components/Chat';
import Add from './components/Add';
import Account from './components/Account';

const Tab = createBottomTabNavigator();

const TabButton: React.FC = (props: any) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef<any>(null);

    useEffect(() => {
        if (focused) {
            viewRef.current.bounceIn(800);
        }
    }, [focused]);

    return (
        <TouchableNativeFeedback
            onPress={onPress}
            background={TouchableNativeFeedback.Ripple('#D0D0D0', true)}>
            <View className='flex-1 flex-row justify-center items-center'>
                <Animatable.View ref={viewRef}>
                    <item.Icon
                        name={props.item.icon}
                        color={focused ? '#5c0f09' : '#ffffff'}
                        size={30}
                    />
                </Animatable.View>
            </View>
        </TouchableNativeFeedback>
    );
};

type Item = {
    name: string;
    component: React.FC;
    Icon: any;
    icon: string;
};

const Main = () => {
    const item: Array<Item> = [
        {
            name: 'Chat',
            component: Chat,
            Icon: Ion,
            icon: 'chatbox',
        },
        {
            name: 'Add',
            component: Add,
            Icon: Ion,
            icon: 'add-circle',
        },
        {
            name: 'Account',
            component: Account,
            Icon: MI,
            icon: 'account-box',
        },
    ];
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    display: 'flex',
                    backgroundColor: '#000000',
                    borderColor: '#000000',
                    paddingTop: 10,
                },
            }}>
            <Tab.Screen
                name='Chat'
                component={Chat}
                options={{
                    tabBarButton: (props) => (
                        <TabButton item={item[0]} {...props} />
                    ),
                }}
            />
            <Tab.Screen
                name='Add'
                component={Add}
                options={{
                    tabBarButton: (props) => (
                        <TabButton item={item[1]} {...props} />
                    ),
                }}
            />
            <Tab.Screen
                name='Account'
                component={Account}
                options={{
                    tabBarButton: (props) => (
                        <TabButton item={item[2]} {...props} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default Main;
