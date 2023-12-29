import { View, Text, Image } from 'react-native';

interface UserMessageProps {
    userPhoto: string;
    message: string;
}

const UserMessage: React.FC<UserMessageProps> = ({ message, userPhoto }) => {
    return (
        <View className='flex-row'>
            <View className='flex-1'></View>
            <View className='mt-5 flex-4 flex-row justify-end items-start'>
                <View className='px-4 py-2 rounded-lg rounded-tr-none bg-[#151515]'>
                    <Text className='text-base text-left text-white font-[Poppins-Regular]'>
                        {message}
                    </Text>
                </View>
                <Image
                    className='mx-2 w-8 h-8 rounded-full'
                    source={{ uri: userPhoto }}
                />
            </View>
        </View>
    );
};

export default UserMessage;
