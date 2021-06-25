# Nest.js graphqlのテンプレート
## 開発系
### 静的解析ツール
* eslint airbnb
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
