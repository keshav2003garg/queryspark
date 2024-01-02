import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { authorize } from 'react-native-app-auth';
import { ID, Query } from 'appwrite';
import Config from 'react-native-config';

import { account, database } from 'lib/appwrite';
import asyncHandler from 'utils/async.handler';
import {
    GOOGLE_SIGN_IN__REQUEST,
    GOOGLE_SIGN_IN__SUCCESS,
    GOOGLE_SIGN_IN__FAILURE,
    GITHUB_SIGN_IN__REQUEST,
    GITHUB_SIGN_IN__SUCCESS,
    GITHUB_SIGN_IN__FAILURE,
    GOOGLE_SIGN_OUT__REQUEST,
    GOOGLE_SIGN_OUT__SUCCESS,
    GOOGLE_SIGN_OUT__FAILURE,
} from 'store/constants/auth.constant';
import { SUCCESS_HANDLER } from 'store/constants/alert.constant';

import type { Dispatch } from '@reduxjs/toolkit';

export const googleSignIn = () =>
    asyncHandler(
        async (dispatch: Dispatch) => {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            dispatch({
                type: GOOGLE_SIGN_IN__REQUEST,
            });
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
                type: GOOGLE_SIGN_IN__SUCCESS,
                payload: data,
            });
            dispatch({
                type: SUCCESS_HANDLER,
                payload: isNewUser
                    ? 'Registered successfully!'
                    : 'Loggedin successfully!',
            });
        },
        { EXCEPTION_HANDLER: GOOGLE_SIGN_IN__FAILURE },
    );

export const githubSignIn = () =>
    asyncHandler(
        async (dispatch: Dispatch) => {
            const config = {
                redirectUrl: 'com.queryspark.auth://oauthredirect',
                clientId: Config.GITHUB_CLIENT_ID as string,
                clientSecret: Config.GITHUB_CLIENT_SECRET as string,
                scopes: [],
                additionalHeaders: { Accept: 'application/json' },
                serviceConfiguration: {
                    authorizationEndpoint:
                        'https://github.com/login/oauth/authorize',
                    tokenEndpoint:
                        'https://github.com/login/oauth/access_token',
                    revocationEndpoint: `https://github.com/settings/connections/applications/${Config.GITHUB_CLIENT_ID}`,
                },
            };
            const authState = await authorize(config);
            dispatch({
                type: GITHUB_SIGN_IN__REQUEST,
            });
            const credential = auth.OIDCAuthProvider.credential(
                'queryspark',
                authState.accessToken,
            );
            const user = await auth().signInWithCredential(credential);
            dispatch({
                type: GITHUB_SIGN_IN__SUCCESS,
                payload: user,
            });
        },
        { EXCEPTION_HANDLER: GITHUB_SIGN_IN__FAILURE },
    );

export const googleSignOut = () =>
    asyncHandler(
        async (dispatch: Dispatch) => {
            dispatch({
                type: GOOGLE_SIGN_OUT__REQUEST,
            });
            await GoogleSignin.signOut();
            await account.deleteSession('current');
            dispatch({
                type: GOOGLE_SIGN_OUT__SUCCESS,
            });
        },
        {
            EXCEPTION_HANDLER: GOOGLE_SIGN_OUT__FAILURE,
            message: 'Logged out successfully!',
        },
    );
