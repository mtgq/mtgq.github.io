# yarn 安装


## 安装 node 

推荐以下工具

- [nvm](https://github.com/nvm-sh/nvm) 是最常用的节点版本管理器
- [n](https://www.npmjs.com/package/n#installation) 是长期存在的 nvm 替代方法，该方法使用略微不同的命令来完成相同的操作，并通过 npm 而不是 bash 脚本来安装。
- [fnm](https://github.com/Schniz/fnm#using-a-script) 是较新的版本管理器，它声称比 nvm 快得多。 （它还使用 Azure 管道。）
- [Volta](https://github.com/volta-cli/volta#installing-volta) 是来自 LinkedIn 团队的新版本管理器，它声称改进了速度和跨平台支持。
- [asdf-vm](https://asdf-vm.com/#/core-manage-asdf-vm) 是适用于多种语言的单个 CLI，例如将 ike gvm、nvm、rbenv & pyenv（等）整合在一起。
- [nvs](https://github.com/jasongin/nvs)（Node 版本切换器）是跨平台的 nvm 替代方法

## 安装 yarn

```text
npm install -g yarn
```

## 配置镜像源

### 推荐使用 [nrm](https://github.com/Pana/nrm) 可以帮助我们在不同的镜像间进行切换，帮助你加快软件的下载
```bash
npm install -g nrm
```

### 配置 npm、yarn 源为国内源，以大幅提升 npm 的安装速度(全局替换)

```text
npm config set registry https://registry.npmmirror.com
yarn config set registry https://registry.npmmirror.com
```

