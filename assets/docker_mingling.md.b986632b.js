import{_ as s,c as e,o as a,a as n}from"./app.225ec4b8.js";const y=JSON.parse('{"title":"docker 常用命令","description":"","frontmatter":{},"headers":[],"relativePath":"docker/mingling.md"}'),o={name:"docker/mingling.md"},c=n(`<h1 id="docker-常用命令" tabindex="-1">docker 常用命令 <a class="header-anchor" href="#docker-常用命令" aria-hidden="true">#</a></h1><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">systemctl start docker     </span><span style="color:#676E95;">#运行Docker守护进程</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl stop docker      </span><span style="color:#676E95;">#停止Docker守护进程</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart docker   </span><span style="color:#676E95;">#重启Docker守护进程</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl </span><span style="color:#82AAFF;">enable</span><span style="color:#A6ACCD;"> docker    </span><span style="color:#676E95;">#设置Docker开机自启动</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status docker    </span><span style="color:#676E95;">#查看Docker的运行状态</span></span>
<span class="line"></span></code></pre></div><p>查看已有镜像</p><p><code>docker images</code></p><p>强制删除镜像</p><p><code>docker rmi -f registry.cn-hangzhou.aliyuncs.com/lxepoo/apache-php5</code></p><p>进入容器。e1abc**** 是执行 docker images 命令查询到的 ImageId，使用 docker run 命令进入容器</p><p><code>docker run -it e1abc**** /bin/bash</code></p>`,8),p=[c];function t(r,l,d,i,_,k){return a(),e("div",null,p)}const h=s(o,[["render",t]]);export{y as __pageData,h as default};