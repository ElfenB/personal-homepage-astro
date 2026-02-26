import boehringer from '@boehringer-ingelheim/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  boehringer.includeIgnoreFile(),
  boehringer.configs.strict,
  boehringer.configs.experimentalNamingConvention,
  {
    ignores: ['.prettier*.*'],
  },
  {
    rules: {
      'sonarjs/cognitive-complexity': 'warn',
      'sonarjs/no-collapsible-if': 'warn',
      'sonarjs/no-duplicate-string': 'warn',
      'sonarjs/no-identical-functions': 'warn',
      'sonarjs/no-nested-switch': 'warn',
      'sonarjs/no-nested-template-literals': 'warn',
      'sonarjs/prefer-immediate-return': 'off',
      'sonarjs/prefer-single-boolean-return': 'off',
      'sonarjs/todo-tag': 'warn',
      // No error for wrong sorting
      'perfectionist/sort-imports': 'warn',
      'perfectionist/sort-jsx-props': 'warn',
      'perfectionist/sort-named-imports': 'warn',
      'perfectionist/sort-object-types': 'warn',
      'perfectionist/sort-objects': 'warn',
    },
  },
  {
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
  },
  // Has to be last
  boehringer.configs.prettierDisable,
]);
