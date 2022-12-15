import{_ as s,c as n,o as a,a as l}from"./app.27b9d165.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"php/install.md"}'),p={name:"php/install.md"},e=l(`<h2 id="nginx-环境服务器" tabindex="-1">Nginx 环境服务器 <a class="header-anchor" href="#nginx-环境服务器" aria-hidden="true">#</a></h2><p>在Nginx低版本中，是不支持PATHINFO的，但是可以通过在Nginx.conf中配置转发规则实现：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">location /m/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">    index index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    try_files $uri $uri/ /m/index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">location /member/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">    index index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    try_files $uri $uri/ /member/index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// v3.5.0 及以上，只需配置最后一项即可</span></span>
<span class="line"><span style="color:#A6ACCD;">location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!-e $request_filename) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        rewrite  ^(.*)$  /index.php?s=/$1  last;</span></span>
<span class="line"><span style="color:#A6ACCD;">        break;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如果你的应用安装在二级目录，Nginx的伪静态方法设置如下，其中youdomain是所在的目录名称。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">location /youdomain/m/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">    index index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    try_files $uri $uri/ /youdomain/m/index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">location /youdomain/member/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">    index index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    try_files $uri $uri/ /youdomain/member/index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// v3.5.0 及以上，只需配置最后一项即可</span></span>
<span class="line"><span style="color:#A6ACCD;">location /youdomain/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!-e $request_filename){</span></span>
<span class="line"><span style="color:#A6ACCD;">        rewrite  ^/youdomain/(.*)$  /youdomain/index.php?s=/$1  last;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="apache环境服务器" tabindex="-1">Apache环境服务器 <a class="header-anchor" href="#apache环境服务器" aria-hidden="true">#</a></h2><p>httpd.conf配置文件中加载了mod_rewrite.so模块 AllowOverride None 将None改为 All 把下面的内容保存为.htaccess文件放到应用入口文件的同级目录下（默认是/public/目录）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;IfModule mod_rewrite.c&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Options +FollowSymlinks -Multiviews</span></span>
<span class="line"><span style="color:#A6ACCD;">RewriteEngine on</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">RewriteCond %{REQUEST_URI} ^/m/</span></span>
<span class="line"><span style="color:#A6ACCD;">RewriteCond %{REQUEST_FILENAME} !-d</span></span>
<span class="line"><span style="color:#A6ACCD;">RewriteCond %{REQUEST_FILENAME} !-f</span></span>
<span class="line"><span style="color:#A6ACCD;">RewriteRule ^m/(.*)$ m/index.html [QSA,PT,L]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">RewriteCond %{REQUEST_URI} ^/member/</span></span>
<span class="line"><span style="color:#A6ACCD;">RewriteCond %{REQUEST_FILENAME} !-d</span></span>
<span class="line"><span style="color:#A6ACCD;">RewriteCond %{REQUEST_FILENAME} !-f</span></span>
<span class="line"><span style="color:#A6ACCD;">RewriteRule ^member/(.*)$ member/index.html [QSA,PT,L]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// v3.5.0 及以上，只需配置最后一项即可</span></span>
<span class="line"><span style="color:#A6ACCD;">RewriteCond %{REQUEST_FILENAME} !-d</span></span>
<span class="line"><span style="color:#A6ACCD;">RewriteCond %{REQUEST_FILENAME} !-f</span></span>
<span class="line"><span style="color:#A6ACCD;">RewriteRule ^(.*)$ index.php?/$1 [QSA,PT,L]</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/IfModule&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,8),o=[e];function c(i,t,r,A,C,d){return a(),n("div",null,o)}const m=s(p,[["render",c]]);export{D as __pageData,m as default};
