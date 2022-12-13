# linux 基本设置

## 配置镜像源

```sh
sed -i -r 's#http://(archive|security).ubuntu.com#https://mirrors.aliyun.com#g' /etc/apt/sources.list && apt-get update
```
