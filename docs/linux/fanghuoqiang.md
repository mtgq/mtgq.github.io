# linux 下防火墙使用

## firewalld

```sh
# 查看所有开放的防火墙端口
firewall-cmd --list-all
# 开放某个端口
firewall-cmd --zone=public --add-port=443/tcp --permanent
# 让规则生效
firewall-cmd --reload

# 删除某个规则
firewall-cmd --zone=public --remove-port=9706/tcp --permanent
# 让规则生效
firewall-cmd --reload
```

参考网址：https://blog.csdn.net/bobozai86/article/details/124370517

## iptables