# Nest.js graphql のテンプレート

## コンポーネント

- Atomic Design
- Presentational Container
  - Presenter: 描写に関係する部分
  - Container: ロジックに関する部分

## 静的解析ツール

- eslint: airbnb rules
- prettier
- cspell

## テスト系

- Unit テスト: jest
- 回帰テスト: storybook + chromatic(追加設定必要)

## style

styled-component

## GraphQL

- apollo

## Git Hooks

- pre-commit
  - lint --fix
  - cspell
- pre-push
  - type check

## CI

GitHub Actions

```
module install - lint
              |- cspell
              |- typecheck
              |- test
```

# 便利系

- pathpida
- font awesome

# hygen

```
# ページを作成する
$ yarn hygen new page

# コンポーネントを生成する
$ yarn hygen new component

# GraphQLクエリを生成する
$ yarn hygen new graphql
```
