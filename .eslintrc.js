//See: https://github.com/vercel/next.js/blob/canary/examples/with-typescript-eslint-jest/.eslintrc.json
module.exports = {
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'project': './tsconfig.json'
  },
  'plugins': ['@typescript-eslint'],
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb-typescript',
    // Uncomment the following lines to enable eslint-config-prettier
    // Is not enabled right now to avoid issues with the Next.js repo
    'prettier'
  ],
  'env': {
    'es6': true,
    'browser': true,
    'jest': true,
    'node': true
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  // TODO: チーム開発の場合全員で相談する事
  'rules': {
    // NOTE: devDependenciesからのimportを許可
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': [
          '**/*.stories.{ts,tsx}',
          '**/*.{spec,test}.{ts,tsx}'
        ]
      }
    ],
    'import/prefer-default-export': 'off',
    // propsを変数に入れなくてもそのまま扱えるように
    'react/destructuring-assignment': 'off',
    // NOTE: JSX中の中括弧の使用を許可する
    'react/jsx-curly-brace-presence': 'off',
    // NOTE: JSX中のpropsの展開を許可
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 0,
    // NOTE: optionalの時default値を指定しないでもOKに(これはあってもいいかも)
    'react/require-default-props': 'off',
    'react/display-name': 0,
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        'argsIgnorePattern': '^_'
      }
    ],
    'no-console': [
      2,
      {
        'allow': ['warn', 'error']
      }
    ],
    // NOTE: "_"始まりを許容する
    'no-underscore-dangle': 'off'
  }
};
