import React, { useState } from 'react';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';
import {
    BottomSheetTextInput,
    BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import Feather from 'react-native-vector-icons/Feather';
import Ant from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import { useAppSelector } from 'hooks/redux.hooks';

const EditProfile: React.FC = () => {
    const { user } = useAppSelector((state) => state.user);
    const [profile, setProfile] = useState({
        name: user.name,
        email: user.email,
        phone: user.phoneNumber,
    });
    return (
        <View className='flex-1'>
            <View className='mt-5 pb-[12px]'>
                <Text className='text-xl font-[Poppins-Medium] ml-5'>
                    Edit Profile
                </Text>
            </View>
            <View className='border-b-2 border-[#272727]'></View>
            <BottomSheetScrollView>
                <View className='mt-5 flex-row justify-center'>
                    <View className='w-40 h-40 rounded-full border-8 border-white'>
                        <Image
                            source={{ uri: user.photoURL }}
                            className='w-full h-full rounded-full'
                        />
                    </View>
                    <View className='w-14 h-14 bg-white rounded-full flex justify-center items-center absolute top-32'>
                        <View className='w-12 h-12 bg-[#F79A11] rounded-full flex justify-center items-center'>
                            <Feather name='edit-2' color={'white'} size={25} />
                        </View>
                    </View>
                </View>
                <View className='mx-8 mt-16 mb-4 p-2 py-4 flex-row items-center bg-[#272727] rounded-2xl'>
                    <View className='mx-2 mr-5'>
                        <Ant name='user' size={35} color='#F79A11' />
                    </View>
                    <View className='flex-1 justify-center'>
                        <Text className='text-base text-[#888888] font-[Poppins-Regular]'>
                            Name
                        </Text>
                        <BottomSheetTextInput
                            style={{
                                margin: 0,
                                padding: 0,
                                height: 25,
                                fontSize: 20,
                            }}
                            value={profile.name}
                            selectionColor='#F7B24B'
                            onChangeText={(text) => {
                                setProfile((prev: any) => ({
                                    ...prev,
                                    name: text,
                                }));
                            }}
                        />
                    </View>
                </View>
                <View className='mx-8 my-4 p-2 py-4 flex-row items-center bg-[#272727] rounded-2xl'>
                    <View className='mx-2 mr-5'>
                        <Entypo name='email' size={35} color='#F79A11' />
                    </View>
                    <View className='flex-1 justify-center'>
                        <Text className='text-base text-[#888888] font-[Poppins-Regular]'>
                            Email
                        </Text>
                        <BottomSheetTextInput
                            editable={false}
                            style={{
                                margin: 0,
                                padding: 0,
                                height: 25,
                                fontSize: 20,
                            }}
                            inputMode='email'
                            value={profile.email}
                            selectionColor='#F7B24B'
                        />
                    </View>
                </View>
                <View className='mx-8 my-4 p-2 py-4 flex-row items-center bg-[#272727] rounded-2xl'>
                    <View className='mx-2 mr-5'>
                        <Feather name='phone' size={35} color='#F79A11' />
                    </View>
                    <View className='flex-1 justify-center'>
                        <Text className='text-base text-[#888888] font-[Poppins-Regular]'>
                            Phone Number
                        </Text>
                        <BottomSheetTextInput
                            style={{
                                margin: 0,
                                padding: 0,
                                height: 25,
                                fontSize: 20,
                            }}
                            placeholder='Enter your Phone Number'
                            placeholderTextColor='#3D3D3D'
                            value={profile.phone}
                            selectionColor='#F7B24B'
                            inputMode='tel'
                            onChangeText={(text) => {
                                setProfile((prev: any) => ({
                                    ...prev,
                                    phone: text,
                                }));
                            }}
                        />
                    </View>
                </View>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple(
                        '#D0D0D0',
                        false,
                    )}>
                    <View className='mx-6 mt-3 py-3 bg-[#F79A11] rounded-xl'>
                        <Text className='text-white text-center text-base font-[Poppins-Medium]'>
                            Update
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </BottomSheetScrollView>
        </View>
    );
};

export default EditProfile;
