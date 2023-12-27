import React from 'react';
import { SkeletonLayout } from 'react-native-skeleton-loader-pulse';

const PulseLoading: React.FC = () => {
    return (
        <SkeletonLayout
            align='left'
            items={[
                {
                    height: 92,
                    width: 400,
                    marginTop: 16,
                    marginBottom: 16,
                    marginLeft: 16,
                    marginRight: 16,
                    borderRadius: 6,
                },
                {
                    height: 92.8,
                    width: 400,
                    marginTop: 16,
                    marginBottom: 16,
                    marginLeft: 16,
                    marginRight: 16,
                    borderRadius: 6,
                },
                {
                    height: 92,
                    width: 400,
                    marginTop: 16,
                    marginBottom: 16,
                    marginLeft: 16,
                    marginRight: 16,
                    borderRadius: 6,
                },
            ]}
        />
    );
};

export default PulseLoading;
