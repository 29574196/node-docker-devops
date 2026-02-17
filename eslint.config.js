const globals = require('globals');
const pluginJs = require('@eslint/js');
const pluginPrettier = require('eslint-plugin-prettier');
const configPrettier = require('eslint-config-prettier');

module.exports = [
  // 1. Setup for Node.js files (CommonJS)
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node, // logic for Node.js (require, module.exports, etc.)
        ...globals.jest, // logic for Jest (describe, it, expect)
      },
    },
  },

  // 2. Use recommended ESLint rules
  pluginJs.configs.recommended,

  // 3. Setup Prettier integration
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error', // Turn Prettier issues into ESLint errors
      'no-console': 'warn', // Warn if console.log is left in code
      'no-unused-vars': 'warn', // Warn if variables are defined but not used
    },
  },

  // 4. Disable any ESLint rules that conflict with Prettier
  configPrettier,
];
