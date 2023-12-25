import {
    GOOGLE_SIGN_IN__REQUEST,
    GOOGLE_SIGN_IN__SUCCESS,
    GOOGLE_SIGN_IN__FAILURE,
    GOOGLE_SIGN_OUT__REQUEST,
    GOOGLE_SIGN_OUT__SUCCESS,
    GOOGLE_SIGN_OUT__FAILURE,
} from 'constants/auth.constant';

import { Dispatch } from '@reduxjs/toolkit';
import { account, database } from 'lib/appwrite';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { authorize } from 'react-native-app-auth';
import { ID, Query } from 'appwrite';
import Config from 'react-native-config';

export const googleSignIn = () => async (dispatch: Dispatch) => {
    try {
        await GoogleSignin.hasPlayServices();
        GoogleSignin.configure({
            webClientId: Config.GOOGLE_CLIENT_ID as string,
            offlineAccess: true,
        });
        const userInfo = await GoogleSignin.signIn();
        dispatch({
            type: GOOGLE_SIGN_IN__REQUEST,
        });
        const googleCredential = auth.GoogleAuthProvider.credential(
            userInfo.idToken,
        );
        const user = await auth().signInWithCredential(googleCredential);
        let data;
        if (user.additionalUserInfo?.isNewUser) {
            await account.create(
                userInfo.user.id,
                user.user?.email as string,
                userInfo.user.id,
                user.user.displayName as string,
            );
            const document = await database.createDocument(
                '65889abb6041fa41ca2e',
                '65889ad60553549048df',
                ID.unique(),
                {
                    userID: userInfo.user.id,
                    name: user.user.displayName,
                    email: user.user.email,
                    photoURL: user.user.photoURL,
                    phoneNumber: user.user.phoneNumber,
                },
            );
            data = {
                message: 'Registered successfully!',
                user: {
                    id: document.$id,
                    name: user.user.displayName,
                    email: user.user.email,
                    photoURL: user.user.photoURL,
                    phoneNumber: user.user.phoneNumber,
                },
            };
        } else {
            const document = await database.listDocuments(
                '65889abb6041fa41ca2e',
                '65889ad60553549048df',
                [Query.equal('userID', userInfo.user.id)],
            );
            data = {
                message: 'Loggedin successfully!',
                user: {
                    id: document.documents[0].$id,
                    name: user.user.displayName,
                    email: user.user.email,
                    photoURL: user.user.photoURL,
                    phoneNumber: user.user.phoneNumber,
                },
            };
        }
        await account.createEmailSession(
            user.user?.email as string,
            userInfo.user.id,
        );
        dispatch({
            type: GOOGLE_SIGN_IN__SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GOOGLE_SIGN_IN__FAILURE,
            payload: error,
        });
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

export const googleSignOut = () => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: GOOGLE_SIGN_OUT__REQUEST,
        });
        await GoogleSignin.signOut();
        await account.deleteSession('current');
        const data = {
            message: 'Logout successfully!',
        };
        dispatch({
            type: GOOGLE_SIGN_OUT__SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GOOGLE_SIGN_OUT__FAILURE,
            payload: error,
        });
        console.log(error);
    }
};
