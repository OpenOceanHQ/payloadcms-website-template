/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next/core-web-vitals'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    project: ['./tsconfig.json'],

    tsconfigRootDir: __dirname,
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    'no-return-await': 'error',
    'no-console': 'error',
    'require-await': 'warn',
    'no-mixed-spaces-and-tabs': 'off',
  },
};
