# WSL2 设置 Systemd

进入子系统
```sh
sudo cat > /etc/wsl.conf <<EOF
[boot]
systemd=true
EOF
```

退出 Linux 子系统，并关闭 WSL：`wsl.exe --shutdown`

重新进入 WSL ，输入 `systemctl list-unit-files --type=service` ，即可检验 systemd 的运行状态