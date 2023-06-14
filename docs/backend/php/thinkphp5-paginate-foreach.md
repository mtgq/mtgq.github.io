# thinkphp5 paginate 不使用 each 处理数据的方法

```php
$list = db('user')->order('id desc')->paginate(10);

// 获取分页显示
$page = $list->render();
$list = $list->all(); //这是关键

// 模板变量赋值
foreach ($list as $k => $v) {
   //改变数据
   $list[$k]['username'] = lishuai;
}

$this->assign('list', $list);
$this->assign('page', $page);
// 渲染模板输出
return $this->fetch();
```