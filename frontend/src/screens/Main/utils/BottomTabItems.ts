import MI from 'react-native-vector-icons/MaterialCommunityIcons';
import Ion from 'react-native-vector-icons/Ionicons';
import Oct from 'react-native-vector-icons/Octicons';

import type { Item } from '../types/BottomTab';

const TabItems: Array<Item> = [
    {
        Icon: Oct,
        icon: 'home',
    },
    {
        Icon: Ion,
        icon: 'add-circle',
    },
    {
        Icon: MI,
        icon: 'account-box-outline',
    },
];

export default TabItems;
