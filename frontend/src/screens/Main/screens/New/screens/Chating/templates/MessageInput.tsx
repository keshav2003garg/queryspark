import { View, TextInput } from 'react-native';
import FA from 'react-native-vector-icons/FontAwesome';

const MessageInput: React.FC = () => {
    return (
        <View className='py-1 w-[100%] absolute bottom-7 bg-black'>
            <View className='mx-4 pr-3 flex-row items-center rounded-lg bg-[#151515]'>
                <TextInput
                    className='px-3 text-lg flex-1'
                    placeholder='Type a message'
                    autoCapitalize='none'
                />
                <FA name='send' size={25} />
            </View>
        </View>
    );
};

export default MessageInput;
