<template><div><h3 id="手写-bind-call" tabindex="-1"><a class="header-anchor" href="#手写-bind-call" aria-hidden="true">#</a> 手写 bind, call</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 模拟 call</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myCall</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">context <span class="token operator">=</span> window<span class="token punctuation">,</span> <span class="token operator">...</span>arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>
  context <span class="token operator">=</span> context <span class="token operator">||</span> window<span class="token punctuation">;</span>
  <span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>arg<span class="token punctuation">)</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 模拟 apply</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myApply</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">context <span class="token operator">=</span> window<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> result<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

<span class="token comment">// 模拟实现bind</span>
<span class="token doc-comment comment">/**
 * 1.处理参数，返回一个闭包
 * 2.判断是否为构造函数调用，如果是则使用new 调用当前函数
 * 3.如果不是，使用apply,将 context 和处理好的参数传入
 */</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myBind</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> <span class="token operator">...</span>args1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">'Error'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> _this <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">F</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">_this</span><span class="token punctuation">(</span><span class="token operator">...</span>args1<span class="token punctuation">,</span> <span class="token operator">...</span>args2<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">_this</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args1<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>args2<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-有哪些方法" tabindex="-1"><a class="header-anchor" href="#array-有哪些方法" aria-hidden="true">#</a> Array 有哪些方法</h3>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noopener noreferrer">MDN<ExternalLinkIcon/></a></p>
<ul>
<li>
<p>使用slice和concat对对象数组的拷贝，整个拷贝还是浅拷贝，拷贝之后数组各个值的指针还是指向相同的存储地址。</p>
</li>
<li>
<p>slice 不会修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组。原数组的元素会按照下述规则拷贝：</p>
</li>
<li>
<p>如果该元素是个对象引用 （不是实际的对象），slice 会拷贝这个对象引用到新的数组里。两个对象引用都引用了同一个对象。如果被引用的对象发生改变，则新的和原来的数组中的这个元素也会发生改变。</p>
</li>
<li>
<p>对于字符串、数字及布尔值来说（不是 String、Number 或者 Boolean 对象），slice 会拷贝这些值到新的数组里。在别的数组里修改这些字符串或数字或是布尔值，将不会影响另一个数组。
如果向两个数组任一中添加了新元素，则另一个不会受到影响。</p>
</li>
</ul>
<h3 id="js-深拷贝" tabindex="-1"><a class="header-anchor" href="#js-深拷贝" aria-hidden="true">#</a> js 深拷贝</h3>
<p><a href="https://www.cnblogs.com/penghuwan/p/7359026.html#_label0_1" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

or <span class="token keyword">let</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="defer与async" tabindex="-1"><a class="header-anchor" href="#defer与async" aria-hidden="true">#</a> defer与async</h3>
<p>defer与async的区别是：defer要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行；async一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。一句话，defer是“渲染完再执行”，async是“下载完就执行”。另外，如果有多个defer脚本，会按照它们在页面出现的顺序加载，而多个async脚本是不能保证加载顺序的。</p>
<p>浏览器遇到 async 脚本时不会阻塞页面渲染，而是直接下载然后运行。这样脚本的运行次序就无法控制，只是脚本不会阻止剩余页面的显示。当页面的脚本之间彼此独立，且不依赖于本页面的其它任何脚本时，async 是最理想的选择。</p>
<p>使用 defer 属性，脚本将按照在页面中出现的顺序加载和运行</p>
<p>脚本调用策略小结：</p>
<ul>
<li>如果脚本无需等待页面解析，且无依赖独立运行，那么应使用 <code v-pre>async</code></li>
<li>如果脚本需要等待页面解析，且依赖于其它脚本，调用这些脚本时应使用 <code v-pre>defer</code>，将关联的脚本按所需顺序置于 <code v-pre>HTML</code> 中。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script defer src<span class="token operator">=</span><span class="token string">"js/vendor/jquery.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>script <span class="token keyword">async</span> src<span class="token operator">=</span><span class="token string">"js/script3.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用-preload-预加载页面资源" tabindex="-1"><a class="header-anchor" href="#用-preload-预加载页面资源" aria-hidden="true">#</a> 用 preload 预加载页面资源</h3>
<p>如何区分 preload 和 prefetch</p>
<ul>
<li>preload   是告诉浏览器页面必定需要的资源，浏览器一定会加载这些资源；</li>
<li>prefetch 是告诉浏览器页面可能需要的资源，浏览器不一定会加载这些资源</li>
</ul>
<p>可以预加载哪些类型的内容？</p>
<ul>
<li>audio：音频文件，通常用于 <code v-pre>&lt;audio&gt;</code></li>
<li>document: 旨在由<code v-pre>&lt;frame&gt;</code>或嵌入的 HTML 文档 <code v-pre>&lt;iframe&gt;</code>。</li>
<li>embed：要嵌入到 <code v-pre>&lt;embed&gt;</code>元素中的资源。</li>
<li>fetch：要通过 fetch 或 XHR 请求访问的资源，例如 ArrayBuffer 或 JSON 文件。</li>
<li>font: 字体文件。</li>
<li>image： 图像文件。</li>
<li>object：要嵌入到<code v-pre>&lt;object&gt;</code>元素中的资源。</li>
<li>script: JavaScript 文件。</li>
<li>style: CSS 样式表。</li>
<li>track: WebVTT 文件。</li>
<li>worker：一个 JavaScript 网络工作者或共享工作者。</li>
<li>video：视频文件，通常用于 <code v-pre>&lt;video&gt;</code>。
<br></li>
</ul>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="js-如何获取demo元素" tabindex="-1"><a class="header-anchor" href="#js-如何获取demo元素" aria-hidden="true">#</a> js 如何获取demo元素</h3>
<p><a href="https://www.jianshu.com/p/6fefda57b51f" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="var-let-const-的区别" tabindex="-1"><a class="header-anchor" href="#var-let-const-的区别" aria-hidden="true">#</a> var let const 的区别</h3>
<p><a href="https://www.jianshu.com/p/4e9cd99ecbf5" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="数组map和-foreach-区别-array-form-便捷数组操作-数组求和" tabindex="-1"><a class="header-anchor" href="#数组map和-foreach-区别-array-form-便捷数组操作-数组求和" aria-hidden="true">#</a> 数组map和 forEach 区别， Array.form （便捷数组操作），数组求和</h3>
<p>到底有什么区别呢？forEach()方法不会返回执行结果，而是undefined。也就是说，forEach()会修改原来的数组。而map()方法会得到一个新的数组并返回。</p>
<p>数组求和: <a href="https://segmentfault.com/a/1190000023556599" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">eval</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">"+"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js-原型" tabindex="-1"><a class="header-anchor" href="#js-原型" aria-hidden="true">#</a> js 原型</h3>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain" target="_blank" rel="noopener noreferrer">参考链接 mdn<ExternalLinkIcon/></a></p>
<p><a href="https://github.com/mqyqingfeng/Blog/issues/2" target="_blank" rel="noopener noreferrer">参考链接 1<ExternalLinkIcon/></a></p>
<p><a href="https://segmentfault.com/a/1190000039399746" target="_blank" rel="noopener noreferrer">参考链接 2<ExternalLinkIcon/></a></p>
<p><img src="https://user-images.githubusercontent.com/30766629/136643557-0a0fe875-c441-4c8c-9626-254e102ce535.png" alt="image"></p>
<h3 id="js-大文件上传" tabindex="-1"><a class="header-anchor" href="#js-大文件上传" aria-hidden="true">#</a> js 大文件上传</h3>
<p><a href="https://juejin.cn/post/6844903968338870285#comment" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="js-和-底层-ios-android-沟通原理" tabindex="-1"><a class="header-anchor" href="#js-和-底层-ios-android-沟通原理" aria-hidden="true">#</a> js 和 底层（ios android） 沟通原理</h3>
<p><a href="https://www.zoo.team/article/jsbridge" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="this" tabindex="-1"><a class="header-anchor" href="#this" aria-hidden="true">#</a> this</h3>
<p><a href="https://github.com/sanlangguo/learn-notes/wiki/this-%E7%90%86%E8%A7%A3" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="promise-异步原理" tabindex="-1"><a class="header-anchor" href="#promise-异步原理" aria-hidden="true">#</a> promise 异步原理</h3>
<p><a href="https://segmentfault.com/a/1190000009478377" target="_blank" rel="noopener noreferrer">参考链接简介 1<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/58428287" target="_blank" rel="noopener noreferrer">详细参考链接<ExternalLinkIcon/></a></p>
<h3 id="map-object-的区别" tabindex="-1"><a class="header-anchor" href="#map-object-的区别" aria-hidden="true">#</a> map object 的区别</h3>
<p><a href="https://segmentfault.com/a/1190000039989397" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="async-await-与-promise-区别" tabindex="-1"><a class="header-anchor" href="#async-await-与-promise-区别" aria-hidden="true">#</a> async/await 与 promise 区别</h3>
<p><a href="http://www.ruanyifeng.com/blog/2015/05/async.html" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="js-事件循环" tabindex="-1"><a class="header-anchor" href="#js-事件循环" aria-hidden="true">#</a> js 事件循环</h3>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop" target="_blank" rel="noopener noreferrer">参考链接 mdn<ExternalLinkIcon/></a></p>
<p><a href="https://segmentfault.com/a/1190000022805523" target="_blank" rel="noopener noreferrer">参考链接 segmentfault<ExternalLinkIcon/></a></p>
<p><a href="https://ustbhuangyi.github.io/vue-analysis/v2/reactive/next-tick.html#js-%E8%BF%90%E8%A1%8C%E6%9C%BA%E5%88%B6" target="_blank" rel="noopener noreferrer">JS 事件循环 重点<ExternalLinkIcon/></a></p>
<h3 id="settimeout-内有-promiese-then-里面的执行顺序" tabindex="-1"><a class="header-anchor" href="#settimeout-内有-promiese-then-里面的执行顺序" aria-hidden="true">#</a> settimeout 内有 promiese.then, 里面的执行顺序</h3>
<h3 id="怎么定位内存泄漏问题" tabindex="-1"><a class="header-anchor" href="#怎么定位内存泄漏问题" aria-hidden="true">#</a> 怎么定位内存泄漏问题</h3>
<p><a href="https://juejin.cn/post/6844904048961781774#heading-0" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="es6-新属性" tabindex="-1"><a class="header-anchor" href="#es6-新属性" aria-hidden="true">#</a> ES6 新属性</h3>
<p><a href="https://es6.ruanyifeng.com/" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="多个并发怎么处理" tabindex="-1"><a class="header-anchor" href="#多个并发怎么处理" aria-hidden="true">#</a> 多个并发怎么处理</h3>
<p><a href="https://segmentfault.com/a/1190000019895597" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="怎样实现-bind-call" tabindex="-1"><a class="header-anchor" href="#怎样实现-bind-call" aria-hidden="true">#</a> 怎样实现 bind，call</h3>
<p><a href="https://zhuanlan.zhihu.com/p/94068275" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="js-如何监听-css-trasition" tabindex="-1"><a class="header-anchor" href="#js-如何监听-css-trasition" aria-hidden="true">#</a> js 如何监听 css trasition</h3>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/transitionend_event" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="js-设计模式" tabindex="-1"><a class="header-anchor" href="#js-设计模式" aria-hidden="true">#</a> js 设计模式</h3>
<p><a href="https://juejin.cn/post/6844904032826294286#comment" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="前端大数据怎么处理" tabindex="-1"><a class="header-anchor" href="#前端大数据怎么处理" aria-hidden="true">#</a> 前端大数据怎么处理</h3>
<p>异步，web worker</p>
<p><a href="https://juejin.cn/post/6844903821278199822#comment" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="移动端双指旋转角度怎么实现" tabindex="-1"><a class="header-anchor" href="#移动端双指旋转角度怎么实现" aria-hidden="true">#</a> 移动端双指旋转角度怎么实现</h3>
<p><a href="https://blog.csdn.net/qq_17757973/article/details/54604625" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="怎么判断缩放的大小比例" tabindex="-1"><a class="header-anchor" href="#怎么判断缩放的大小比例" aria-hidden="true">#</a> 怎么判断缩放的大小比例</h3>
<p><a href="https://www.zhangxinxu.com/wordpress/2021/02/js-if-page-zoom/" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="箭头函数-function-区别" tabindex="-1"><a class="header-anchor" href="#箭头函数-function-区别" aria-hidden="true">#</a> 箭头函数， function 区别</h3>
<p>作用:</p>
<ul>
<li>更简短的函数；</li>
<li>更直观的作用域和this的绑定(不绑定this)</li>
</ul>
<p>注意点：</p>
<ul>
<li>函数体内的<code v-pre>this</code>对象，就是定义时所在的对象，而不是使用时所在的对象</li>
<li>不可以当作构造函数，也就是说，不可以使用<code v-pre>new</code>命令，否则会抛出一个错误</li>
<li>不可以使用<code v-pre>arguments</code>对象，该对象在函数体内不存在。如果要用，可以用 <code v-pre>rest</code> 参数代替</li>
<li>不可以使用<code v-pre>yield</code>命令，因此箭头函数不能用作 <code v-pre>Generator</code> 函数</li>
</ul>
<p><a href="https://blog.csdn.net/fish_skyyyy/article/details/113945502" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="移动端响应式如何做" tabindex="-1"><a class="header-anchor" href="#移动端响应式如何做" aria-hidden="true">#</a> 移动端响应式如何做</h3>
<p><a href="https://juejin.cn/post/6844904021552005128#heading-6" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="map-set-weakmap-weakset-场景" tabindex="-1"><a class="header-anchor" href="#map-set-weakmap-weakset-场景" aria-hidden="true">#</a> Map Set WeakMap WeakSet 场景</h3>
<p><strong>set, map 产生的原因</strong></p>
<p><code v-pre>JavaScript</code>的默认对象表示方式<code v-pre>{}</code>可以视为其他语言中的<code v-pre>Map</code>或<code v-pre>Dictionary</code>的数据结构，即一组键值对。</p>
<p>但是<code v-pre>JavaScript</code>的对象有个小问题，就是键必须是字符串。但实际上<code v-pre>Number</code>或者其他数据类型作为键也是非常合理的。为了解决这个问题，最新的ES6规范引入了新的数据类型<code v-pre>Map</code>和<code v-pre>set</code>.</p>
<p><a href="https://juejin.cn/post/6844904024509054984#comment" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a>
<a href="https://juejin.cn/post/6925320069522128909#heading-0" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="js判断是否是数组的四种做法" tabindex="-1"><a class="header-anchor" href="#js判断是否是数组的四种做法" aria-hidden="true">#</a> JS判断是否是数组的四种做法</h3>
<p><a href="https://www.cnblogs.com/echolun/p/10287616.html" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="js-作用域的理解" tabindex="-1"><a class="header-anchor" href="#js-作用域的理解" aria-hidden="true">#</a> js 作用域的理解</h3>
<p><a href="http://www.imooc.com/article/286497" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="内存管理" tabindex="-1"><a class="header-anchor" href="#内存管理" aria-hidden="true">#</a> 内存管理</h3>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management" target="_blank" rel="noopener noreferrer">内存管理 mdn<ExternalLinkIcon/></a></p>
<h3 id="前端中的事件流" tabindex="-1"><a class="header-anchor" href="#前端中的事件流" aria-hidden="true">#</a> 前端中的事件流</h3>
<p><a href="https://segmentfault.com/a/1190000013265547" target="_blank" rel="noopener noreferrer">事件流<ExternalLinkIcon/></a></p>
<h3 id="typeof-object-typeof-function" tabindex="-1"><a class="header-anchor" href="#typeof-object-typeof-function" aria-hidden="true">#</a> typeOf object ,typeOf function</h3>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof" target="_blank" rel="noopener noreferrer">mdn typeof 理解<ExternalLinkIcon/></a></p>
<h3 id="为什么typeof-null是object" tabindex="-1"><a class="header-anchor" href="#为什么typeof-null是object" aria-hidden="true">#</a> 为什么typeof null是object？</h3>
<p>简单来说，<code v-pre>typeof null</code>的结果为Object的原因是一个<code v-pre>bug</code>。在 javascript 的最初版本中，使用的 32位系统，js为了性能优化，使用低位来存储变量的类型信息。</p>
<table>
<thead>
<tr>
<th><strong><strong>数据类型</strong></strong></th>
<th><strong><strong>机器码标识</strong></strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>对象(Object)</td>
<td>000</td>
</tr>
<tr>
<td>整数</td>
<td>1</td>
</tr>
<tr>
<td>浮点数</td>
<td>010</td>
</tr>
<tr>
<td>布尔</td>
<td>110</td>
</tr>
<tr>
<td>undefined</td>
<td>-2^31(即全为1)</td>
</tr>
<tr>
<td>null</td>
<td>000</td>
</tr>
</tbody>
</table>
<p>在判断数据类型时，是根据机器码低位标识来判断的，而<code v-pre>null</code>的机器码标识为全<code v-pre>0</code>，而对象的机器码低位标识为<code v-pre>000</code>。所以<code v-pre>typeof null</code>的结果被误判为<code v-pre>Object</code>。</p>
<h3 id="js-默认事件" tabindex="-1"><a class="header-anchor" href="#js-默认事件" aria-hidden="true">#</a> js 默认事件</h3>
<p>阻止默认事件是为了在特定情况下修改或取消元素的默认行为。这样可以使开发者有更多的控制权，以便根据需求自定义用户交互体验。</p>
<p>例如，在表单提交时，如果没有阻止默认事件，浏览器会刷新页面并将表单数据提交到服务器，这可能会打断用户的操作流程。但是，如果阻止默认事件，开发者就可以使用 JavaScript 来验证表单数据、自定义提交行为等，从而提供更好的用户体验。</p>
<p>另一个例子是在链接点击时阻止默认事件。如果没有阻止默认事件，浏览器会跳转到链接的 URL，这可能会打断用户的浏览流程。但是，如果阻止默认事件，开发者就可以使用 JavaScript 来实现自定义的操作，例如打开链接的新窗口或者在当前页面中异步加载链接内容等。</p>
<p>在 JavaScript 中，可以使用以下方法来阻止默认事件：</p>
<ol>
<li>使用 <code v-pre>event.preventDefault()</code> 方法：这个方法可以阻止元素的默认行为。例如，当点击一个链接时，可以使用 <code v-pre>event.preventDefault()</code> 来阻止浏览器跳转到链接的 URL。</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>使用 <code v-pre>return false</code>：在一些特定的情况下，可以直接在事件处理函数中使用 <code v-pre>return false</code> 来阻止默认事件。例如：</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'form'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'submit'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 执行一些自定义操作</span>

  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，使用 <code v-pre>return false</code> 只适用于某些特定的事件，如 <code v-pre>submit</code>、<code v-pre>click</code> 等，而不是所有事件。</p>
<p>无论是使用 <code v-pre>event.preventDefault()</code> 还是 <code v-pre>return false</code>，都需要在事件处理函数中正确地应用它们，以达到阻止默认事件的目的。</p>
</div></template>


