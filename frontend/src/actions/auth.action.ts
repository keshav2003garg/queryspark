import { Dispatch } from '@reduxjs/toolkit';

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { authorize } from 'react-native-app-auth';
import Config from 'react-native-config';

export const googleSignIn = () => async (dispatch: Dispatch) => {
    try {
        await GoogleSignin.hasPlayServices();
        GoogleSignin.configure({
            webClientId: Config.GOOGLE_CLIENT_ID as string,
            offlineAccess: true,
        });
        const userInfo = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(
            userInfo.idToken,
        );
        const user = await auth().signInWithCredential(googleCredential);
        console.log(user);
    } catch (error) {
        console.log(error);
    }
};

export const githubSignIn = () => async (dispatch: Dispatch) => {
    try {
        const config = {
            redirectUrl: 'com.queryspark.auth://oauthredirect',
            clientId: Config.GITHUB_CLIENT_ID as string,
            clientSecret: Config.GITHUB_CLIENT_SECRET as string,
            scopes: [],
            additionalHeaders: { Accept: 'application/json' },
            serviceConfiguration: {
                authorizationEndpoint:
                    'https://github.com/login/oauth/authorize',
                tokenEndpoint: 'https://github.com/login/oauth/access_token',
                revocationEndpoint: `https://github.com/settings/connections/applications/${Config.GITHUB_CLIENT_ID}`,
            },
        };
        const authState = await authorize(config);
        const credential = auth.OIDCAuthProvider.credential(
            'queryspark',
            authState.accessToken,
        );
        const user = await auth().signInWithCredential(credential);
        console.log(user);
    } catch (error) {
        console.log(error);
    }
};
