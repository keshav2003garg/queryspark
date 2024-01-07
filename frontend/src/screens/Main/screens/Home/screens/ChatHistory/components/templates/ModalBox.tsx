import React, { useState } from 'react';
import { View, Text, TextInput, TouchableNativeFeedback } from 'react-native';
import Modal from 'react-native-modal';
import Feather from 'react-native-vector-icons/Feather';
import MI from 'react-native-vector-icons/MaterialIcons';

import { useAppDispatch } from 'hooks/redux.hooks';
import { updateChatTitle, deleteChat } from 'store/actions/chat.action';

interface ModalBoxProps {
    isVisible: {
        editTitle: boolean;
        delete: boolean;
    };
    setVisible: Function;
    chatID: string;
}

const ModalBox: React.FC<ModalBoxProps> = ({
    isVisible,
    setVisible,
    chatID,
}) => {
    const [title, setTitle] = useState<string>('');
    const dispatch = useAppDispatch();
    const hideTitle = () => {
        setVisible((prev: any) => ({
            ...prev,
            editTitle: false,
        }));
    };
    const hideDelete = () => {
        setVisible((prev: any) => ({
            ...prev,
            delete: false,
        }));
    };
    const handleUpdate = () => {
        if (title.length) {
            hideTitle();
            dispatch(updateChatTitle(chatID, title));
            setTitle('');
        }
    };
    const handleDelete = () => {
        hideDelete();
        dispatch(deleteChat(chatID));
    };
    return (
        <React.Fragment>
            <Modal
                isVisible={isVisible.editTitle}
                onBackdropPress={hideTitle}
                onBackButtonPress={hideTitle}>
                <View className='bg-[#0E0E0E] rounded-3xl'>
                    <View className='mx-6 flex-row justify-between items-center'>
                        <View className='mt-5 pb-[12px]'>
                            <Text className='text-xl font-[Poppins-Medium]'>
                                Edit Title
                            </Text>
                        </View>
                        <TouchableNativeFeedback
                            onPress={hideTitle}
                            background={TouchableNativeFeedback.Ripple(
                                '#FBCF8F',
                                true,
                            )}>
                            <View>
                                <MI name='cancel' size={30} color='#F79A11' />
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View className='border-b-2 border-[#272727]'></View>
                    <View className='mx-8 my-4 p-2 py-4 flex-row items-center bg-[#272727] rounded-2xl'>
                        <View className='mx-2 mr-5'>
                            <Feather name='edit' size={35} color='#F79A11' />
                        </View>
                        <View className='flex-1 justify-center'>
                            <Text className='text-base text-[#888888] font-[Poppins-Regular]'>
                                Title
                            </Text>
                            <TextInput
                                style={{
                                    margin: 0,
                                    padding: 0,
                                    height: 25,
                                    fontSize: 20,
                                }}
                                placeholder='Enter your Title'
                                placeholderTextColor='#3D3D3D'
                                value={title}
                                selectionColor='#F7B24B'
                                inputMode='text'
                                onChangeText={(text) => {
                                    setTitle(text);
                                }}
                            />
                        </View>
                    </View>
                    <TouchableNativeFeedback
                        onPress={handleUpdate}
                        background={TouchableNativeFeedback.Ripple(
                            '#FBCF8F',
                            false,
                        )}>
                        <View className='mx-8 mt-3 mb-6 py-3 bg-[#F79A11] rounded-xl'>
                            <Text className='text-white text-center text-base font-[Poppins-Medium]'>
                                Update
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </Modal>
            <Modal
                isVisible={isVisible.delete}
                onBackdropPress={hideDelete}
                onBackButtonPress={hideDelete}>
                <View className='bg-[#0E0E0E] rounded-3xl'>
                    <View className='mt-5 pb-[12px]'>
                        <Text className='text-xl text-center font-[Poppins-Medium]'>
                            Delete
                        </Text>
                    </View>
                    <View className='my-2 pb-[12px]'>
                        <Text className='text-base text-center font-[Poppins-Regular]'>
                            Do you realy want to delete this chat?
                        </Text>
                    </View>
                    <View className='flex-row justify-around items-center'>
                        <TouchableNativeFeedback
                            onPress={hideDelete}
                            background={TouchableNativeFeedback.Ripple(
                                '#FBCF8F',
                                false,
                            )}>
                            <View className='w-2/5 mx-8 mb-6 py-3 bg-[#F79A11] rounded-xl'>
                                <Text className='text-white text-center text-base font-[Poppins-Medium]'>
                                    No
                                </Text>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                            onPress={handleDelete}
                            background={TouchableNativeFeedback.Ripple(
                                '#FBCF8F',
                                false,
                            )}>
                            <View className='w-2/5 mx-8 mb-6 py-3 bg-[#F79A11] rounded-xl'>
                                <Text className='text-white text-center text-base font-[Poppins-Medium]'>
                                    Yes
                                </Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </Modal>
        </React.Fragment>
    );
};

export default ModalBox;
