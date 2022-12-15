# 本文档部署流程

## 使用 GitHub Pages 进行部署

在项目 `Settings` -> `Pages` -> `Branch` 选择 `/ (root)` 点击 `Save` 保存

::: tip
切记不要选择 `/docs` ，会造成 `GitHub Actions` 编译失败。
:::

## 使用 GitHub Actions

```yaml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: yarn
      - run: yarn install --frozen-lockfile

      - name: Build
        run: yarn docs:build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
          # cname: example.com # if wanna deploy to custom domain
```

## 部署完成

然后查看 `GitHub Actions` 运行情况是否有错误。
