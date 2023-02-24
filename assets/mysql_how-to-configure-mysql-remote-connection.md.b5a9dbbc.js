import{_ as s,c as a,o as n,a as l}from"./app.b55333cf.js";const F=JSON.parse('{"title":"如何配置 MySQL 远程连接","description":"","frontmatter":{},"headers":[],"relativePath":"mysql/how-to-configure-mysql-remote-connection.md"}'),p={name:"mysql/how-to-configure-mysql-remote-connection.md"},o=l(`<h1 id="如何配置-mysql-远程连接" tabindex="-1">如何配置 MySQL 远程连接 <a class="header-anchor" href="#如何配置-mysql-远程连接" aria-hidden="true">#</a></h1><p>MySQL 8.0 以前的版本可以使用 grant 在授权的时候隐式的创建用户，8.0 以后已经不支持，所以必须先创建用户，然后再授权，命令如下</p><h2 id="配置单个数据库" tabindex="-1">配置单个数据库 <a class="header-anchor" href="#配置单个数据库" aria-hidden="true">#</a></h2><p>1、数据库授权</p><p>注意⚠️：远程连接新建一个帐号（帐号名不能为 root ）。 如：添加一个用户名为 db_user，密码为 db_pass，授权为 % （ % 表示所有 ip 都能连接）对 db_name 数据库所有权限，命令如下：</p><p>2、登录 MySQL</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">1、登陆 MySQL 数据库</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mysql -uroot -p</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">use mysql</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="mysql-8-0-版本" tabindex="-1">MySQL 8.0 版本 <a class="header-anchor" href="#mysql-8-0-版本" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">2、增加远程连接权限</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">创建用户</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">create user db_user@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> identified by </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">db_pass</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">3、授权并刷新权限</span></span>
<span class="line"><span style="color:#A6ACCD;">grant all privileges on db_name.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> to db_user@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> with grant option</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">flush privileges</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">4、退出数据库控制台，特别注意有分号</span></span>
<span class="line"><span style="color:#82AAFF;">exit</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="其余-mysql-版本-5-6" tabindex="-1">其余 MySQL 版本(5.6) <a class="header-anchor" href="#其余-mysql-版本-5-6" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">2、授权并刷新权限，特别注意有分号。</span></span>
<span class="line"><span style="color:#A6ACCD;">grant all privileges on db_name.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> to db_user@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> identified by </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">db_pass</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">flush privileges</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">3、退出数据库控制台，特别注意有分号</span></span>
<span class="line"><span style="color:#82AAFF;">exit</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">db_name: 库名</span></span>
<span class="line"><span style="color:#A6ACCD;">%: 授权地址 % 表示所有</span></span>
<span class="line"><span style="color:#A6ACCD;">db_user: 用户名</span></span>
<span class="line"><span style="color:#A6ACCD;">db_pass: 密码</span></span>
<span class="line"></span></code></pre></div><h2 id="开启数据库-root-远程链接" tabindex="-1">开启数据库 root 远程链接 <a class="header-anchor" href="#开启数据库-root-远程链接" aria-hidden="true">#</a></h2><h3 id="mysql-8-0-版本-1" tabindex="-1">MySQL 8.0 版本 <a class="header-anchor" href="#mysql-8-0-版本-1" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">CREATE USER </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> IDENTIFIED BY </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> PASSWORD EXPIRE NEVER</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">grant all privileges on </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> to </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">如果远程连接的时候报 plugin caching_sha2_password could not be loaded 这个错误，可以尝试修改密码加密插件：</span></span>
<span class="line"><span style="color:#A6ACCD;">ALTER USER </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> IDENTIFIED WITH mysql_native_password BY </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">FLUSH PRIVILEGES</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="其余-mysql-版本-5-6-1" tabindex="-1">其余 MySQL 版本(5.6) <a class="header-anchor" href="#其余-mysql-版本-5-6-1" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">1、为root用户添加远程连接的账号：  </span></span>
<span class="line"><span style="color:#A6ACCD;">GRANT ALL PRIVILEGES ON </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> TO root@</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> IDENTIFIED BY </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> WITH GRANT OPTION</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">指定 ip 方式:</span></span>
<span class="line"><span style="color:#A6ACCD;">ip 为 192.168.133.128 的主机以用户 myuser 和密码 mypwd 连接到 MySQL 服务器</span></span>
<span class="line"><span style="color:#A6ACCD;">GRANT ALL PRIVILEGES ON </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> TO </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">myuser</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">192.168.133.128</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> IDENTIFIED BY </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mypwd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> WITH GRANT OPTION</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">2、刷新权限并退出</span></span>
<span class="line"><span style="color:#A6ACCD;">flush PRIVILEGES</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">exit</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">这一步一定要做，不然无法成功！ 这句表示从 MySQL 数据库的 grant 表中重新加载权限数据</span></span>
<span class="line"><span style="color:#A6ACCD;">因为 MySQL 把权限都放在了 cache 中，所以在做完更改后需要重新加载。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">这里的 123456 为给 root 设置的密码，也可以改成自己的密码，% 代表所有主机，也可以具体到你的主机 ip 地址</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">% 允许从任何 ip 登录  </span></span>
<span class="line"><span style="color:#A6ACCD;">x.x.x.x 允许从指定的 ip 访问</span></span>
<span class="line"></span></code></pre></div><h2 id="验证是否配置成功" tabindex="-1">验证是否配置成功 <a class="header-anchor" href="#验证是否配置成功" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">use mysql;</span></span>
<span class="line"><span style="color:#A6ACCD;">select host, user, authentication_string, plugin from user</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,18),e=[o];function c(t,r,D,y,i,C){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{F as __pageData,d as default};
