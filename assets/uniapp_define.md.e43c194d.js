import{_ as s,c as a,o as n,a as p}from"./app.63b193be.js";const F=JSON.parse('{"title":"\u9879\u76EE\u4E2D\u5B9A\u4E49\u5E38\u91CF","description":"","frontmatter":{},"headers":[],"relativePath":"uniapp/define.md"}'),o={name:"uniapp/define.md"},e=p(`<h1 id="\u9879\u76EE\u4E2D\u5B9A\u4E49\u5E38\u91CF" tabindex="-1">\u9879\u76EE\u4E2D\u5B9A\u4E49\u5E38\u91CF <a class="header-anchor" href="#\u9879\u76EE\u4E2D\u5B9A\u4E49\u5E38\u91CF" aria-hidden="true">#</a></h1><h3 id="\u65B0\u5EFA-utils-define-js-\u6587\u4EF6" tabindex="-1">\u65B0\u5EFA <code>/utils/define.js</code> \u6587\u4EF6 <a class="header-anchor" href="#\u65B0\u5EFA-utils-define-js-\u6587\u4EF6" aria-hidden="true">#</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/* p<wbr>rocess.env.NODE_ENV\u8BBE\u7F6E\u751F\u4EA7\u73AF\u5883\u6A21\u5F0F */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> baseURL </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NODE_ENV </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://prod.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://localhost:30000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u63A5\u53E3\u524D\u7F00</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> define </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">baseURL</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> baseURL</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> define</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5982\u4F55\u5728-js-\u6587\u4EF6\u4E2D\u4F7F\u7528" tabindex="-1">\u5982\u4F55\u5728 js \u6587\u4EF6\u4E2D\u4F7F\u7528 <a class="header-anchor" href="#\u5982\u4F55\u5728-js-\u6587\u4EF6\u4E2D\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u4F8B\u5982 <code>/utils/request.js</code> \u6587\u4EF6</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> define </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./define</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> host </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> define</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">baseURL</span></span>
<span class="line"></span></code></pre></div>`,6),l=[e];function t(c,r,D,i,y,d){return n(),a("div",null,l)}const A=s(o,[["render",t]]);export{F as __pageData,A as default};
