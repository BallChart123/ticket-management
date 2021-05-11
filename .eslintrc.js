module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2020: true,
        jest: true
    },
    extends: 'airbnb-base',
    parserOptions: {
        ecmaVersion: 11
    },
    globals: {
        process: true
    },
    ignorePatterns: ['**/*.md'],
    rules: {
        'comma-spacing': ['error', { before: false, after: true }],
        'eol-last': ['error', 'always'],
        'no-multiple-empty-lines': ['error'],
        'no-new-symbol': 'error',
        'no-trailing-spaces': ['error'],
        'no-undef': ['error'],
        'no-unused-vars': ['error'],
        'object-curly-spacing': ['error', 'always'],
        'object-shorthand': 'error',
        'prefer-const': 2,
        'space-in-parens': ['error', 'never'],
        'lines-between-class-members': ['error', 'never'],
        'no-console': 'off',
        'max-len': ['error', { code: 120 }],
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'never'
            }
        ],
        strict: [2, 'never']
    }
};
