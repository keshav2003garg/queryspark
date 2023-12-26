import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home/Home.Screen';
import New from './screens/New/New';
import Account from './screens/Account/Account';
import TabButton from './templates/TabButton';
import NewChatTabButton from './templates/NewChatTabButton';

import TabItems from './utils/BottomTabItems';
import TabStyle from './utils/BottomTabBarStyle';

import { BottomTabParamList } from './types/BottomTab';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const Main = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: TabStyle,
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
