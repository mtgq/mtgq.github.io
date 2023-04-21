# ubuntu 安装 docker

```bash
bash <(curl -sSL https://ghproxy.com/https://gist.githubusercontent.com/mtgq/251312e88b5bf3abbabe9638af29cbcb/raw/Install-Docker-on-Ubuntu.sh)
```

## 以非 root 用户身份管理 docker

官方文档地址: https://docs.docker.com/engine/install/linux-postinstall/

1、将您的用户添加到docker组中。
```
sudo usermod -aG docker $USER
```

2、激活对组的更改
```
newgrp docker
```

### 常见问题

1、
`WARNING: Error loading config file: /home/user/.docker/config.json -
stat /home/user/.docker/config.json: permission denied`

解决方案
```
sudo chown "$USER":"$USER" /home/"$USER"/.docker -R
sudo chmod g+rwx "$HOME/.docker" -R
```