# Systemd 入门命令

| 描述           |      指令      | 
| ------------- | :-----------: |
| 启动服务|   systemctl start httpd    |
| 停止服务|   systemctl stop httpd     |
| 重启服务|   systemctl restart httpd  |
| 重载服务|   systemctl reload httpd   |
| 使某服务自动启动    | systemctl enable httpd | 
| 使某服务不自动启动  |   systemctl disable httpd    |  
| 检查服务状态            |   systemctl status httpd （服务详细信息） systemctl is-active httpd （仅显示是否 Active)   |
| 显示所有已启动的服务     |   systemctl list-units --type=service   |
| 重载所有修改过的配置文件 |   systemctl daemon-reload   |

## 例子
```sh
systemctl start nfs-server.service    #启动nfs服务
systemctl enable nfs-server.service   #设置开机自启动
systemctl disable nfs-server.service  #停止开机自启动
systemctl status nfs-server.service   #查看服务当前状态
systemctl restart nfs-server.service  #重新启动某服务
systemctl list-units --type=service   #查看所有已启动的服务
```
