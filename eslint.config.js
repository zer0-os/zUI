// eslint.config.js
const globals = require('globals');
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const importPlugin = require('eslint-plugin-import');
const vitestPlugin = require('eslint-plugin-vitest');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const testingLibraryPlugin = require('eslint-plugin-testing-library');
const path = require('path');

// Define commonly ignored patterns
const commonIgnores = [
  '**/node_modules/**',
  '**/dist/**',
  '**/dist-storybook/**',
  '**/.git/**',
  '**/coverage/**',
  '**/build/**',
  'vitest.config.ts',
  'babel.config.js',
  'lint-staged.config.js',
  'webpack.config.js',
  'eslint.config.js'
];

module.exports = [
  {
    // Add ignores property to ignore common patterns
    ignores: commonIgnores,
    // Add files to target JavaScript and TypeScript files
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.vitest
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        project: path.resolve(__dirname, './tsconfig.json'),
        tsconfigRootDir: __dirname,
        ecmaVersion: 2022,
        sourceType: 'module'
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
      vitest: vitestPlugin,
      'jsx-a11y': jsxA11yPlugin,
      'testing-library': testingLibraryPlugin
    },
    rules: {
      // General rules
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/display-name': 0,
      'import/no-cycle': 2,
      'import/no-anonymous-default-export': 'off',
      'array-bracket-spacing': 0,
      'arrow-body-style': [0, 'always'],
      'func-names': 0,
      'react/jsx-quotes': 0,
      'jsx-quotes': 0,
      'react/prop-types': 0,
      'space-infix-ops': 0,
      'no-dupe-class-members': 1,
      'no-useless-constructor': 0,
      'prefer-template': 0,
      'no-param-reassign': 0,
      'react/no-did-update-set-state': 0,
      'react/no-did-mount-set-state': 0,
      'no-unused-vars': 0,
      '@typescript-eslint/no-unused-vars': [
        1,
        {
          args: 'none',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_'
        }
      ],
      camelcase: 0,
      quotes: 0,
      'no-confusing-arrow': 0,
      'no-extra-boolean-cast': 0,
      'spaced-comment': 0,
      'comma-spacing': 0,
      'comma-dangle': [1, 'never'],
      'no-extraneous-dependencies': 0,
      'import/no-extraneous-dependencies': 0,
      'import/first': 0,
      'import/extensions': 0,
      'no-underscore-dangle': 0,
      'function-paren-newline': 0,
      'react/jsx-filename-extension': 0,
      'arrow-parens': 0,
      'no-restricted-syntax': 0,
      'no-lonely-if': 0,
      'no-continue': 0,
      'no-plusplus': 0,
      'object-curly-newline': 0,
      'jsx-a11y/anchor-is-valid': 0,
      'react/jsx-curly-brace-presence': 0,
      'react/no-string-refs': 0,
      'jsx-a11y/no-autofocus': 0,
      'jsx-a11y/no-static-element-interactions': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/iframe-has-title': 0,
      'react/no-find-dom-node': 0,
      'react/no-array-index-key': 0,
      'no-console': 0,
      'no-empty-pattern': 0,
      'import/no-named-as-default': 0,
      'import/no-default-export': 'error',
      'class-methods-use-this': 0,
      'react/no-danger': 0,
      'jsx-a11y/no-noninteractive-element-interactions': 0,
      'import/prefer-default-export': 0,
      'react/jsx-wrap-multilines': 0,
      'jsx-a11y/label-has-for': 0,
      'no-bitwise': 0,
      'import/newline-after-import': 0,
      'react/no-children-prop': 0,
      'no-useless-concat': 0,
      'no-useless-return': 0,
      'react/jsx-no-bind': 0,
      'react/no-unescaped-entities': 0,
      'no-useless-escape': 0,
      'react/no-unused-state': 0,
      'no-mixed-operators': 0,
      'react/no-typos': 0,
      'no-self-compare': 0,
      'no-restricted-globals': 0,
      'jsx-a11y/anchor-has-content': 0,
      'no-alert': 0,
      'react/sort-comp': 0,
      'prefer-destructuring': 0,
      'react/destructuring-assignment': 0,
      'prefer-const': 0
    }
  },
  // Storybook component files need special handling
  {
    files: ['**/src/components/.storybook/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2022,
        sourceType: 'module'
      }
    },
    rules: {
      'import/no-default-export': 'off',
      '@typescript-eslint/no-unused-vars': 'off'
    }
  },
  // Storybook files
  {
    files: ['**/*.stories.tsx', '**/.storybook/**'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'import/no-default-export': 'off'
    }
  },
  // Test files
  {
    files: ['**/*.test.tsx'],
    rules: {
      ...vitestPlugin.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off'
    }
  },
  // .d.ts files
  {
    files: ['**/*.d.ts'],
    rules: {
      'import/no-default-export': 'off'
    }
  }
];
