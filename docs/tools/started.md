# Visual Studio Code 便携

[官方便携模式说明](https://code.visualstudio.com/docs/editor/portable)

## 便携模式

## 步骤一: 首先去 [Visual Studio Code](https://code.visualstudio.com) 官网下载 zip 格式分发版

解压缩下载的 Visual Studio Code 后，只需在 VS Code's 的文件夹中创建一个 `data` 文件夹：

```javascript
|- VSCode-win32-x64-1.25.0-insider
|   |- Code.exe (or code executable)
|   |- data
|   |- ...
```

创建后，该文件夹将用于包含所有 Visual Studio Code 数据，包括会话状态，首选项，扩展等。

该 `data` 文件夹可以移动到其他 Visual Studio Code 安装。这对于更新便携式代码版本很有用：只需将 `data` 文件夹移动到较新的 Visual Studio Code 提取版本即可。

## 步骤二: TMP 目录

默认情况下，即使在便携模式下，默认 `TMP` 目录仍然是系统目录，因为没有保留状态。如果您还想在便携式目录中拥有 TMP 目录，只需在该 `data` 文件夹中创建一个 `tmp` 空目录即可。只要存在 `tmp` 目录，它就会用于保存 TMP 数据。
