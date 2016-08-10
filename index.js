module.exports = {
    extends: 'airbnb',
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
    },
    plugins: [
        'react',
    ],
    globals: {},
    settings: {
        'import/resolver': {
            'babel-module-alias': {},
        },
    },
};
