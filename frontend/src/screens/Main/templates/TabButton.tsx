import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { TouchableNativeFeedback } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { TabButtonProps } from '../types/BottomTab';

const TabButton: React.FC<TabButtonProps> = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState?.selected;
    const viewRef = useRef() as React.RefObject<Animatable.View & View>;

    useEffect(() => {
        if (
            focused &&
            viewRef.current &&
            typeof viewRef.current.bounceIn === 'function'
        ) {
            viewRef.current.bounceIn(800);
        }
    }, [focused]);

    return (
        <TouchableNativeFeedback
            onPress={onPress}
            background={TouchableNativeFeedback.Ripple('#FFB243', true)}>
            <Animatable.View
                ref={viewRef}
                className='flex-1 flex-row justify-center items-center top-3'>
                <item.Icon
                    name={props.item.icon}
                    color={focused ? '#F79A11' : '#FFB243'}
                    size={40}
                />
            </Animatable.View>
        </TouchableNativeFeedback>
    );
};

export default TabButton;
