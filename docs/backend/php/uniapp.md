# uni-app 发布 h5 端

## 路由模式为 history

### Step. 1: 路由模式为 `history`，运行的基础路径为 `/h5/`

在 `HbuilderX` 打开 `manifest.json->h5` 配置->路由模式设置为 `history`，运行的基础路径填写为 `/h5/`

### Step. 2: 发行

点击 HBuilderx `工具栏` → `发行` → `网站-H5手机版(仅适用于uni-app)(H)`


### Step. 3: 服务器安装

在你的项目的根目录 `/public` 下新建一个目录为 `h5` (演示目录，以实际项目为准),把刚刚打包好的 `static `文件夹和 `index.html` 上传到 `h5` 目录下。
接着，我们需要设置伪静态。保证可以正常的刷新或直接打开非首页。


如果你用的是 `nginx`，则其伪静态为：
```
location /h5/ {
   try_files $uri /h5/index.html;
}
```

访问路径：`域名/h5/`

如果你用的是 `apache` 则其伪静态为：
```
<IfModule mod_rewrite.c>

    RewriteEngine On
    RewriteBase /
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^h5/(.*) /h5/index.html [QSA,PT,L]
    
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond $1 !^(h5)
    RewriteRule ^(.*)$ index.php?s=/$1 [QSA,PT,L]
    
</IfModule>
```


## 路由模式为 hash

### Step. 1: 在 `HbuilderX` 打开 `manifest.json`->`h5` 配置->路由模式设置为 `hash`，运行的基础路径填写为 `./`


### Step. 2: 发行

点击 HBuilderx `工具栏` → `发行` → `网站-H5手机版(仅适用于uni-app)(H)`

### Step. 3: 服务器安装

在项目的 `根目录/public` 下新建一个目录为 `h5`(演示目录，以实际项目为准),把刚刚打包好的 `static` 文件夹和 `index.html` 上传到 `h5 `目录下。

访问路径：`域名/h5/`
