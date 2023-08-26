## ThinkPHP5框架配置双数据库连接



1、参考官方链接：[连接数据库 - ThinkPHP官方手册](https://doc.thinkphp.cn/v5_0/lianjieshujuku.html)



2、关键的地方在于怎么连接数据库，官方的文档没有看明白，这里记录下搜索到的解决方案

```php
<?php

$db2 = Db::connect(config('database.db_config1'));
$userlist = $db2->name("user")->where(['status' => 1])->select();
var_dump($userlist);
```

