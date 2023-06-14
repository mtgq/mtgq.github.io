# apache配置

## Apache环境服务器

httpd.conf配置文件中加载了mod_rewrite.so模块
AllowOverride None 将None改为 All
把下面的内容保存为.htaccess文件放到应用入口文件的同级目录下（默认是/public/目录）

```sh
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


# v3.5.0 及以上，只需配置最后一项即可
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ index.php?/$1 [QSA,PT,L]
</IfModule>
```