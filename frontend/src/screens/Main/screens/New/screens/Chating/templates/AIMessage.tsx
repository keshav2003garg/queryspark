import { View, Text, Image } from 'react-native';

interface AIMessageProps {
    message: string;
}

const AIMessage: React.FC<AIMessageProps> = ({ message }) => {
    return (
        <View className='flex-row'>
            <View className='mt-5 flex-4 flex-row justify-start items-start'>
                <View className='mx-2 w-8 h-8 bg-white flex justify-center items-center rounded-full'>
                    <Image
                        className='w-5 h-5'
                        source={require('assets/img/spark-flip.png')}
                    />
                </View>
                <View className='px-4 py-2 rounded-lg rounded-tl-none bg-[#151515]'>
                    <Text className='text-base text-left text-white font-[Poppins-Regular]'>
                        {message}
                    </Text>
                </View>
            </View>
            <View className='flex-1'></View>
        </View>
    );
};

export default AIMessage;
