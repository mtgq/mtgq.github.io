import{_ as a,c as s,o as e,a as o}from"./app.225ec4b8.js";const h=JSON.parse('{"title":"Visual Studio Code 便携","description":"","frontmatter":{},"headers":[],"relativePath":"tools/started.md"}'),n={name:"tools/started.md"},t=o(`<h1 id="visual-studio-code-便携" tabindex="-1">Visual Studio Code 便携 <a class="header-anchor" href="#visual-studio-code-便携" aria-hidden="true">#</a></h1><p><a href="https://code.visualstudio.com/docs/editor/portable" target="_blank" rel="noreferrer">官方便携模式说明</a></p><h2 id="便携模式" tabindex="-1">便携模式 <a class="header-anchor" href="#便携模式" aria-hidden="true">#</a></h2><h2 id="步骤一-首先去-visual-studio-code-官网下载-zip-格式分发版" tabindex="-1">步骤一: 首先去 <a href="https://code.visualstudio.com" target="_blank" rel="noreferrer">Visual Studio Code</a> 官网下载 zip 格式分发版 <a class="header-anchor" href="#步骤一-首先去-visual-studio-code-官网下载-zip-格式分发版" aria-hidden="true">#</a></h2><p>解压缩下载的 Visual Studio Code 后，只需在 VS Code&#39;s 的文件夹中创建一个 <code>data</code> 文件夹：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">|-</span><span style="color:#A6ACCD;"> VSCode</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">win32</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">x64</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1.25</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">insider</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|-</span><span style="color:#A6ACCD;"> Code</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exe</span><span style="color:#A6ACCD;"> (or code executable)</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|-</span><span style="color:#A6ACCD;"> data</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span></span>
<span class="line"></span></code></pre></div><p>创建后，该文件夹将用于包含所有 Visual Studio Code 数据，包括会话状态，首选项，扩展等。</p><p>该 <code>data</code> 文件夹可以移动到其他 Visual Studio Code 安装。这对于更新便携式代码版本很有用：只需将 <code>data</code> 文件夹移动到较新的 Visual Studio Code 提取版本即可。</p><h2 id="步骤二-tmp-目录" tabindex="-1">步骤二: TMP 目录 <a class="header-anchor" href="#步骤二-tmp-目录" aria-hidden="true">#</a></h2><p>默认情况下，即使在便携模式下，默认 <code>TMP</code> 目录仍然是系统目录，因为没有保留状态。如果您还想在便携式目录中拥有 TMP 目录，只需在该 <code>data</code> 文件夹中创建一个 <code>tmp</code> 空目录即可。只要存在 <code>tmp</code> 目录，它就会用于保存 TMP 数据。</p>`,10),l=[t];function p(c,d,r,i,D,C){return e(),s("div",null,l)}const F=a(n,[["render",p]]);export{h as __pageData,F as default};