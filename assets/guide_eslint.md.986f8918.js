import{_ as s,c as n,o as a,a as e}from"./app.63b193be.js";const u=JSON.parse('{"title":"ESLint \u914D\u7F6E","description":"","frontmatter":{},"headers":[],"relativePath":"guide/eslint.md"}'),o={name:"guide/eslint.md"},l=e(`<h1 id="eslint-\u914D\u7F6E" tabindex="-1">ESLint \u914D\u7F6E <a class="header-anchor" href="#eslint-\u914D\u7F6E" aria-hidden="true">#</a></h1><p>\u914D\u7F6E\u6587\u4EF6\u4E3A <code>.eslintrc</code> \uFF0C\u6846\u67B6\u4F7F\u7528 <a href="https://github.com/antfu/eslint-config" target="_blank" rel="noreferrer">antfu/eslint-config</a> \u505A\u4E3A\u89C4\u8303\uFF0C\u5E76\u65E0\u589E\u52A0\u5176\u5B83\u914D\u7F6E\uFF0C\u5982\u679C\u4F60\u5BF9\u9ED8\u8BA4\u7684\u89C4\u5219\u6709\u5F02\u8BAE\uFF0C\u53EF\u4EE5\u67E5\u9605 <a href="https://zh-hans.eslint.org/" target="_blank" rel="noreferrer">ESLint</a> \u5B98\u7F51\u89C4\u5219\u5E76\u5728 <code>.eslintrc</code> \u6587\u4EF6\u4E2D\u8FDB\u884C\u8986\u76D6\u3002</p><p>\u5F53\u4F60\u5BF9\u89C4\u5219\u8FDB\u884C\u4FEE\u6539\u540E\uFF0C\u539F\u6709\u7684\u4EE3\u7801\u53EF\u80FD\u4F1A\u56E0\u4E3A\u89C4\u5219\u7684\u53D8\u52A8\u5BFC\u81F4\u7F16\u8F91\u5668\u5927\u91CF\u63D0\u793A\u9519\u8BEF\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u8FD0\u884C <code>pnpm run lint:eslint</code> \u8FDB\u884C\u4E00\u6B21\u683C\u5F0F\u6821\u9A8C\uFF0C\u5982\u679C\u89C4\u5219\u652F\u6301\u81EA\u52A8\u4FEE\u590D\uFF0C\u5219\u4F1A\u5C06\u4E0D\u7B26\u5408\u89C4\u5219\u7684\u4EE3\u7801\u81EA\u52A8\u8FDB\u884C\u683C\u5F0F\u5316\u3002</p><h2 id="eslintrc-\u6587\u4EF6\u5185\u5BB9" tabindex="-1">.eslintrc \u6587\u4EF6\u5185\u5BB9 <a class="header-anchor" href="#eslintrc-\u6587\u4EF6\u5185\u5BB9" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">extends</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@antfu</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rules</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">curly</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">all</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,5),t=[l];function p(r,c,i,D,d,y){return a(),n("div",null,t)}const _=s(o,[["render",p]]);export{u as __pageData,_ as default};
