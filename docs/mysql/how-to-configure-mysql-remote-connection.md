# 如何配置 MySQL 远程连接


MySQL 8.0 以前的版本可以使用 grant 在授权的时候隐式的创建用户，8.0 以后已经不支持，所以必须先创建用户，然后再授权，命令如下

## 配置单个数据库

1、数据库授权

注意⚠️：远程连接新建一个帐号（帐号名不能为 root ）。
如：添加一个用户名为 db_user，密码为 db_pass，授权为 % （ % 表示所有 ip 都能连接）对 db_name 数据库所有权限，命令如下：

2、登录 MySQL

```sh
1、登陆 MySQL 数据库

mysql -uroot -p

use mysql;
```

### MySQL 8.0 版本

```sh
2、增加远程连接权限(创建用户)
create user db_user@'%' identified by 'db_pass';

3、授权并刷新权限
grant all privileges on db_name.* to db_user@'%' with grant option;
flush privileges;

4、退出数据库控制台，特别注意有分号
exit;
```

### 其余 MySQL 版本(5.6)

```sh
2、授权并刷新权限，特别注意有分号。
grant all privileges on db_name.* to db_user@'%' identified by 'db_pass';

flush privileges;

3、退出数据库控制台，特别注意有分号
exit;

db_name: 库名
%: 授权地址 % 表示所有
db_user: 用户名
db_pass: 密码
```



## 开启数据库 root 远程链接

### MySQL 8.0 版本

```sh 
CREATE USER 'root'@'%' IDENTIFIED BY '123456' PASSWORD EXPIRE NEVER;  -- 这一步执行失败没关系
grant all privileges on *.* to 'root'@'%';  --赋予root用户权限

如果远程连接的时候报 plugin caching_sha2_password could not be loaded 这个错误，可以尝试修改密码加密插件：
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';

FLUSH PRIVILEGES;
```

### 其余 MySQL 版本(5.6)

```sh
1、为root用户添加远程连接的账号：  
GRANT ALL PRIVILEGES ON *.* TO root@"%" IDENTIFIED BY "root" WITH GRANT OPTION; 
 
指定 ip 方式:
ip 为 192.168.133.128 的主机以用户 myuser 和密码 mypwd 连接到 MySQL 服务器
GRANT ALL PRIVILEGES ON *.* TO 'myuser'@'192.168.133.128' IDENTIFIED BY 'mypwd' WITH GRANT OPTION; 
 
2、刷新权限并退出
flush PRIVILEGES;
exit;

这一步一定要做，不然无法成功！ 这句表示从 MySQL 数据库的 grant 表中重新加载权限数据
因为 MySQL 把权限都放在了 cache 中，所以在做完更改后需要重新加载。

这里的 123456 为给 root 设置的密码，也可以改成自己的密码，% 代表所有主机，也可以具体到你的主机 ip 地址

% 允许从任何 ip 登录  
x.x.x.x 允许从指定的 ip 访问
```

## 验证是否配置成功
```
use mysql;
select host,user,authentication_string,plugin from user;
```