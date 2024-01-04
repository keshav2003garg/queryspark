import React from 'react';
import { View, Text, TouchableNativeFeedback, Linking } from 'react-native';

import { useAppDispatch } from 'hooks/redux.hooks';
import { googleSignOut } from 'store/actions/auth.action';
import sections from '../configs/sections.config';
import { Sheet } from '../configs/sheet.config';

import type { ISection, ISubSection } from '../types/section';

interface SectionProps {
    handleSheet: Function;
}

const Section: React.FC<SectionProps> = ({ handleSheet }) => {
    const dispatch = useAppDispatch();
    const handleOnPress = (key: string) => () => {
        if (key === 'Logout') {
            dispatch(googleSignOut());
        }
        if (key === 'Edit Profile') {
            handleSheet(Sheet.EditProfile);
        }
        if (key === 'Add API Key') {
            handleSheet(Sheet.AddApiKey);
        }
        if (key === 'My API Keys') {
            handleSheet(Sheet.MyApiKeys);
        }
        if (key === 'GPT Model') {
            handleSheet(Sheet.GPTModel);
        }
        if (key === 'Notification') {
            Linking.openSettings();
        }
        if (key === 'Report a Problem') {
            Linking.openURL('mailto:report@queryspark.tech');
        }
        if (key === 'Contact Support') {
            Linking.openURL('mailto:support@queryspark.tech');
        }
    };
    return sections.map((section: ISection) => (
        <View key={section.title} className='mb-2'>
            <Text className='ml-6 text-white text-lg font-[Poppins-Medium]'>
                {section.title}
            </Text>
            <View className='mx-6 my-2 p-5 px-4 bg-[#151515] rounded-md'>
                {section.subSections.map((subSection: ISubSection) => {
                    return (
                        <TouchableNativeFeedback
                            onPress={handleOnPress(subSection.title)}
                            key={subSection.title}>
                            <View className='px-3 py-2 flex-row justify-start items-center'>
                                <subSection.IconComponent
                                    name={subSection.iconName}
                                    size={subSection.size}
                                />
                                <Text className='mx-6 text-base font-[Poppins-Regular]'>
                                    {subSection.title}
                                </Text>
                            </View>
                        </TouchableNativeFeedback>
                    );
                })}
            </View>
        </View>
    ));
};

export default Section;
