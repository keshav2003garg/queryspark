import React from 'react';

import Auth from './Auth/Auth.Screen';
import Main from './Main/Main.Screen';

const Root: React.FC = () => {
    return true ? <Auth /> : <Main />;
};

export default Root;
