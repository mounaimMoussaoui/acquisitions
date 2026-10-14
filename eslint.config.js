import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,

  // Custom quality rules
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },

  // MUST BE LAST: Disables ESLint rules that conflict with Prettier
  eslintConfigPrettier,
];
