import React, { useState } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

import SearchBar from './SearchBar';

interface NavbarProps {
    search: {
        searchQuery: string;
        setSearchQuery: Function;
    };
}

const Navbar: React.FC<NavbarProps> = ({ search }) => {
    const [showSearch, setShowSearch] = useState<boolean>(false);
    return showSearch ? (
        <SearchBar search={search} closeSearch={setShowSearch} />
    ) : (
        <View className='mx-5 flex-row items-center justify-between'>
            <Animatable.Image
                animation={'bounceIn'}
                className='w-10 h-10'
                source={require('assets/img/spark.png')}
            />
            <Text className='text-2xl text-white font-[Poppins-Medium]'>
                QuerySpark
            </Text>
            <Animatable.View animation={'bounceIn'}>
                <TouchableNativeFeedback
                    onPress={() => {
                        setShowSearch((prev) => !prev);
                    }}
                    background={TouchableNativeFeedback.Ripple('#FFF', true)}>
                    <View>
                        <Ion name='search' color='#ffffff' size={30} />
                    </View>
                </TouchableNativeFeedback>
            </Animatable.View>
        </View>
    );
};

export default Navbar;
