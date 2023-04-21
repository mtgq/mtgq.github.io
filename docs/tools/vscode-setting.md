# Visual Studio Code 基本配置

## 快捷键

[中文版快捷键参考](https://www.bysb.net/wp-content/uploads/2020/05/vsc-sc-zh-hans.png)

## 扩展推荐

`语言包`

- [Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)
  中文语言包

`主题图标`

- [Material Theme Icons](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme-icons)
  文件图标主题

`代码格式化`

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

`git增强`

- [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)
- [Git Blame](https://marketplace.visualstudio.com/items?itemName=waderyan.gitblame) 在编辑器底部状态条中显示当前光标所在行的
  git 提交人的信息。
  `拼写检查工具，能正确识别驼峰或下划线的形式`
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) 文件路径补全

`其它`

- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- [TypeScript + Webpack Problem Matchers](https://marketplace.visualstudio.com/items?itemName=amodio.tsl-problem-matcher)
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
- [Sort JSON objects](https://marketplace.visualstudio.com/items?itemName=richie5um2.vscode-sort-json)
- [Sort package.json](https://marketplace.visualstudio.com/items?itemName=unional.vscode-sort-package-json)
- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) vue官方推荐开发扩展
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  统一项目的文本风格，如缩进，行末空白，文件末尾空行等
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)
- [Grammarly](https://marketplace.visualstudio.com/items?itemName=znck.grammarly)

`php开发`

- [Twig](https://marketplace.visualstudio.com/items?itemName=whatwedo.twig) 对 Twig 语法高亮，及语法自动提示提供支持。
- [PHP DocBlocker](https://marketplace.visualstudio.com/items?itemName=neilbrayfield.php-docblocker)
  代码注释补全，在给类、函数写注释时，能自动补全。
- [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client) PHP
  代码自动提示、补全。安装此插件后，需关闭编辑器本身自带的代码提示，否则会重复显示函数提示。打开“用户设置"(快捷键CMD + ,)，将
  php.suggest.basic 设置为 false。
  -[php cs fixer](https://marketplace.visualstudio.com/items?itemName=junstyle.php-cs-fixer) PHP
  格式化代码。在插件中心搜索 `php cs fixer`，会出现2个同名的插件，我们这里选择安装作者是 junstyle 的 `php cs fixer`。

该插件，需要安装 [PHP Coding Standards Fixer](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer)：

```sh
wget http://cs.sensiolabs.org/download/php-cs-fixer-v2.phar -O php-cs-fixer
sudo chmod a+x php-cs-fixer
sudo mv php-cs-fixer /usr/local/bin/php-cs-fixer
```

## 自用配置

```sh
{
    // setting from https://github.com/antfu/vscode-settings/blob/main/.vscode/settings.json

    // Base Appearance
    "update.mode": "none", // 禁止更新提示
    "update.showReleaseNotes": false, // 禁止更新后显示发行说明
    "editor.links": false,
    "security.workspace.trust.enabled": false,
    "editor.wordWrap": "on",
    "explorer.compactFolders": false,
    "emmet.includeLanguages": {
      "javascript": "javascriptreact",
    },
    "files.associations": {
      "*.js": "javascriptreact"
    },
    "explorer.copyRelativePathSeparator": "/",
    "workbench.startupEditor": "none",
    "files.autoSave": "onFocusChange",
    "workbench.settings.editor": "json",
    "editor.linkedEditing": true,
    "workbench.iconTheme": "eq-material-theme-icons-light",
    "editor.stickyScroll.enabled": true,
    "emmet.triggerExpansionOnTab": true,
    "blade.format.enable": true,
    "[blade]": {
      "editor.autoClosingBrackets": "always"
    },
    "git.useEditorAsCommitInput": false,
    // php相关扩展设置
    "php.suggest.basic": false,
    "editor.wordSeparators": "`~!@#%^&*()-=+[{]}\\|;:'\",.<>/?，、。：；？！‘’“”（）「」【】《》|…",

    // PHP DocBlocker 扩展设置
    "php-docblocker.gap": false,
   // 为类添加注释时添加命名空间
   "php-docblocker.qualifyClassNames": true,
   "php-docblocker.extra": [
      "@Author xiaojin",
      "@DateTime $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE"
    ],
   // 默认作者和邮箱
   "php-docblocker.author": {
       "name": "right",
       "email": "2580839896@qq.com"
   },
   // php-cs-fixer 配置
   "[php]": {
      "editor.formatOnSave": true,
      "editor.defaultFormatter": "junstyle.php-cs-fixer",
    },
   "php-cs-fixer.executablePath": "${extensionPath}/php-cs-fixer.phar",
   "php-cs-fixer.executablePathWindows": "C:\\Users\\MTGQ-TOP\\AppData\\Roaming\\Composer\\vendor\\bin\\php-cs-fixer.bat",
   "php-cs-fixer.onsave": false,
   "php-cs-fixer.rules": "@PSR12",
   "php-cs-fixer.config": ".php-cs-fixer.php;.php-cs-fixer.dist.php;.php_cs;.php_cs.dist",
   "php-cs-fixer.allowRisky": false,
   "php-cs-fixer.pathMode": "override",
   "php-cs-fixer.exclude": [],
   "php-cs-fixer.autoFixByBracket": true,
   "php-cs-fixer.autoFixBySemicolon": false,
   "php-cs-fixer.formatHtml": false,
  "php-cs-fixer.documentFormattingProvider": true,
    // 控制编辑器是否应在对屏幕阅读器进行了优化的模式下运行。设置为“开”将禁用自动换行。
    "editor.accessibilitySupport": "off",
    // 控制 "查找小部件" 是否应在编辑器顶部添加额外的行。如果为 true, 则可以在 "查找小工具" 可见时滚动到第一行之外。
    "editor.find.addExtraSpaceOnTop": false,
    "editor.guides.bracketPairs": "active",
    "editor.lineNumbers": "interval",
    "editor.multiCursorModifier": "ctrlCmd",
    "editor.renderWhitespace": "boundary",
    "editor.unicodeHighlight.invisibleCharacters": false,
    // 保存时运行的代码操作
    "editor.codeActionsOnSave": {
        // 控制是否应在文件保存时运行自动修复操作。
        "source.fixAll": false,
        "source.fixAll.eslint": false, // this allows ESLint to auto fix on save
        // 控制是否应在文件保存时运行"整理 import 语句"操作。
        "source.organizeImports": false
    },
    // 删除时，是否确认
    "explorer.confirmDelete": false,
    // 控制在资源管理器内拖放移动文件或文件夹时是否进行确认。
    "explorer.confirmDragAndDrop": false,
    // 调整对话框窗口的外观。
    "window.dialogStyle": "custom",
    // 控制在会话期间显示已打开文件的编辑器是否应在被其他进程删除或重命名时自动关闭。
    // 禁用此功能将使编辑器在此类事件中保持打开状态。
    // 请注意，从应用程序内删除将始终关闭编辑器，且永远不会关闭具有未保存更改的编辑器以保留数据。
    "workbench.editor.closeOnFileDelete": true,
    // 控制是否在具有未保存更改的编辑器的选项卡上绘制顶部边框。
    "workbench.editor.highlightModifiedTabs": true,
    "workbench.editor.limit.enabled": true,
    "workbench.editor.limit.perEditorGroup": true,
    "workbench.editor.limit.value": 5,
    // 控制列表和树是否具有平滑滚动效果。
    "workbench.list.smoothScrolling": true,
    // 编辑器左侧目录树偏移量
    "workbench.tree.indent": 20,
    // 启用后，将不会显示扩展建议的通知。
    "extensions.ignoreRecommendations": true,
    // 默认行尾字符。 LF
    "files.eol": "\n",
    "git.autofetch": true,
    // 同步 Git 存储库前请先进行确认。
    "git.confirmSync": false,
    "git.enableSmartCommit": true,
    "git.untrackedChanges": "separate",
    // 控制终端光标是否闪烁。
    "terminal.integrated.cursorBlinking": true,
    // 控制终端光标的样式。
    "terminal.integrated.cursorStyle": "line",
    // 要在终端中用于非粗体文本的字体粗细。接受“正常”和“加粗”这两个关键字，或接受 1-1000 之间的数字。
    "terminal.integrated.fontWeight": "300",
    "diffEditor.ignoreTrimWhitespace": false,
    "search.exclude": {
        "**/.git": true,
        "**/.github": true,
        "**/.nuxt": true,
        "**/.output": true,
        "**/.pnpm": true,
        "**/.vscode": true,
        "**/.yarn": true,
        "**/bower_components": true,
        "**/dist/**": true,
        "**/logs": true,
        "**/node_modules": true,
        "**/out/**": true,
        "**/package-lock.json": true,
        "**/pnpm-lock.yaml": true,
        "**/tmp": true,
        "**/yarn.lock": true
    },

    // Extension configs
    "emmet.showSuggestionsAsSnippets": true,
    "errorLens.enabledDiagnosticLevels": [
        "warning",
        "error"
    ],
    "errorLens.excludeBySource": [
        "cSpell",
        "Grammarly",
        "eslint"
    ],

    // ESLint config: https://github.com/antfu/eslint-config
    "eslint.codeAction.showDocumentation": {
        "enable": false
      },
      "eslint.quiet": true,
      "eslint.validate": [
        "javascript",
        "typescript",
        "javascriptreact",
        "typescriptreact",
        "vue",
        "html",
        "markdown",
        "json",
        "jsonc",
        "json5",
        "css",
        "scss",
        "less",
      ],
      "cSpell.allowCompoundWords": true,
      "cSpell.language": "en,en-US",
      "css.lint.hexColorLength": "ignore",
      "gitlens.codeLens.authors.enabled": false,
      "gitlens.codeLens.enabled": false,
      "gitlens.codeLens.recentChange.enabled": false,
      "gitlens.menus": {
        "editor": {
          "blame": false,
          "clipboard": true,
          "compare": true,
          "history": false,
          "remote": false
        },
        "editorGroup": {
          "blame": true,
          "compare": false
        },
        "editorTab": {
          "clipboard": true,
          "compare": true,
          "history": true,
          "remote": true
        },
        "explorer": {
          "clipboard": true,
          "compare": true,
          "history": true,
          "remote": true
        },
        "scm": {
          "authors": true
        },
        "scmGroup": {
          "compare": true,
          "openClose": true,
          "stash": true
        },
        "scmGroupInline": {
          "stash": true
        },
        "scmItem": {
          "clipboard": true,
          "compare": true,
          "history": true,
          "remote": false,
          "stash": true
        }
      },
      "volar.autoCompleteRefs": false,
      "volar.completion.preferredTagNameCase": "pascal",
      "prettier.enable": false, // I only use Prettier for manually formatting
      "prettier.printWidth": 200,
      "prettier.semi": false,
      "prettier.singleQuote": true,
      "php-cs-fixer.lastDownload": 1681195008102
}
```
