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
                title: 'Add API Key',
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
        ],
    },
    {
        title: 'Preferences',
        subSections: [
            {
                title: 'My API Keys',
                IconComponent: MCI,
                iconName: 'api',
                size: 30,
            },
            {
                title: 'Theme',
                IconComponent: MI,
                iconName: 'dark-mode',
                size: 30,
            },
            {
                title: 'GPT Model',
                IconComponent: MI,
                iconName: 'model-training',
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
