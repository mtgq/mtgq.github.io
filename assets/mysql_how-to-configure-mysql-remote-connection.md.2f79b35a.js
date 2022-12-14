import{_ as s,c as a,o as n,a as l}from"./app.4f7bb2a0.js";const F=JSON.parse('{"title":"如何配置MySQL远程连接","description":"","frontmatter":{},"headers":[],"relativePath":"mysql/how-to-configure-mysql-remote-connection.md"}'),p={name:"mysql/how-to-configure-mysql-remote-connection.md"},o=l(`<h1 id="如何配置mysql远程连接" tabindex="-1">如何配置MySQL远程连接 <a class="header-anchor" href="#如何配置mysql远程连接" aria-hidden="true">#</a></h1><p>mysql8.0以前的版本可以使用grant在授权的时候隐式的创建用户，8.0以后已经不支持，所以必须先创建用户，然后再授权，命令如下</p><h2 id="配置单个数据库" tabindex="-1">配置单个数据库 <a class="header-anchor" href="#配置单个数据库" aria-hidden="true">#</a></h2><p>1、打开 iptables 3306 端口</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">centos</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">iptables -I INPUT 4 -p tcp -m state --state NEW -m tcp --dport 3306 -j ACCEPT</span></span>
<span class="line"><span style="color:#A6ACCD;">service iptables save </span><span style="color:#676E95;">#保存iptables规则</span></span>
<span class="line"></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">ubuntu/debian</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">iptables -I INPUT 4 -p tcp -m state --state NEW -m tcp --dport 3306 -j ACCEPT</span></span>
<span class="line"><span style="color:#A6ACCD;">iptables-save </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> /etc/iptables.up.rules </span><span style="color:#676E95;">#保存iptables规则</span></span>
<span class="line"></span></code></pre></div><p>2、数据库授权</p><p>注意⚠️：远程连接新建一个帐号（帐号名不能为root）。 如：添加一个用户名为db_user，密码为db_pass，授权为% （%表示所有IP能连接）对db_name数据库所有权限，命令如下：</p><p>登录mysql</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">1、登陆mysql数据库</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mysql -uroot -p</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">use mysql</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="mysql-8-0-版本" tabindex="-1">mysql 8.0 版本 <a class="header-anchor" href="#mysql-8-0-版本" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">2、增加远程连接权限</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">创建用户</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">create user db_user@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> identified by </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">db_pass</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">3、授权并刷新权限</span></span>
<span class="line"><span style="color:#A6ACCD;">grant all privileges on db_name.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> to db_user@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> with grant option</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">flush privileges</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">5、退出数据库控制台，特别注意有分号</span></span>
<span class="line"><span style="color:#82AAFF;">exit</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="其余-mysql-版本-5-6" tabindex="-1">其余 mysql 版本(5.6) <a class="header-anchor" href="#其余-mysql-版本-5-6" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">2、授权并刷新权限，特别注意有分号。</span></span>
<span class="line"><span style="color:#A6ACCD;">grant all privileges on db_name.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> to db_user@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> identified by </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">db_pass</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">flush privileges</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">3、退出数据库控制台，特别注意有分号</span></span>
<span class="line"><span style="color:#82AAFF;">exit</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="开启所有数据库" tabindex="-1">开启所有数据库 <a class="header-anchor" href="#开启所有数据库" aria-hidden="true">#</a></h2><h3 id="mysql-8-0-版本-1" tabindex="-1">mysql 8.0 版本 <a class="header-anchor" href="#mysql-8-0-版本-1" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">CREATE USER </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> IDENTIFIED BY </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hadoop3!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">grant all privileges on </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> to </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">如果远程连接的时候报plugin caching_sha2_password could not be loaded这个错误，可以尝试修改密码加密插件：</span></span>
<span class="line"><span style="color:#A6ACCD;">alter user </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> identified with mysql_native_password by </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hadoop3!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="其余-mysql-版本-5-6-1" tabindex="-1">其余 mysql 版本(5.6) <a class="header-anchor" href="#其余-mysql-版本-5-6-1" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">1、为root用户添加远程连接的账号：  </span></span>
<span class="line"><span style="color:#A6ACCD;">GRANT ALL PRIVILEGES ON </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> TO root@</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> IDENTIFIED BY </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">2、允许任意主机以用户root和密码lnmp.org连接到mysql服务器</span></span>
<span class="line"><span style="color:#A6ACCD;">GRANT ALL PRIVILEGES ON </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> TO </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> IDENTIFIED BY </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lnmp.org</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> WITH GRANT OPTION</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">3、刷新MySQL的系统权限相关表</span></span>
<span class="line"><span style="color:#A6ACCD;">flush PRIVILEGES</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">到这里就可以在服务器以外的电脑上使用类似于Navicat Premium工具来远程连接mysql了</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">补充：</span></span>
<span class="line"><span style="color:#A6ACCD;">IP为192.168.133.128的主机以用户myuser和密码mypwd连接到mysql服务器</span></span>
<span class="line"><span style="color:#A6ACCD;">GRANT ALL PRIVILEGES ON </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> TO </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">myuser</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">192.168.133.128</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> IDENTIFIED BY </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mypwd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> WITH GRANT OPTION</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">刷新权限并退出</span></span>
<span class="line"><span style="color:#A6ACCD;">flush PRIVILEGES</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">exit</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">% 允许从任何ip登录  </span></span>
<span class="line"><span style="color:#A6ACCD;">x.x.x.x 允许从指定的ip访问</span></span>
<span class="line"></span></code></pre></div><h2 id="验证是否配置成功" tabindex="-1">验证是否配置成功 <a class="header-anchor" href="#验证是否配置成功" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">select host, user, authentication_string, plugin from user</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,21),e=[o];function c(t,r,D,y,i,C){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{F as __pageData,d as default};
