import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    ScrollView,
    TouchableNativeFeedback,
} from 'react-native';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import MI from 'react-native-vector-icons/MaterialIcons';
import Ion from 'react-native-vector-icons/Ionicons';
import FA from 'react-native-vector-icons/FontAwesome';

import { useAppDispatch } from 'hooks/redux.hooks';
import { googleSignOut } from 'store/actions/auth.action';

const Account: React.FC = () => {
    const dispatch = useAppDispatch();
    return (
        <View className='h-[87%]'>
            <ImageBackground
                className='w-full h-[100%] flex-2'
                source={require('assets/img/bg.png')}>
                <View className='p-5 w-36 h-36 absolute -bottom-1/3 left-36 bg-black flex justify-center items-center rounded-full'>
                    <Image
                        className='w-full h-full rounded-full '
                        source={require('assets/img/bg.png')}
                    />
                </View>
            </ImageBackground>
            <View className='flex-5'>
                <View className='w-full h-[97px] flex-col justify-end'>
                    <Text className='text-lg text-center text-[#f79a11] font-[Poppins-Regular]'>
                        Keshav Garg
                    </Text>
                </View>
                <View className='flex-row justify-between'>
                    <View className='ml-20'>
                        <Text className='text-2xl text-center text-[#E9A541] font-[Poppins-Regular]'>
                            155
                        </Text>
                        <Text className='text-base text-center text-[#E9A541] font-[Poppins-Regular]'>
                            Chats
                        </Text>
                    </View>
                    <View className='mr-16'>
                        <Text className='text-2xl text-center text-[#E9A541] font-[Poppins-Regular]'>
                            26
                        </Text>
                        <Text className='text-base text-center text-[#E9A541] font-[Poppins-Regular]'>
                            Document
                        </Text>
                    </View>
                </View>
                <View className={`my-5 border-b-2 border-[#151515]`}></View>
                <View className='flex-1'>
                    <ScrollView className='flex'>
                        <View className='mb-2'>
                            <Text className='ml-6 text-white text-lg font-[Poppins-Medium]'>
                                Account
                            </Text>
                            <View className='mx-6 my-2 p-5 bg-[#151515] rounded-md'>
                                <View className='m-2 flex-row justify-start items-center'>
                                    <MCI name='account-outline' size={30} />
                                    <Text className='mx-6 text-base font-[Poppins-Regular]'>
                                        Edit Profile
                                    </Text>
                                </View>
                                <View className='m-2 flex-row justify-start items-center'>
                                    <MCI name='api' size={30} />
                                    <Text className='mx-6 text-base font-[Poppins-Regular]'>
                                        API Key
                                    </Text>
                                </View>
                                <View className='m-2 flex-row justify-start items-center'>
                                    <Ion
                                        name='notifications-outline'
                                        size={27}
                                    />
                                    <Text className='mx-6 text-base font-[Poppins-Regular]'>
                                        Notification
                                    </Text>
                                </View>
                                <View className='m-2 flex-row justify-start items-center'>
                                    <MCI name='lock-outline' size={30} />
                                    <Text className='mx-6 text-base font-[Poppins-Regular]'>
                                        Privacy
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View className='mb-2'>
                            <Text className='ml-6 text-white text-lg font-[Poppins-Medium]'>
                                Support & Account
                            </Text>
                            <View className='mx-6 my-3 p-5 bg-[#151515] rounded-md'>
                                <View className='m-2 flex-row justify-start items-center'>
                                    <MCI name='key-outline' size={30} />
                                    <Text className='mx-6 text-base font-[Poppins-Regular]'>
                                        My API Keys
                                    </Text>
                                </View>
                                <View className='m-2 flex-row justify-start items-center'>
                                    <MCI name='help-circle-outline' size={30} />
                                    <Text className='mx-6 text-base font-[Poppins-Regular]'>
                                        Help
                                    </Text>
                                </View>
                                <View className='m-2 flex-row justify-start items-center'>
                                    <MCI name='information-outline' size={30} />
                                    <Text className='mx-6 text-base font-[Poppins-Regular]'>
                                        Terms & Policies
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View className='mb-2'>
                            <Text className='ml-6 text-white text-lg font-[Poppins-Medium]'>
                                Cache & Cellular
                            </Text>
                            <View className='mx-6 my-3 p-5 bg-[#151515] rounded-md'>
                                <View className='m-2 flex-row justify-start items-center'>
                                    <MCI name='delete-outline' size={30} />
                                    <Text className='mx-6 text-base font-[Poppins-Regular]'>
                                        Free up Space
                                    </Text>
                                </View>
                                <View className='m-2 flex-row justify-start items-center'>
                                    <MCI name='cellphone' size={30} />
                                    <Text className='mx-6 text-base font-[Poppins-Regular]'>
                                        Data Saver
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View className='mb-2'>
                            <Text className='ml-6 text-white text-lg font-[Poppins-Medium]'>
                                Actions
                            </Text>
                            <View className='mx-6 my-3 p-5 bg-[#151515] rounded-md'>
                                <View className='m-2 flex-row justify-start items-center'>
                                    <MCI name='flag-outline' size={30} />
                                    <Text className='mx-6 text-base font-[Poppins-Regular]'>
                                        Report a Problem
                                    </Text>
                                </View>
                                <View className='m-2 flex-row justify-start items-center'>
                                    <FA name='support' size={25} />
                                    <Text className='mx-7 text-base font-[Poppins-Regular]'>
                                        Contact Support
                                    </Text>
                                </View>
                                <TouchableNativeFeedback
                                    onPress={() => {
                                        dispatch(googleSignOut());
                                    }}>
                                    <View className='m-2 flex-row justify-start items-center'>
                                        <MI name='logout' size={30} />
                                        <Text className='mx-6 text-base font-[Poppins-Regular]'>
                                            Logout
                                        </Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

export default Account;
