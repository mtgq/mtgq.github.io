# MySQL 替换函数 replace



```
UPDATE `table_name` SET `field_name` = replace (`field_name`,'from_str','to_str') WHERE `field_name` LIKE '%from_str%'
```
 
```
说明：
table_name：表的名字
field_name：字段名
from_str：需要替换的字符串
to_str：替换成的字符串
```