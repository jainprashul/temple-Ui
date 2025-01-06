module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:react/recommended",
    'plugin:react-hooks/recommended',
  ],

  ignorePatterns: ['dist', "build", '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ["react", 'react-refresh', "jsx-a11y", "react-hooks", "@typescript-eslint"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/no-unescaped-entities' : 'off',
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    '@typescript-eslint/no-unused-vars': 'warn',
    "@typescript-eslint/no-explicit-any": "off",
    'react-refresh/only-export-components': 'off',

    '@typescript-eslint/ban-types': [
      'warn',
      {
        types: {
          '{}': false,
          object: {
            message: 'Use object instead',
            fixWith: 'object',
          },
        },
      },
    ],
    '@typescript-eslint/no-unused-vars' : [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ]


  },
  settings: {
    react: {
      version: "detect",
    },
  },
}