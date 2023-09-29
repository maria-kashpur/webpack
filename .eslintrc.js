module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "airbnb",
        'airbnb-typescript',
        "plugin:react/recommended",
        "standard-with-typescript"
    ],
    parser: '@typescript-eslint/parser',
    overrides: [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        project: './tsconfig.json',
    },
    "plugins": [
        "react",
        '@typescript-eslint'
    ],
    root: true,
    "rules": {
      'no-console': 'off',
      'import/extensions': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'array',
          },
        ],
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'explicit',
            overrides: {
              accessors: 'explicit',
              constructors: 'off',
              methods: 'explicit',
              properties: 'explicit',
              parameterProperties: 'explicit',
            },
          },
        ],
        'max-lines-per-function': ['error', 40],
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
    }
}
