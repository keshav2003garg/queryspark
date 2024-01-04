import React from 'react';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';

import Root from 'screens/Root';

import store, { persistor } from './src/store/store';

const App: React.FC = () => {
    const navTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'black',
        },
    };
    GoogleSignin.configure({
        webClientId: Config.GOOGLE_CLIENT_ID as string,
        offlineAccess: true,
    });
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer theme={navTheme}>
                    <AlertNotificationRoot theme='light'>
                        <BottomSheetModalProvider>
                            <Root />
                        </BottomSheetModalProvider>
                    </AlertNotificationRoot>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
};

export default gestureHandlerRootHOC(App);
