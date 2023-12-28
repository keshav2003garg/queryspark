module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        'nativewind/babel',
        'react-native-paper/babel',
        'react-native-reanimated/plugin',
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: [
                    '.ios.js',
                    '.android.js',
                    '.js',
                    '.ts',
                    '.tsx',
                    '.json',
                ],
            },
        ],
    ],
};
