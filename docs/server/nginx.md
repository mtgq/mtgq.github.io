# nginx

## nginx添加跨域配置

```sh
server {
    ...省略部分代码...
    location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
    {
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Allow-Headers X-Requested-With;
        add_header Access-Control-Allow-Methods GET,POST,OPTIONS;
        expires 30d;
    }
    ...省略部分代码...
}
```

## Nginx 环境服务器

在Nginx低版本中，是不支持PATHINFO的，但是可以通过在Nginx.conf中配置转发规则实现：

``` 
location /m/ {
    index index.html;
    try_files $uri $uri/ /m/index.html;
}
location /member/ {
    index index.html;
    try_files $uri $uri/ /member/index.html;
}

// v3.5.0 及以上，只需配置最后一项即可
location / {
    if (!-e $request_filename) {
        rewrite  ^(.*)$  /index.php?s=/$1  last;
        break;
    }
}
```
