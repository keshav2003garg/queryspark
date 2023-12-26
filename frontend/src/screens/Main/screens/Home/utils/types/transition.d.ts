import type {
    StackCardInterpolatedStyle,
    StackCardInterpolationProps,
} from '@react-navigation/stack';

export interface Transition<T extends StackCardInterpolationProps> {
    (props: T): StackCardInterpolatedStyle;
}
