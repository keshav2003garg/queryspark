import React, { useState } from 'react';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ion from 'react-native-vector-icons/Ionicons';

import type { ChatHistoryScreenNavigationProp } from 'types/navigation';

interface ChatListProps {
    chat: {
        chatID: string;
        title: string;
        description: string;
        pdfs: string[];
    };
}

const ChatList: React.FC<ChatListProps> = ({ chat }) => {
    const [modal, setModal] = useState<boolean>(false);
    const [lines, setLines] = useState<number>(2);
    const navigation = useNavigation<ChatHistoryScreenNavigationProp>();
    const handlePress = () => {
        setModal((prev) => !prev);
        setLines((prev) => (prev === 2 ? 10 : 2));
    };
    const reg = chat?.pdfs[0]
        .substring(chat?.pdfs[0].lastIndexOf('/') + 1)
        .replace(/%2F/g, '/')
        .match(/\/([^\/?]+)\?/);
    const pdfName = reg ? reg[1] : chat?.pdfs[0];
    return (
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('#3F3F3F', false)}
            onPress={() => {
                navigation.navigate('Chat');
            }}>
            <View className='m-4 p-3 bg-[#151515] rounded-md border-[#DEDEDE] border-[0.5px] flex-row justify-between'>
                <View className='flex-col'>
                    <Text className='text-xl text-white font-[Poppins-Medium]'>
                        {chat?.title}
                    </Text>
                    <Text
                        numberOfLines={lines}
                        className='w-[347px] text-sm text-clip text-white font-[Poppins-Regular]'>
                        {chat?.description}
                    </Text>
                    <View
                        style={
                            lines !== 2
                                ? { display: 'flex' }
                                : { display: 'none' }
                        }
                        className={`my-2 mt-3 flex-row justify-start items-center`}>
                        <Image
                            className='w-10 h-10'
                            source={require('assets/icons/pdf.png')}
                        />
                        <Text className='ml-4 text-sm text-white font-[Poppins-Regular]'>
                            {pdfName}
                        </Text>
                    </View>
                </View>
                <TouchableNativeFeedback
                    onPress={handlePress}
                    background={TouchableNativeFeedback.Ripple(
                        '#9F9F9F',
                        true,
                    )}>
                    <View className='h-7'>
                        <Ion
                            name={modal ? 'chevron-up' : 'chevron-down'}
                            color='#ffffff'
                            size={27}
                        />
                    </View>
                </TouchableNativeFeedback>
            </View>
        </TouchableNativeFeedback>
    );
};

export default ChatList;
