# docker 常用命令

```sh
systemctl start docker     #运行Docker守护进程
systemctl stop docker      #停止Docker守护进程
systemctl restart docker   #重启Docker守护进程
systemctl enable docker    #设置Docker开机自启动
systemctl status docker    #查看Docker的运行状态
```

查看已有镜像

`docker images`

强制删除镜像

`docker rmi -f registry.cn-hangzhou.aliyuncs.com/lxepoo/apache-php5`


进入容器。e1abc**** 是执行 docker images 命令查询到的 ImageId，使用 docker run 命令进入容器

`docker run -it e1abc**** /bin/bash`