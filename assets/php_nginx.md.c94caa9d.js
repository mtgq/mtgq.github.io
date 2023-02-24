import{_ as s,c as n,o as a,a as l}from"./app.225ec4b8.js";const y=JSON.parse('{"title":"nginx","description":"","frontmatter":{},"headers":[],"relativePath":"php/nginx.md"}'),p={name:"php/nginx.md"},e=l(`<h1 id="nginx" tabindex="-1">nginx <a class="header-anchor" href="#nginx" aria-hidden="true">#</a></h1><h2 id="nginx添加跨域配置" tabindex="-1">nginx添加跨域配置 <a class="header-anchor" href="#nginx添加跨域配置" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...省略部分代码...</span></span>
<span class="line"><span style="color:#A6ACCD;">    location </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;"> .</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">gif</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">jpg</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">jpeg</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">png</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">bmp</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">swf</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">$</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        add_header Access-Control-Allow-Origin </span><span style="color:#89DDFF;">*;</span></span>
<span class="line"><span style="color:#A6ACCD;">        add_header Access-Control-Allow-Headers X-Requested-With</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        add_header Access-Control-Allow-Methods GET,POST,OPTIONS</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        expires 30d</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...省略部分代码...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,3),o=[e];function c(t,r,D,i,A,C){return a(),n("div",null,o)}const F=s(p,[["render",c]]);export{y as __pageData,F as default};