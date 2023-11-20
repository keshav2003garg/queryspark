import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs/src/types';

export type BottomTabParamList = {
    Chat: undefined;
    Add: undefined;
    Account: undefined;
};

export type Item = {
    Icon: any;
    icon: string;
};

export interface TabButtonProps extends BottomTabBarButtonProps {
    item: Item;
}
