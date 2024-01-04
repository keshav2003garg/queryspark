import React, { useEffect } from 'react';
// @ts-expect-error
import { HoldMenuProvider } from 'react-native-hold-menu';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification';
import Spinner from 'react-native-loading-spinner-overlay';
import { SkypeIndicator } from 'react-native-indicators';

import Auth from './Auth/Auth.Screen';
import Main from './Main/Main.Screen';

import { useAppDispatch, useAppSelector } from 'hooks/redux.hooks';
import {
    clearMessages,
    clearWarnings,
    clearErrors,
} from 'store/actions/clear.action';

const Root: React.FC = () => {
    const { isAuthenticated, loading } = useAppSelector((state) => state.user);
    const { message, warning, error } = useAppSelector((state) => state.alert);
    const dispatch = useAppDispatch();
    const insets = useSafeAreaInsets();
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
        if (warning) {
            Dialog.show({
                type: ALERT_TYPE.WARNING,
                title: warning,
                button: 'Okay',
            });
            dispatch(clearWarnings());
        }
        if (error) {
            Dialog.show({
                type: ALERT_TYPE.DANGER,
                title: (error as Error).name,
                textBody: (error as Error).message,
                button: 'Okay',
            });
            dispatch(clearErrors());
        }
    }, [message, warning, error]);
    return (
        <HoldMenuProvider theme='dark' safeAreaInsets={insets}>
            <React.Fragment>
                {isAuthenticated ? <Main /> : <Auth />}
                {loading && (
                    <Spinner
                        visible={true}
                        cancelable={false}
                        animation='fade'
                        size='large'
                        color='white'
                        customIndicator={
                            <SkypeIndicator size={50} color='white' />
                        }
                        overlayColor='rgba(0,0,0,0.5)'
                    />
                )}
            </React.Fragment>
        </HoldMenuProvider>
    );
};

export default Root;
