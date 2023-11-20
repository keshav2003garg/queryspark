import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableNativeFeedback,
} from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons';

const Chats: React.FC = () => {
    return (
        <View>
            <Navbar />
            <View className='mt-7'>
                <Text className='mx-4 text-lg text-white font-[Poppins-Medium]'>
                    Chat History
                </Text>
                <View className='h-[85%]'>
                    <ScrollView>
                        <ChatList />
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

const Navbar: React.FC = () => {
    return (
        <View className='mt-14 mx-5 flex-row items-center justify-between'>
            <Image
                className='w-10 h-10'
                source={require('../../../assets/img/spark.png')}
            />
            <Text className='text-2xl text-white font-[Poppins-Medium]'>
                QuerySpark
            </Text>
            <Ion name='search' color='#ffffff' size={30} />
        </View>
    );
};

const ChatList: React.FC = () => {
    const [lines, setLines] = React.useState<number>(2);
    const handlePress = () => setLines(lines === 2 ? 10 : 2);
    return (
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('#D0D0D0', false)}
            onPress={handlePress}>
            <View className='m-4 p-3 bg-[#151515] rounded-md border-[#DEDEDE] border-[0.5px] flex-row justify-between'>
                <View className='flex-col'>
                    <Title />
                    <Description noc={lines} />
                    <Documents noc={lines} />
                </View>
                <Ion name='chevron-down' color='#ffffff' size={27} />
            </View>
        </TouchableNativeFeedback>
    );
};

const Title: React.FC = () => {
    return (
        <Text className='text-xl text-white font-[Poppins-Medium]'>
            McKinney Rice LR Test
        </Text>
    );
};
const Description: React.FC<{ noc: number }> = ({ noc }) => {
    return (
        <Text
            numberOfLines={noc ? noc : 2}
            className='w-[347px] text-sm text-clip text-white font-[Poppins-Regular]'>
            This chat is a text-based interaction between you and me, a language
            model created by OpenAI called GPT-3.5. I'm here to assist you by
            providing information, answering questions, generating text based on
            prompts, and engaging in conversations on a wide range of topics.
            Please feel free to ask me anything or let me know how I can help
            you!
        </Text>
    );
};
const Documents: React.FC<{ noc: number }> = ({ noc }) => {
    return (
        <View
            style={noc !== 2 ? { display: 'flex' } : { display: 'none' }}
            className={`my-2 mt-3 flex-row justify-start items-center`}>
            <Image
                className='w-10 h-10'
                source={require('../../../assets/icons/pdf.png')}
            />
            <Text className='ml-4 text-sm text-white font-[Poppins-Regular]'>
                McKinney Rice LR Test Document Pdf
            </Text>
        </View>
    );
};

export default Chats;
