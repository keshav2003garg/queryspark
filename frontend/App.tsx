import React from 'react';

import store, { persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}></PersistGate>
        </Provider>
    );
};

export default App;
