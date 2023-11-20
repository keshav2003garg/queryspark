import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs/src/types';

export type Item = {
    Icon: any;
    icon: string;
};

export interface TabButtonProps extends BottomTabBarButtonProps {
    item: Item;
}
