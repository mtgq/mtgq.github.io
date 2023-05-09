# wsl 常见问题 

::: tip
以 wsl2 进行测试
:::


## WSL2 设置 Systemd

1、编辑 `/etc/wsl.conf` 文件
```sh
[boot]
systemd=true
```

2、退出 Linux 子系统，并关闭 WSL：`wsl --shutdown`

3、重新进入 WSL ，输入 `systemctl list-unit-files --type=service` ，即可检验 systemd 的运行状态


## WSL2 打开终端默认以 root 用户运行

1、只需要在 `C:\Users\用户名\AppData\Local\Microsoft\WindowsApps` 路径下确认所安装的 Linux 子系统具体的版本号

2、然后打开 CMD ,输入 XXXXXX版本号.exe config --default-user root运行

3、重新打开Linux子系统即可更换为root账户