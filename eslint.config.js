import nextPlugin from 'eslint-config-next';

export default [
  {
    ignores: [
      'node_modules',
      '.next',
      'out',
      'build',
      'dist',
      '.turbo',
      'coverage',
    ],
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
    },
  },
];
