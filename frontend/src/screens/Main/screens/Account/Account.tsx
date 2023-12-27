import React from 'react';
import { View, ScrollView } from 'react-native';

import UpperSection from './components/UpperSection';
import Section from './components/Section';

const Account: React.FC = () => {
    return (
        <View className='h-[87%]'>
            <View className='flex-4'>
                <UpperSection />
            </View>
            <ScrollView className='flex-5'>
                <Section />
            </ScrollView>
        </View>
    );
};

export default Account;
