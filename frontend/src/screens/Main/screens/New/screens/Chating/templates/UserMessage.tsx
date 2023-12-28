import { View, Text, Image } from 'react-native';

const UserMessage: React.FC = () => {
    return (
        <View className='flex-row'>
            <View className='flex-1'></View>
            <View className='mt-5 flex-4 flex-row justify-end items-start'>
                <View className='px-4 py-2 rounded-lg rounded-tr-none bg-[#151515]'>
                    <Text className='text-base text-left text-white font-[Poppins-Regular]'>
                        Hey, Can you help me with my PDF?
                    </Text>
                </View>
                <View className='mx-2 w-8 h-8 bg-white flex justify-center items-center rounded-full'>
                    <Image
                        className='w-5 h-5'
                        source={require('assets/img/spark.png')}
                    />
                </View>
            </View>
        </View>
    );
};

export default UserMessage;
