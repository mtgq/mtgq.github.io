# linux 基本设置

## 配置镜像源

```sh
1、sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak

2、配置镜像源
sed -i -r 's#http://(archive|security).ubuntu.com#https://mirrors.ustc.edu.cn#g' /etc/apt/sources.list && apt-get update
```
