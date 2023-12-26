import { Animated } from 'react-native';

import {
    StackCardInterpolatedStyle,
    StackCardInterpolationProps,
} from '@react-navigation/stack';

export function forSlide({
    current,
    next,
    inverted,
    layouts: { screen },
}: StackCardInterpolationProps): StackCardInterpolatedStyle {
    const progress = Animated.add(
        current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        }),
        next
            ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                  extrapolate: 'clamp',
              })
            : 0,
    );

    return {
        cardStyle: {
            transform: [
                {
                    translateX: Animated.multiply(
                        progress.interpolate({
                            inputRange: [0, 1, 2],
                            outputRange: [screen.width, 0, screen.width * -0.3],
                            extrapolate: 'clamp',
                        }),
                        inverted,
                    ),
                },
            ],
        },
    };
}
