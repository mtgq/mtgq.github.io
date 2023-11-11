# mysqldump 使用

## 导出所有数据库（结构和数据）
```
mysqldump -uroot -proot --all-databases >/tmp/all.sql
```

## 导出 db1、db2 两个数据库的所有数据
```
mysqldump -uroot -proot --databases db1 db2 >/tmp/user.sql
```



参考链接：

https://www.cnblogs.com/chenmh/p/5300370.html


## 宝塔备份网站教程

https://www.bt.cn/bbs/thread-82375-1-1.html


## 宝塔备份的mysql文件进行恢复

https://www.bt.cn/bbs/thread-112141-1-1.html