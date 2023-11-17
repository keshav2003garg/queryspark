import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import store, { persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import Root from 'screens/Root';

const navTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'black',
    },
};

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer theme={navTheme}>
                    <Root />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
};

export default App;
