# ubuntu 安装 docker

## 一、卸载旧的版本

`sudo apt-get remove docker docker-engine docker.io containerd runc`


## 二、设置仓库

### 1、更新软件
```sh
sudo apt-get update
sudo apt-get -y install ca-certificates curl gnupg lsb-release
```

### 2、添加 Docker 的官方 GPG 密钥

`sudo mkdir -m 0755 -p /etc/apt/keyrings`

`curl -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg`

### 3、设置存储库
```sh
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

## 三、开始安装 docker

### 1、更新软件

`sudo apt-get update`

### 2、安装 Docker Engine、containerd 和 Docker Compose

`sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin`

### 3、安装校验

`docker version`


## 四、配置镜像加速
```sh
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://9gqe7epy.mirror.aliyuncs.com","https://dockerproxy.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

## 五、安装 Docker Compose
```sh
curl -L https://get.daocloud.io/docker/compose/releases/download/v2.16.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

