import { Dispatch } from '@reduxjs/toolkit';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';

export const googleSignIn = () => async (dispatch: Dispatch) => {
    try {
        await GoogleSignin.hasPlayServices();
        GoogleSignin.configure({
            webClientId: Config.GOOGLE_WEB_CLIENT_ID,
            offlineAccess: true,
        });
        const userInfo = await GoogleSignin.signIn();
        console.log(userInfo);
    } catch (error) {
        console.log(error);
    }
};
