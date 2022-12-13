
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

如果你的应用安装在二级目录，Nginx的伪静态方法设置如下，其中youdomain是所在的目录名称。
``` 
location /youdomain/m/ {
    index index.html;
    try_files $uri $uri/ /youdomain/m/index.html;
}
location /youdomain/member/ {
    index index.html;
    try_files $uri $uri/ /youdomain/member/index.html;
}


// v3.5.0 及以上，只需配置最后一项即可
location /youdomain/ {
    if (!-e $request_filename){
        rewrite  ^/youdomain/(.*)$  /youdomain/index.php?s=/$1  last;
    }
}
```

## Apache环境服务器

httpd.conf配置文件中加载了mod_rewrite.so模块
AllowOverride None 将None改为 All
把下面的内容保存为.htaccess文件放到应用入口文件的同级目录下（默认是/public/目录）
``` 
<IfModule mod_rewrite.c>
Options +FollowSymlinks -Multiviews
RewriteEngine on

RewriteCond %{REQUEST_URI} ^/m/
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^m/(.*)$ m/index.html [QSA,PT,L]

RewriteCond %{REQUEST_URI} ^/member/
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^member/(.*)$ member/index.html [QSA,PT,L]


// v3.5.0 及以上，只需配置最后一项即可
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ index.php?/$1 [QSA,PT,L]
</IfModule>
```