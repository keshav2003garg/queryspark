import React, { useState } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import { Searchbar } from 'react-native-paper';
import MI from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

interface SearchBarProps {
    closeSearch: Function;
    search: {
        searchQuery: string;
        setSearchQuery: Function;
    };
}

const SearchBar: React.FC<SearchBarProps> = ({ closeSearch, search }) => {
    const { searchQuery, setSearchQuery } = search;
    return (
        <View className='mx-5 flex-row items-center justify-between'>
            <Animatable.Image
                animation={'bounceIn'}
                className='w-10 h-10'
                source={require('assets/img/spark.png')}
            />
            <Searchbar
                autoFocus={true}
                placeholder='Search Chat'
                className='h-[54px] w-[70%] border-[0.55px] border-[#D8D8D8] rounded-xl bg-[#000] text-white'
                inputStyle={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 15,
                    color: '#ffffff',
                }}
                value={searchQuery}
                onChangeText={(text) => {
                    setSearchQuery(text);
                }}
                selectionColor='#5E5E5E'
                iconColor='#5E5E5E'
                placeholderTextColor='#5E5E5E'
            />
            <Animatable.View animation={'bounceIn'}>
                <TouchableNativeFeedback
                    onPress={() => {
                        closeSearch((prev: any) => !prev);
                        setSearchQuery('');
                    }}
                    background={TouchableNativeFeedback.Ripple('#FFF', true)}>
                    <View>
                        <MI name='cancel' color='#ffffff' size={35} />
                    </View>
                </TouchableNativeFeedback>
            </Animatable.View>
        </View>
    );
};

export default SearchBar;
