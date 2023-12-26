import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home/Home.Screen';
import New from './screens/New/New';
import Account from './screens/Account/Account';
import TabButton from './templates/TabButton';
import NewChatTabButton from './templates/NewChatTabButton';
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
                name='Home'
                component={Home}
                options={{
                    tabBarButton: (props) => (
                        <TabButton item={TabItems[0]} {...props} />
                    ),
                }}
            />
            <Tab.Screen
                name='New'
                component={New}
                options={{
                    tabBarButton: (props) => (
                        <NewChatTabButton item={TabItems[1]} {...props} />
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
