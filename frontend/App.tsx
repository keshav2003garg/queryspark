import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { AlertNotificationRoot } from 'react-native-alert-notification';

import Root from 'screens/Root';

import store, { persistor } from './src/store';

const App: React.FC = () => {
    const navTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'black',
        },
    };
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer theme={navTheme}>
                    <AlertNotificationRoot theme='light'>
                        <Root />
                    </AlertNotificationRoot>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
};

export default App;
