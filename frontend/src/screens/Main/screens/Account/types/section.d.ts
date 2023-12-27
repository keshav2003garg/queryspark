import { IconProps } from '@types/react-native-vector-icons';

export interface ISubSection {
    title: string;
    IconComponent: any;
    iconName: string;
    size: number;
}

export interface ISection {
    title: string;
    subSections: ISubSection[];
}
