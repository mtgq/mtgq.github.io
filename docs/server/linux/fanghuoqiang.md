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

```
# 查看已添加的 iptables 规则
iptables -L -n
# 允许访问22端口
iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# 删除已添加的 iptables 规则
## 1、将所有iptables以序号标记显示，执行：
iptables -L -n --line-numbers
## 2、比如要删除INPUT里序号为8的规则(要删除OUTPUT的话就改成OUTPUT，以此类推)，执行：
iptables -D INPUT 8
```

参考网址：https://www.vpser.net/security/linux-iptables.html