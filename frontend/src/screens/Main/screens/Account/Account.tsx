import React, { useState, useCallback, useRef } from 'react';
import { View, ScrollView, BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

import UpperSection from './components/UpperSection';
import Section from './components/Section';
import BottomSheet from './components/BottomSheet';

import { Sheet } from './configs/sheet.config';

import type { AccountScreenProps } from 'types/navigation';

const Account: React.FC<AccountScreenProps> = ({ navigation }) => {
    const editProfile = useRef<BottomSheetModal>(null);
    const addApiKey = useRef<BottomSheetModal>(null);
    const myApiKeys = useRef<BottomSheetModal>(null);
    const gptModel = useRef<BottomSheetModal>(null);
    const [isShowing, setIsShowing] = useState<boolean>(false);
    const handleSheet = useCallback((sheet: Sheet) => {
        if (sheet === Sheet.EditProfile) {
            editProfile.current?.present();
        }
        if (sheet === Sheet.AddApiKey) {
            addApiKey.current?.present();
        }
        if (sheet === Sheet.MyApiKeys) {
            myApiKeys.current?.present();
        }
        if (sheet === Sheet.GPTModel) {
            gptModel.current?.present();
        }
    }, []);
    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                if (isShowing) {
                    editProfile.current?.close();
                    addApiKey.current?.close();
                    myApiKeys.current?.close();
                    gptModel.current?.close();
                    return true;
                } else if (!isShowing) {
                    navigation.goBack();
                    return true;
                }
            };
            BackHandler.addEventListener('hardwareBackPress', onBackPress);
            return () =>
                BackHandler.removeEventListener(
                    'hardwareBackPress',
                    onBackPress,
                );
        }, [editProfile, addApiKey, myApiKeys, gptModel, isShowing]),
    );
    return (
        <View className='h-[87%]'>
            <View className='flex-3'>
                <UpperSection />
            </View>
            <ScrollView className='flex-5'>
                <Section handleSheet={handleSheet} />
            </ScrollView>
            <BottomSheet
                bottomSheetRef={{
                    editProfile: editProfile,
                    addApiKey: addApiKey,
                    myApiKeys: myApiKeys,
                    gptModel: gptModel,
                }}
                setIsShowing={setIsShowing}
            />
        </View>
    );
};

export default Account;
