import{_ as s,c as n,o as a,a as e}from"./app.4f7bb2a0.js";const u=JSON.parse('{"title":"ESLint 配置","description":"","frontmatter":{},"headers":[],"relativePath":"guide/eslint.md"}'),o={name:"guide/eslint.md"},l=e(`<h1 id="eslint-配置" tabindex="-1">ESLint 配置 <a class="header-anchor" href="#eslint-配置" aria-hidden="true">#</a></h1><p>配置文件为 <code>.eslintrc</code> ，框架使用 <a href="https://github.com/antfu/eslint-config" target="_blank" rel="noreferrer">antfu/eslint-config</a> 做为规范，并无增加其它配置，如果你对默认的规则有异议，可以查阅 <a href="https://zh-hans.eslint.org/" target="_blank" rel="noreferrer">ESLint</a> 官网规则并在 <code>.eslintrc</code> 文件中进行覆盖。</p><p>当你对规则进行修改后，原有的代码可能会因为规则的变动导致编辑器大量提示错误，你可以通过运行 <code>pnpm run lint:eslint</code> 进行一次格式校验，如果规则支持自动修复，则会将不符合规则的代码自动进行格式化。</p><h2 id="eslintrc-文件内容" tabindex="-1">.eslintrc 文件内容 <a class="header-anchor" href="#eslintrc-文件内容" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">extends</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@antfu</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rules</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">curly</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">all</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,5),t=[l];function p(r,c,i,D,d,y){return a(),n("div",null,t)}const _=s(o,[["render",p]]);export{u as __pageData,_ as default};
