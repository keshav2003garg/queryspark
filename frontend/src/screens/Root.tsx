import React, { useEffect } from 'react';
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification';
import Spinner from 'react-native-loading-spinner-overlay';
import { SkypeIndicator } from 'react-native-indicators';

import Auth from './Auth/Auth.Screen';
import Main from './Main/Main.Screen';

import { useAppDispatch, useAppSelector } from 'hooks/redux.hooks';
import { clearMessages, clearErrors } from 'actions/clear.action';

const Root: React.FC = () => {
    const { isAuthenticated, loading, message, error } = useAppSelector(
        (state) => state.user,
    );
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (message) {
            Dialog.show({
                type: ALERT_TYPE.SUCCESS,
                title: message,
                button: 'Okay',
                autoClose: 3000,
            });
            dispatch(clearMessages());
        }
        if (error) {
            Dialog.show({
                type: ALERT_TYPE.DANGER,
                title: error,
                button: 'Okay',
                autoClose: 3000,
            });
            dispatch(clearErrors());
        }
    }, [message, error]);
    return (
        <>
            {isAuthenticated ? <Main /> : <Auth />}
            {loading ? (
                <Spinner
                    visible={true}
                    cancelable={false}
                    animation='fade'
                    size='large'
                    color='white'
                    customIndicator={<SkypeIndicator size={50} color='white' />}
                    overlayColor='rgba(0,0,0,0.5)'
                />
            ) : null}
        </>
    );
};

export default Root;
