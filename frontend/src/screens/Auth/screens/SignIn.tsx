import React from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

import { useAppDispatch } from 'hooks/redux.hooks';
import { googleSignIn, githubSignIn } from 'store/actions/auth.action';

const SignIn: React.FC = () => {
    const dispatch = useAppDispatch();
    return (
        <ImageBackground
            className='w-full h-full flex-1'
            source={require('assets/img/starter.png')}>
            <View className='flex-4 bg-transparent'></View>
            <View className='flex-2 mt-14 bg-transparent rounded-[25px]'>
                <View className='mx-8'>
                    <Text className='text-4xl text-[#f79a11] font-[Poppins-Medium]'>
                        Sign in
                    </Text>
                    <Text className='mt-4 text-sm text-white font-[Poppins-Light]'>
                        Sign in with any of your Google or GitHub Account
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            dispatch(googleSignIn());
                        }}>
                        <View className='mt-7 p-2.5 bg-white rounded-[50px] flex-row justify-center items-center'>
                            <Image
                                className='w-[30px] h-[30px] mx-[10px]'
                                source={require('assets/icons/google.png')}></Image>
                            <Text className='text-black text-base font-[Poppins-Medium]'>
                                Continue With Google
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            dispatch(githubSignIn());
                        }}>
                        <View className='mt-8 p-2.5 bg-white rounded-[50px] flex-row justify-center items-center'>
                            <Image
                                className='w-[30px] h-[30px] mx-[10px]'
                                source={require('assets/icons/github.png')}></Image>
                            <Text className='text-black text-base font-[Poppins-Medium]'>
                                Continue With GitHub
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default SignIn;
