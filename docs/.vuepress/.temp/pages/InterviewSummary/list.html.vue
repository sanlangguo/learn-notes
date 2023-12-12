<template><div><h2 id="_2023-12月" tabindex="-1"><a class="header-anchor" href="#_2023-12月" aria-hidden="true">#</a> 2023 12月</h2>
<h3 id="上海朋熙半导体" tabindex="-1"><a class="header-anchor" href="#上海朋熙半导体" aria-hidden="true">#</a> 上海朋熙半导体</h3>
<h3 id="一面" tabindex="-1"><a class="header-anchor" href="#一面" aria-hidden="true">#</a> 一面</h3>
<p>开始: 自我介绍</p>
<h3 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> css</h3>
<h4 id="css-继承" tabindex="-1"><a class="header-anchor" href="#css-继承" aria-hidden="true">#</a> css 继承</h4>
<ol>
<li>字体属性（font）</li>
<li>文本属性（text）</li>
<li>颜色属性（color）</li>
<li>列表属性（list）</li>
<li>表格属性（table）</li>
<li>边框属性（border）</li>
<li>背景属性（background）</li>
<li>元素的可见性属性（visibility）</li>
<li>元素的透明度属性（opacity）</li>
<li>元素的文本装饰属性（text-decoration）</li>
<li>元素的文本转换属性（text-transform）</li>
<li>元素的文本对齐属性（text-align）</li>
<li>元素的文本缩进属性（text-indent）</li>
<li>元素的文本行高属性（line-height）</li>
<li>元素的文本字间距属性（letter-spacing）</li>
<li>元素的文本单词间距属性（word-spacing）</li>
<li>元素的文本换行属性（word-wrap）</li>
<li>元素的文本溢出属性（text-overflow）</li>
<li>元素的文本换行方式属性（white-space）</li>
<li>元素的文本溢出方式属性（overflow-wrap）</li>
</ol>
<h4 id="css-如何隐藏元素" tabindex="-1"><a class="header-anchor" href="#css-如何隐藏元素" aria-hidden="true">#</a> css 如何隐藏元素</h4>
<p><strong>完全隐藏的方法 (元素 Dom 节点会从渲染树消失，更不会占据空间，也不可被点击触发 click 事件)</strong></p>
<ul>
<li>设置display属性为 none，这样元素就被完全隐藏了。</li>
<li>这是 HTML5 新增属性，相当于 display: none，直接写在元素上面，如<div hidden></div></li>
</ul>
<p><strong>视觉上隐藏：元素依旧占据着位置，只是我们视觉上看不见而已, 但也可能会触发click事件</strong></p>
<ul>
<li>
<p>opacity属性作用于元素时，会将元素和其内容当作一个整体，从而设置整体的透明度，还可与 transition 搭配使用，从而达到一个动态变化的效果。
opacity:0；将元素整体透明度设置为 0，视觉上就会变得不可见，但依旧占据空间，而且可以被点击触发 click 事件</p>
</li>
<li>
<p>visibility 属性可控制元素的显示与隐藏，且不更改文档的布局，依旧占据空间，但当visibility:hidden时不可点击触发 click 事件。</p>
</li>
</ul>
<p><strong>其他 css 属性方法</strong></p>
<p><strong>绝对定位</strong></p>
<ul>
<li>设置 posoition 为 absolute 或 fixed，再通过设置 top、left 等值，将其移出可视区域</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
<span class="token property">left</span><span class="token punctuation">:</span> -999px<span class="token punctuation">;</span>
<span class="token property">top</span><span class="token punctuation">:</span> -999px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>设置 margin</strong></p>
<ul>
<li>通过设置 margin 值，将其移出可视区域范围（可视区域占位）。如：margin-left: -99999px;</li>
</ul>
<p><strong>设置宽高为 0</strong></p>
<ul>
<li>将元素的 margin、border、padding、height 和 width 等影响元素盒模型的属性设为 0。 如果元素内有子元素或内容，就设置其 overflow:hidden 来隐藏其子元素</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span> <span class="token comment">/*隐藏子元素*/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>裁剪元素</strong></p>
<ul>
<li>通过clip-path属性来剪裁元素，但这个属性比较新，浏览器兼容性比较差，了解一下即可</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>0px 0px<span class="token punctuation">,</span> 0px 0px<span class="token punctuation">,</span> 0px 0px<span class="token punctuation">,</span> 0px 0px<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="分析比较-opacity-0、visibility-hidden、display-none-的区别和优劣。" tabindex="-1"><a class="header-anchor" href="#分析比较-opacity-0、visibility-hidden、display-none-的区别和优劣。" aria-hidden="true">#</a> 分析比较 opacity: 0、visibility: hidden、display: none 的区别和优劣。</h5>
<ul>
<li>display:none; : 会让元素完全从渲染树中消失，渲染的时候不占据任何空间, 不能点击。</li>
<li>visibility: hidden; ：不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，不能点击。</li>
<li>opacity: 0; : 不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，可以点击。</li>
</ul>
<p>继承性：</p>
<ul>
<li>
<p>display 和 opacity 属性是非继承属性。</p>
</li>
<li>
<p>display: none 元素的子孙节点消失的原因: 父元素从渲染树消失造成，从而子孙节点也无法显示。</p>
</li>
<li>
<p>opacity: 0 元素的子孙节点消失的原因: opacity 属性会将元素和其内容当作一个整体来进行控制。</p>
</li>
</ul>
<p>visibility 属性是继承属性。</p>
<ul>
<li>visibility: hidden 元素的子孙节点消失的原因是：子孙节点继承了 visibility: hidden。
我们可通过设置 visibility: visible;可以让子孙节点显式。</li>
</ul>
<p>性能：</p>
<ul>
<li>display: none; : 修改元素会造成整个文档的回流，性能消耗较大 。</li>
<li>visibility:hidden: 修改元素会造成重绘,性能消耗较少。</li>
<li>opacity: 0 ： 修改元素会造成重绘，性能消耗较少。</li>
</ul>
<h4 id="z-index-如何隐藏元素-原理是什么" tabindex="-1"><a class="header-anchor" href="#z-index-如何隐藏元素-原理是什么" aria-hidden="true">#</a> z-index 如何隐藏元素,原理是什么</h4>
<p>要隐藏元素，可以使用 <code v-pre>z-index</code> 属性。<code v-pre>z-index</code> 属性用于控制元素的堆叠顺序，即元素在层叠上下文中的显示顺序。</p>
<p>要隐藏元素，可以将其 <code v-pre>z-index</code> 设置为较低的值，比如负数。这样，被隐藏的元素就会被放置在其他元素的下方，从而实现隐藏效果。</p>
<p>例如，可以使用以下 CSS 代码隐藏一个元素：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样设置后，该元素就会被放置在其他具有正数 <code v-pre>z-index</code> 值的元素下面，从而隐藏起来。</p>
<h4 id="html5" tabindex="-1"><a class="header-anchor" href="#html5" aria-hidden="true">#</a> HTML5</h4>
<ol>
<li>有哪些新增</li>
<li>localStore 的缺点</li>
<li>prefect 和 preload 区别</li>
</ol>
<p><strong>js</strong></p>
<ol>
<li>js 继承</li>
<li>this 的理解</li>
<li>如何实现 call, apply</li>
<li>promise 如何终止</li>
</ol>
<p><strong>vue</strong></p>
<ol>
<li>vue3 有哪些更新</li>
<li>vue 如何实现继承</li>
<li>pinia 和 vuex 区别</li>
</ol>
<p><strong>场景问答</strong></p>
<ol>
<li>多个 loading ,多个 http 请求, axios 如何在数据加载完后, 同时取消 多个loading</li>
</ol>
<p><strong>前端工程化</strong></p>
<ol>
<li>前端如何做优化</li>
</ol>
<p>结束: 有什么问题要问的</p>
<h5 id="二面" tabindex="-1"><a class="header-anchor" href="#二面" aria-hidden="true">#</a> 二面</h5>
<p>开始: 自我介绍</p>
<p><strong>项目经验</strong></p>
<ol>
<li>qiankun 如何解决内存泄露</li>
<li>如何解决跨域</li>
<li>多个窗口如何传参</li>
<li>http 复杂请求的理解, 为什么触发复杂请求</li>
<li>app 容器化前端包如何防止拦截包</li>
<li>中台项目如何做的优化</li>
<li>为什么使用qiankun</li>
<li>如何检测 app 离线包的性能</li>
<li>jsbrige 原理, 如何触发回调</li>
<li>jsonp 原理</li>
<li>移动端如何做真机调试, v-console 如何做断点</li>
<li>动画有哪些</li>
</ol>
<p>结束: 有什么问题要问的</p>
</div></template>


