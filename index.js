module.exports = {
    extends: [
        'eslint-config-airbnb',
    ].map(require.resolve),
    env: {
        browser: true,
        node: true,
        mocha: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            forOf: true,
            jsx: true,
            es6: true,
            experimentalObjectRestSpread: true,
        },
    },
    rules: {
        indent: [
            2,
            4,
            {
                SwitchCase: 1,
            },
        ],
        'react/jsx-indent': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-indent-props': 0,
        'no-use-before-define': 0,
        'import/prefer-default-export': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-no-bind': 0,
    },
    plugins: [
        'react',
        'graphql',
    ],
    globals: {},
    settings: {
        'import/resolver': {
            'babel-module': {},
        },
    },
};
