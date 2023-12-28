import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Progress from 'react-native-progress';

import type { UploadState } from '../types/uploadState';

interface UploadingProps {
    upload: UploadState;
}

const Uploading: React.FC<UploadingProps> = ({ upload }) => {
    return (
        <View className='flex-1'>
            <LottieView
                style={{ flex: 3 }}
                source={require('assets/animations/uploading.json')}
                autoPlay={true}
            />
            <View className='flex-2 justify-center items-center relative bottom-28'>
                <Progress.Circle
                    animated={true}
                    indeterminate={!upload.uploading}
                    color='#F79A11'
                    borderWidth={5}
                    size={200}
                    endAngle={1}
                    thickness={10}
                    showsText={true}
                    textStyle={{ fontSize: 30, fontWeight: 'bold' }}
                    progress={upload.progress}
                />
            </View>
        </View>
    );
};

export default Uploading;
