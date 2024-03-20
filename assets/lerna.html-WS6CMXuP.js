import{_ as t,r as o,o as r,c as l,a as n,b as s,d as e,e as p}from"./app-B-42ZPY7.js";const i="/learn-notes/img/lerna-nav.png",c="/learn-notes/img/lerna-common-nav.png",d={},u=n("h3",{id:"lerna-解决-vue3-组件共享问题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#lerna-解决-vue3-组件共享问题","aria-hidden":"true"},"#"),s(" lerna 解决 vue3 组件共享问题")],-1),m={href:"https://github.com/sanlangguo/learn-notes/issues/25",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/sanlangguo/lerna-vue3-dom",target:"_blank",rel:"noopener noreferrer"},k=p('<h4 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h4><p>Lerna 可以解决在拥有多个相关组件的项目中，统一管理这些组件的版本、依赖和发布。它可以帮助开发者更方便地进行组件开发和维护，同时提高项目的可维护性和可重复性。为了统一技术栈,现在公司项目要把之前 lerna react 项目统一改成 lerna vue3 + ts</p><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h4><ul><li>lerna 安装过程可参考官网教程即可</li></ul><h4 id="项目目录结构" tabindex="-1"><a class="header-anchor" href="#项目目录结构" aria-hidden="true">#</a> 项目目录结构</h4><p><img src="'+i+`" alt="整个项目目录结构"></p><ul><li>lerna 添加 common 和 vue-project</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
lerna create common

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+`" alt="common目录结构"></p><ul><li><p>vue3 + ts 安装参考官网即可</p></li><li><p>vue-project 引入 common</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lerna add @mono-repo/common --scope @mono-repo/vue-project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>安装成功后, 在 vue-project 的 package.json</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;@mono-repo/common&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.0.0&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在 vue-project app.vue 中 使用</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">&quot;@mono-repo/common/components/Button&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 引入公共组件</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>header<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Button <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token number">6666</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>

@<span class="token keyword">import</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token string">&quot;@mono-repo/common/assets/style/theme.css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 引入公共样式</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function g(b,h){const a=o("ExternalLinkIcon");return r(),l("div",null,[u,n("p",null,[n("a",m,[s("之前写过记录过 react 相关项目"),e(a)])]),n("p",null,[n("a",v,[s("当前 vue3 + ts + lerna github dom 地址"),e(a)])]),k])}const f=t(d,[["render",g],["__file","lerna.html.vue"]]);export{f as default};
