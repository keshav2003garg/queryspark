import React from 'react';
import { View } from 'react-native';
import { SkeletonItem } from 'react-native-skeleton-loader-pulse';

const AIMessagePulseLoading: React.FC = () => {
    return (
        <View className='mt-5 flex-row'>
            <SkeletonItem
                height={32}
                width={32}
                marginLeft={8}
                marginRight={8}
                borderRadius={9999}
            />
            <SkeletonItem height={62.4} width={290.4} borderRadius={8} />
        </View>
    );
};

export default AIMessagePulseLoading;
