# 如何配置MySQL远程连接


mysql8.0以前的版本可以使用grant在授权的时候隐式的创建用户，8.0以后已经不支持，所以必须先创建用户，然后再授权，命令如下

## 配置单个数据库

1、打开iptables 3306端口

```sh
centos

iptables -I INPUT 4 -p tcp -m state --state NEW -m tcp --dport 3306 -j ACCEPT
service iptables save #保存iptables规则
```

```sh
ubuntu/debian

iptables -I INPUT 4 -p tcp -m state --state NEW -m tcp --dport 3306 -j ACCEPT
iptables-save > /etc/iptables.up.rules #保存iptables规则
```

2、数据库授权

注意⚠️：远程连接新建一个帐号（帐号名不能为root）。
如：添加一个用户名为db_user，密码为db_pass，授权为% （%表示所有IP能连接）对db_name数据库所有权限，命令如下：

登录mysql

```sh
1、登陆mysql数据库

mysql -uroot -p

use mysql;
```

### mysql 8.0 版本

```sh

2、增加远程连接权限(创建用户)

create user db_user@'%' identified by 'db_pass';

3、授权并刷新权限
grant all privileges on db_name.* to db_user@'%' with grant option;
flush privileges;

5、退出数据库控制台，特别注意有分号
exit;
```

### 其余 mysql 版本(5.6)

```sh
2、授权并刷新权限，特别注意有分号。
grant all privileges on db_name.* to db_user@'%' identified by 'db_pass';
flush privileges;

3、退出数据库控制台，特别注意有分号
exit;
```



## 开启所有数据库

### mysql 8.0 版本

```sh 
CREATE USER 'root'@'%' IDENTIFIED BY 'Hadoop3!';
grant all privileges on *.* to 'root'@'%';

如果远程连接的时候报plugin caching_sha2_password could not be loaded这个错误，可以尝试修改密码加密插件：
alter user 'root'@'%' identified with mysql_native_password by 'Hadoop3!';
```

### 其余 mysql 版本(5.6)

```sh
1、为root用户添加远程连接的账号：  
GRANT ALL PRIVILEGES ON *.* TO root@"%" IDENTIFIED BY "root"; 
 
 
2、允许任意主机以用户root和密码lnmp.org连接到mysql服务器
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'lnmp.org' WITH GRANT OPTION;
 
3、刷新MySQL的系统权限相关表
flush PRIVILEGES;
 
到这里就可以在服务器以外的电脑上使用类似于Navicat Premium工具来远程连接mysql了
 
补充：
IP为192.168.133.128的主机以用户myuser和密码mypwd连接到mysql服务器
GRANT ALL PRIVILEGES ON *.* TO 'myuser'@'192.168.133.128' IDENTIFIED BY 'mypwd' WITH GRANT OPTION; 
 
刷新权限并退出
flush PRIVILEGES;
exit;

% 允许从任何ip登录  
x.x.x.x 允许从指定的ip访问
```

## 验证是否配置成功
```
select host, user, authentication_string, plugin from user
```