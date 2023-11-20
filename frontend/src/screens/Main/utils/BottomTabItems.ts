import MI from 'react-native-vector-icons/MaterialCommunityIcons';
import Ion from 'react-native-vector-icons/Ionicons';

import { Item } from '../types/BottomTab';

const TabItems: Array<Item> = [
    {
        Icon: Ion,
        icon: 'chatbox',
    },
    {
        Icon: Ion,
        icon: 'add-circle',
    },
    {
        Icon: MI,
        icon: 'account-box',
    },
];

export default TabItems;
