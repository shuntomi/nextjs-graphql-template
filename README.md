# Nest.js graphqlのテンプレート
## コンポーネント
* Atomic Design
* Presentational Container
  * Presenter: 描写に関係する部分
  * Container: ロジックに関する部分

## 静的解析ツール
* eslint: airbnb rules
* prettier
* cspell
  
## テスト系
* Unitテスト: jest
* 回帰テスト: storybook + chromatic(追加設定必要)

## style
styled-component

## GraphQL
* apollo

## Git Hooks
* pre-commit
    * lint --fix
    * prettier
    * cspell
* pre-push
    * jest
    * type check
    
## CI
GitHub Actions
```
module install - lint      --- build
              |- cspell    -|
              |- typecheck -|
              |- test      -|
```

# 便利系
* pathpida
* font awesome

# hygen
```
# componentを作成(StoryBookとTest付き可)
hygen new component

# pageを作成
hygen new page
```
