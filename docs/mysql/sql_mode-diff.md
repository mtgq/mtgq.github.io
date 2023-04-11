# sql_mode 区别

## 查看 sql_mode

```
mysql> SHOW VARIABLES LIKE 'sql_mode';
+---------------+--------------------------------------------+
| Variable_name | Value                                      |
+---------------+--------------------------------------------+
| sql_mode      | ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION |
+---------------+--------------------------------------------+
1 row in set (0.16 sec)
```

### STRICT_TRANS_TABLES
在插入或更新数据时，如果某个字段的值无法转换为目标数据类型，则 MySQL 会报错。此模式只适用于事务表。
所以这个模式不一致会导致同样代码在不同环境报错
此模式只针对 innodb 表

### STRICT_ALL_TABLES
与 STRICT_TRANS_TABLES 类似，但是此模式适用于所有表，包括非 innodb 表。

### ERROR_FOR_DIVISION_BY_ZERO
如果除数为零，则 MySQL 会抛出错误。如果未启用此模式，则 MySQL 将返回 NULL。

### NO_AUTO_CREATE_USER
当 MySQL 使用 GRANT 语句创建新用户时，不允许创建不存在的用户。如果启用此模式，则必须先手动创建用户。

### NO_ENGINE_SUBSTITUTION
如果指定的存储引擎不存在，则 MySQL 不会替换为其他存储引擎，而是报错。

### ANSI_QUOTES
启用此模式后，MySQL 会将双引号视为标识符的引号，而不是字符串的引号。

### IGNORE_SPACE
如果启用此模式，则 MySQL 会忽略 SQL 语句中的空格。这样可以在不更改 SQL 语句结构的情况下美化 SQL 语句。

### ONLY_FULL_GROUP_BY
如果启用此模式，则在 GROUP BY 语句中必须包含所有非聚合的列，否则 MySQL 会报错。

### NO_ZERO_IN_DATE
如果启用此模式，则 MySQL 不允许在日期或时间中使用零值。

### NO_ZERO_DATE
如果启用此模式，则 MySQL 不允许使用 “0000-00-00” 日期。



参考链接：

官方：https://dev.mysql.com/doc/refman/5.7/en/sql-mode.html

https://learnku.com/articles/75798