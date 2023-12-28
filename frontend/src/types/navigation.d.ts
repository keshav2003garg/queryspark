import type { NavigatorScreenParams } from '@react-navigation/native';
import type {
    BottomTabScreenProps,
    BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import type {
    StackScreenProps,
    StackNavigationProp,
} from '@react-navigation/stack';

export type AuthNativeStackParamList = {
    SignIn: undefined;
};
export type HomeStackParamList = {
    ChatHistory: undefined;
    Chat: undefined;
};
export type NewStackParamList = {
    Upload: undefined;
    Chating: undefined;
};
export type BottomTabParamList = {
    Home: NavigatorScreenParams<HomeTabParamList>;
    New: NavigatorScreenParams<NewTabParamList>;
    Account: undefined;
};

export type HomeScreenProps = BottomTabScreenProps<BottomTabParamList, 'Home'>;
export type NewScreenProps = BottomTabScreenProps<BottomTabParamList, 'New'>;
export type AccountScreenProps = BottomTabScreenProps<
    BottomTabParamList,
    'Account'
>;
export type ChatHistoryScreenProps = StackScreenProps<
    HomeStackParamList,
    'ChatHistory'
>;
export type ChatScreenProps = StackScreenProps<HomeStackParamList, 'Chat'>;
export type UploadScreenProps = StackScreenProps<NewStackParamList, 'Upload'>;
export type ChatingScreenProps = StackScreenProps<NewStackParamList, 'Chating'>;

export type HomeScreenNavigationProp = BottomTabNavigationProp<
    BottomTabParamList,
    'Home'
>;
export type NewScreenNavigationProp = BottomTabNavigationProp<
    BottomTabParamList,
    'New'
>;
export type AccountScreenNavigationProp = BottomTabNavigationProp<
    BottomTabParamList,
    'Account'
>;
export type ChatHistoryScreenNavigationProp = StackNavigationProp<
    HomeStackParamList,
    'ChatHistory'
>;
export type ChatScreenNavigationProp = StackNavigationProp<
    HomeStackParamList,
    'Chat'
>;
export type UploadScreenNavigationProp = StackNavigationProp<
    NewStackParamList,
    'Upload'
>;
export type ChatingScreenNavigationProp = StackNavigationProp<
    NewStackParamList,
    'Chating'
>;
