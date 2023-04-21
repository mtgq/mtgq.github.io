# 上传大文件

## 1、PHP限制了上传大小

找到php.ini，修改下列参数，重启php-fpm或者apache

```
post_max_size ＝ 300M
upload_max_filesize ＝ 300M
memory_limit ＝ 300M
```

## 2、web服务器（Nginx,Apache）限制了上传大小

Nginx：打开 `nginx.conf`，并在 `http{}` 字段里添加

```
client_max_body_size 300M;
```

Apache:

```
/etc/httpd/conf.d/php.conf (不同系统位置有所不同)
LimitRequestBody 300M
```