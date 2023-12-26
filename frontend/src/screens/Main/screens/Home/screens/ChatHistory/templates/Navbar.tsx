import React from 'react';
import { View, Text, Image } from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons';

const Navbar: React.FC = () => {
    return (
        <View className='mt-14 mx-5 flex-row items-center justify-between'>
            <Image
                className='w-10 h-10'
                source={require('assets/img/spark.png')}
            />
            <Text className='text-2xl text-white font-[Poppins-Medium]'>
                QuerySpark
            </Text>
            <Ion name='search' color='#ffffff' size={30} />
        </View>
    );
};

export default Navbar;
