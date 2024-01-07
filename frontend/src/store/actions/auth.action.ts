import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { authorize } from 'react-native-app-auth';
import { ID, Query } from 'appwrite';
import Config from 'react-native-config';

import { account, database } from 'lib/appwrite';
import asyncHandler from 'handlers/async.handler';
import { loadingStart, loadingEnd } from './loading.action';
import { sendSuccess } from './alert.action';
import {
    GOOGLE_SIGN_IN,
    GITHUB_SIGN_IN,
    GOOGLE_SIGN_OUT,
} from 'store/constants/auth.constant';

import type { Dispatch } from '@reduxjs/toolkit';

export const googleSignIn = () =>
    asyncHandler(async (dispatch: Dispatch) => {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        loadingStart(dispatch);
        const googleCredential = auth.GoogleAuthProvider.credential(
            userInfo.idToken,
        );
        const user = await auth().signInWithCredential(googleCredential);
        let data;
        let isNewUser = false;
        if (user.additionalUserInfo?.isNewUser) {
            await account.create(
                userInfo.user.id,
                user.user?.email as string,
                userInfo.user.id,
                user.user.displayName as string,
            );
            const document = await database.createDocument(
                Config.APPWRITE_DATABASE_ID as string,
                Config.APPWRITE_USERS_COLLECTION_ID as string,
                ID.unique(),
                {
                    userID: userInfo.user.id,
                    name: user.user.displayName,
                    email: user.user.email,
                    photoURL: user.user.photoURL,
                    phoneNumber: user.user.phoneNumber,
                },
            );
            isNewUser = true;
            data = {
                id: document.$id,
                name: user.user.displayName,
                email: user.user.email,
                photoURL: user.user.photoURL,
                phoneNumber: user.user.phoneNumber,
            };
        } else {
            const document = await database.listDocuments(
                Config.APPWRITE_DATABASE_ID as string,
                Config.APPWRITE_USERS_COLLECTION_ID as string,
                [Query.equal('userID', userInfo.user.id)],
            );
            data = {
                userID: document.documents[0].$id,
                name: user.user.displayName,
                email: user.user.email,
                photoURL: user.user.photoURL,
                phoneNumber: user.user.phoneNumber,
            };
        }
        await account.createEmailSession(
            user.user?.email as string,
            userInfo.user.id,
        );
        dispatch({
            type: GOOGLE_SIGN_IN,
            payload: data,
        });
        loadingEnd(dispatch);
        sendSuccess(
            dispatch,
            isNewUser ? 'Registered successfully!' : 'Loggedin successfully!',
        );
    });

export const githubSignIn = () =>
    asyncHandler(async (dispatch: Dispatch) => {
        const authState = await authorize({
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
        });
        loadingStart(dispatch);
        const credential = auth.OIDCAuthProvider.credential(
            'queryspark',
            authState.accessToken,
        );
        const user = await auth().signInWithCredential(credential);
        dispatch({
            type: GITHUB_SIGN_IN,
            payload: user,
        });
        loadingEnd(dispatch);
    });

export const googleSignOut = () =>
    asyncHandler(async (dispatch: Dispatch) => {
        loadingStart(dispatch);
        await GoogleSignin.signOut();
        await account.deleteSession('current');
        dispatch({
            type: GOOGLE_SIGN_OUT,
        });
        loadingEnd(dispatch);
        sendSuccess(dispatch, 'Logged out successfully!');
    });
