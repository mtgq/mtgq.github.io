import{_ as s,c as n,o as a,a as l}from"./app.9b094aba.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"php/install.md"}'),p={name:"php/install.md"},e=l(`<h2 id="nginx-\u73AF\u5883\u670D\u52A1\u5668" tabindex="-1">Nginx \u73AF\u5883\u670D\u52A1\u5668 <a class="header-anchor" href="#nginx-\u73AF\u5883\u670D\u52A1\u5668" aria-hidden="true">#</a></h2><p>\u5728Nginx\u4F4E\u7248\u672C\u4E2D\uFF0C\u662F\u4E0D\u652F\u6301PATHINFO\u7684\uFF0C\u4F46\u662F\u53EF\u4EE5\u901A\u8FC7\u5728Nginx.conf\u4E2D\u914D\u7F6E\u8F6C\u53D1\u89C4\u5219\u5B9E\u73B0\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">location /m/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">    index index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    try_files $uri $uri/ /m/index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">location /member/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">    index index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    try_files $uri $uri/ /member/index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// v3.5.0 \u53CA\u4EE5\u4E0A\uFF0C\u53EA\u9700\u914D\u7F6E\u6700\u540E\u4E00\u9879\u5373\u53EF</span></span>
<span class="line"><span style="color:#A6ACCD;">location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!-e $request_filename) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        rewrite  ^(.*)$  /index.php?s=/$1  last;</span></span>
<span class="line"><span style="color:#A6ACCD;">        break;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u679C\u4F60\u7684\u5E94\u7528\u5B89\u88C5\u5728\u4E8C\u7EA7\u76EE\u5F55\uFF0CNginx\u7684\u4F2A\u9759\u6001\u65B9\u6CD5\u8BBE\u7F6E\u5982\u4E0B\uFF0C\u5176\u4E2Dyoudomain\u662F\u6240\u5728\u7684\u76EE\u5F55\u540D\u79F0\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">location /youdomain/m/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">    index index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    try_files $uri $uri/ /youdomain/m/index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">location /youdomain/member/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">    index index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    try_files $uri $uri/ /youdomain/member/index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// v3.5.0 \u53CA\u4EE5\u4E0A\uFF0C\u53EA\u9700\u914D\u7F6E\u6700\u540E\u4E00\u9879\u5373\u53EF</span></span>
<span class="line"><span style="color:#A6ACCD;">location /youdomain/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!-e $request_filename){</span></span>
<span class="line"><span style="color:#A6ACCD;">        rewrite  ^/youdomain/(.*)$  /youdomain/index.php?s=/$1  last;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="apache\u73AF\u5883\u670D\u52A1\u5668" tabindex="-1">Apache\u73AF\u5883\u670D\u52A1\u5668 <a class="header-anchor" href="#apache\u73AF\u5883\u670D\u52A1\u5668" aria-hidden="true">#</a></h2><p>httpd.conf\u914D\u7F6E\u6587\u4EF6\u4E2D\u52A0\u8F7D\u4E86mod_rewrite.so\u6A21\u5757 AllowOverride None \u5C06None\u6539\u4E3A All \u628A\u4E0B\u9762\u7684\u5185\u5BB9\u4FDD\u5B58\u4E3A.htaccess\u6587\u4EF6\u653E\u5230\u5E94\u7528\u5165\u53E3\u6587\u4EF6\u7684\u540C\u7EA7\u76EE\u5F55\u4E0B\uFF08\u9ED8\u8BA4\u662F/public/\u76EE\u5F55\uFF09</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;IfModule mod_rewrite.c&gt;</span></span>
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
<span class="line"><span style="color:#A6ACCD;">// v3.5.0 \u53CA\u4EE5\u4E0A\uFF0C\u53EA\u9700\u914D\u7F6E\u6700\u540E\u4E00\u9879\u5373\u53EF</span></span>
<span class="line"><span style="color:#A6ACCD;">RewriteCond %{REQUEST_FILENAME} !-d</span></span>
<span class="line"><span style="color:#A6ACCD;">RewriteCond %{REQUEST_FILENAME} !-f</span></span>
<span class="line"><span style="color:#A6ACCD;">RewriteRule ^(.*)$ index.php?/$1 [QSA,PT,L]</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/IfModule&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,8),o=[e];function c(i,t,r,A,C,d){return a(),n("div",null,o)}const m=s(p,[["render",c]]);export{D as __pageData,m as default};
