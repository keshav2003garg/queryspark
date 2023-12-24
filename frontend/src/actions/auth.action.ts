import { Dispatch } from '@reduxjs/toolkit';

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
        console.log(userInfo);
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
                revocationEndpoint:
                    `https://github.com/settings/connections/applications/${Config.GITHUB_CLIENT_ID}`,
            },
        };
        const result = await authorize(config);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};
