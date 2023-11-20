import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Chat from './components/Chats';
import Add from './components/Add';
import Account from './components/Account';
import TabButton from './templates/TabButton';
import AddChatTabButton from './templates/AddChatTabButton';
import TabItems from './utils/BottomTabItems';

import { BottomTabParamList } from './types/BottomTab';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const Main = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
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
            }}>
            <Tab.Screen
                name='Chat'
                component={Chat}
                options={{
                    tabBarButton: (props) => (
                        <TabButton item={TabItems[0]} {...props} />
                    ),
                }}
            />
            <Tab.Screen
                name='Add'
                component={Add}
                options={{
                    tabBarButton: (props) => (
                        <AddChatTabButton item={TabItems[1]} {...props} />
                    ),
                }}
            />
            <Tab.Screen
                name='Account'
                component={Account}
                options={{
                    tabBarButton: (props) => (
                        <TabButton item={TabItems[2]} {...props} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default Main;
