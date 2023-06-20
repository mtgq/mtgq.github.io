# mysql server has gone away 解决方案


## 能改配置的情况
```
[mysqld]
max_allowed_packet=16M
```

## 不能改配置或者临时使用

```
# 查看
show global variables like 'max_allowed_packet';

# 进行设置
set global max_allowed_packet = 4 * 1024 * 1024;

# 调整为 4M
```