import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text } from 'react-native';
import {
    BottomSheetModal,
    BottomSheetBackdrop,
    BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';

import EditProfile from './templates/EditProfile';
import AddApiKey from './templates/AddApiKey';
import MyApiKeys from './templates/MyApiKeys';
import GPTModel from './templates/GPTModel';

interface BottomSheetProps {
    bottomSheetRef: {
        editProfile: React.RefObject<BottomSheetModal>;
        addApiKey: React.RefObject<BottomSheetModal>;
        myApiKeys: React.RefObject<BottomSheetModal>;
        gptModel: React.RefObject<BottomSheetModal>;
    };
    setIsShowing: Function;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
    bottomSheetRef,
    setIsShowing,
}) => {
    const { editProfile, addApiKey, myApiKeys, gptModel } = bottomSheetRef;
    const snapPoints = useMemo(() => ['80%', '95%'], []);
    const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => {
        return (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
            />
        );
    }, []);
    return (
        <React.Fragment>
            <BottomSheetModal
                ref={editProfile}
                index={0}
                snapPoints={snapPoints}
                backgroundStyle={{ backgroundColor: '#0E0E0E' }}
                backdropComponent={renderBackdrop}
                onChange={(idx) => {
                    setIsShowing(idx < 0 ? false : true);
                }}
                handleIndicatorStyle={{ backgroundColor: 'white' }}>
                <EditProfile />
            </BottomSheetModal>
            <BottomSheetModal
                ref={addApiKey}
                index={0}
                snapPoints={snapPoints}
                backgroundStyle={{ backgroundColor: '#0E0E0E' }}
                backdropComponent={renderBackdrop}
                onChange={(idx) => {
                    setIsShowing(idx < 0 ? false : true);
                }}
                handleIndicatorStyle={{ backgroundColor: 'white' }}>
                <AddApiKey />
            </BottomSheetModal>
            <BottomSheetModal
                ref={myApiKeys}
                index={0}
                snapPoints={snapPoints}
                backgroundStyle={{ backgroundColor: '#0E0E0E' }}
                backdropComponent={renderBackdrop}
                onChange={(idx) => {
                    setIsShowing(idx < 0 ? false : true);
                }}
                handleIndicatorStyle={{ backgroundColor: 'white' }}>
                <MyApiKeys />
            </BottomSheetModal>
            <BottomSheetModal
                ref={gptModel}
                index={0}
                snapPoints={snapPoints}
                backgroundStyle={{ backgroundColor: '#0E0E0E' }}
                backdropComponent={renderBackdrop}
                onChange={(idx) => {
                    setIsShowing(idx < 0 ? false : true);
                }}
                handleIndicatorStyle={{ backgroundColor: 'white' }}>
                <GPTModel />
            </BottomSheetModal>
        </React.Fragment>
    );
};

export default BottomSheet;
