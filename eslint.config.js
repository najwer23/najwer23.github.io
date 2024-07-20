import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';

const commonRules = {
  'prettier/prettier': 'error',
  '@typescript-eslint/no-unused-vars': 'error',
  'react/no-unescaped-entities': 'off',
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'off',
  'no-undef': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  'react-hooks/exhaustive-deps': 'off',
  'react/no-children-prop': 'off',
};

export default [
  eslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@typescript-eslint': tseslint,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...tseslint.configs['eslint-recommended'].rules,
      ...tseslint.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...commonRules,
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
  {
    files: ['vite.config.ts', 'vitest.config.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.node.json',
      },
    },
  },
  {
    ignores: ['build/', 'node_modules/', '**/*.min.js', '.yarn/'],
  },
];
