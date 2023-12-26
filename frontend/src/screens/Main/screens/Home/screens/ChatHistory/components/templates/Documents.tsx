import React from 'react';
import { View, Text, Image } from 'react-native';

const Documents: React.FC<{ noc: number }> = ({ noc }) => {
    return (
        <View
            style={noc !== 2 ? { display: 'flex' } : { display: 'none' }}
            className={`my-2 mt-3 flex-row justify-start items-center`}>
            <Image
                className='w-10 h-10'
                source={require('assets/icons/pdf.png')}
            />
            <Text className='ml-4 text-sm text-white font-[Poppins-Regular]'>
                McKinney Rice LR Test Document Pdf
            </Text>
        </View>
    );
};

export default Documents;
