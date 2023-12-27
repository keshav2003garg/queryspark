import FA from 'react-native-vector-icons/FontAwesome';
import Ion from 'react-native-vector-icons/Ionicons';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import MI from 'react-native-vector-icons/MaterialIcons';

import type { ISection } from '../types/section';

const sections: Array<ISection> = [
    {
        title: 'Account',
        subSections: [
            {
                title: 'Edit Profile',
                IconComponent: MCI,
                iconName: 'account-outline',
                size: 30,
            },
            {
                title: 'API Key',
                IconComponent: MCI,
                iconName: 'api',
                size: 30,
            },
            {
                title: 'Notification',
                IconComponent: Ion,
                iconName: 'notifications-outline',
                size: 27,
            },
            {
                title: 'Privacy',
                IconComponent: MCI,
                iconName: 'lock-outline',
                size: 30,
            },
        ],
    },
    {
        title: 'Support & Account',
        subSections: [
            {
                title: 'My API Keys',
                IconComponent: MCI,
                iconName: 'key-outline',
                size: 30,
            },
            {
                title: 'Help',
                IconComponent: MCI,
                iconName: 'help-circle-outline',
                size: 30,
            },
            {
                title: 'Terms & Policies',
                IconComponent: MCI,
                iconName: 'information-outline',
                size: 30,
            },
        ],
    },
    {
        title: 'Cache & Cellular',
        subSections: [
            {
                title: 'Free up Space',
                IconComponent: MCI,
                iconName: 'delete-outline',
                size: 30,
            },
            {
                title: 'Data Saver',
                IconComponent: MCI,
                iconName: 'cellphone',
                size: 30,
            },
        ],
    },
    {
        title: 'Actions',
        subSections: [
            {
                title: 'Report a Problem',
                IconComponent: MCI,
                iconName: 'flag-outline',
                size: 30,
            },
            {
                title: 'Contact Support',
                IconComponent: FA,
                iconName: 'support',
                size: 25,
            },
            {
                title: 'Logout',
                IconComponent: MI,
                iconName: 'logout',
                size: 30,
            },
        ],
    },
];

export default sections;
