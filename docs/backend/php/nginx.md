# nginx

## nginx添加跨域配置

```bash
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
