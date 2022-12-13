# ESLint 配置

配置文件为 `.eslintrc` ，框架使用 [antfu/eslint-config](https://github.com/antfu/eslint-config) 做为规范，并无增加其它配置，如果你对默认的规则有异议，可以查阅 [ESLint](https://zh-hans.eslint.org/) 官网规则并在 `.eslintrc` 文件中进行覆盖。

当你对规则进行修改后，原有的代码可能会因为规则的变动导致编辑器大量提示错误，你可以通过运行 `pnpm run lint:eslint` 进行一次格式校验，如果规则支持自动修复，则会将不符合规则的代码自动进行格式化。


## .eslintrc 文件内容
```sh
{
  "extends": "@antfu",
  "rules": {
    "curly": ["error", "all"]
  }
}
```