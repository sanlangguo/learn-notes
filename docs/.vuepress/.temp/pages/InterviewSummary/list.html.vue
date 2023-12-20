<template><div><h2 id="_2023-12月" tabindex="-1"><a class="header-anchor" href="#_2023-12月" aria-hidden="true">#</a> 2023 12月</h2>
<h3 id="上海朋熙半导体" tabindex="-1"><a class="header-anchor" href="#上海朋熙半导体" aria-hidden="true">#</a> 上海朋熙半导体</h3>
<h3 id="一面" tabindex="-1"><a class="header-anchor" href="#一面" aria-hidden="true">#</a> 一面</h3>
<p>开始: 自我介绍</p>
<h4 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> css</h4>
<h5 id="css-继承" tabindex="-1"><a class="header-anchor" href="#css-继承" aria-hidden="true">#</a> css 继承?</h5>
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
<h5 id="css-如何隐藏元素" tabindex="-1"><a class="header-anchor" href="#css-如何隐藏元素" aria-hidden="true">#</a> css 如何隐藏元素?</h5>
<p><strong>完全隐藏的方法 (元素 Dom 节点会从渲染树消失，更不会占据空间，也不可被点击触发 click 事件)</strong></p>
<ul>
<li>设置<code v-pre>display属性为 none</code>，这样元素就被完全隐藏了。</li>
<li>这是 <code v-pre>HTML5</code> 新增属性，相当于<code v-pre>display: none</code>，直接写在元素上面，如<code v-pre>&lt;div hidden&gt;&lt;/div&gt;</code></li>
</ul>
<p><strong>视觉上隐藏：元素依旧占据着位置，只是我们视觉上看不见而已, 但也可能会触发click事件</strong></p>
<ul>
<li>
<p><code v-pre>opacity</code>属性作用于元素时，会将元素和其内容当作一个整体，从而设置整体的透明度，还可与<code v-pre> transition</code> 搭配使用，从而达到一个动态变化的效果。
<code v-pre>opacity:0</code>；将元素整体透明度设置为 0，视觉上就会变得不可见，但依旧占据空间，而且可以被点击触发 click 事件</p>
</li>
<li>
<p><code v-pre>visibility</code> 属性可控制元素的显示与隐藏，且不更改文档的布局，依旧占据空间，但当<code v-pre>visibility:hidden</code>时不可点击触发 <code v-pre>click </code>事件。</p>
</li>
</ul>
<p><strong>其他 css 属性方法</strong></p>
<p><strong>绝对定位</strong></p>
<ul>
<li>设置 <code v-pre>posoition 为 absolute 或 fixed</code>，再通过设置<code v-pre>top、left</code>等值，将其移出可视区域</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
<span class="token property">left</span><span class="token punctuation">:</span> -999px<span class="token punctuation">;</span>
<span class="token property">top</span><span class="token punctuation">:</span> -999px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>设置 margin</strong></p>
<ul>
<li>通过设置<code v-pre>margin</code>值，将其移出可视区域范围（可视区域占位）。如：<code v-pre>margin-left: -99999px</code>;</li>
</ul>
<p><strong>设置宽高为 0</strong></p>
<ul>
<li>将元素的 <code v-pre>margin、border、padding、height 和 width</code> 等影响元素盒模型的属性设为 0。 如果元素内有子元素或内容，就设置其 <code v-pre>overflow:hidden</code> 来隐藏其子元素</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span> <span class="token comment">/*隐藏子元素*/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>裁剪元素</strong></p>
<ul>
<li>通过<code v-pre>clip-path</code>属性来剪裁元素，但这个属性比较新，浏览器兼容性比较差，了解一下即可</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>0px 0px<span class="token punctuation">,</span> 0px 0px<span class="token punctuation">,</span> 0px 0px<span class="token punctuation">,</span> 0px 0px<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="分析比较-opacity-0、visibility-hidden、display-none-的区别和优劣。" tabindex="-1"><a class="header-anchor" href="#分析比较-opacity-0、visibility-hidden、display-none-的区别和优劣。" aria-hidden="true">#</a> 分析比较 opacity: 0、visibility: hidden、display: none 的区别和优劣。?</h5>
<ul>
<li><code v-pre>display:none;</code> : 会让元素完全从渲染树中消失，渲染的时候不占据任何空间, 不能点击。</li>
<li><code v-pre>visibility: hidden; </code>：不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，不能点击。</li>
<li><code v-pre>opacity: 0; </code>: 不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，可以点击。</li>
</ul>
<p>继承性：</p>
<ul>
<li>
<p><code v-pre>display 和 opacity</code> 属性是非继承属性。</p>
</li>
<li>
<p><code v-pre>display: none</code> 元素的子孙节点消失的原因: 父元素从渲染树消失造成，从而子孙节点也无法显示。</p>
</li>
<li>
<p><code v-pre>opacity: 0</code> 元素的子孙节点消失的原因: <code v-pre>opacity</code> 属性会将元素和其内容当作一个整体来进行控制。</p>
</li>
</ul>
<p><code v-pre>visibility </code>属性是继承属性。</p>
<ul>
<li><code v-pre>visibility: hidden</code> 元素的子孙节点消失的原因是：子孙节点继承了 <code v-pre>visibility: hidden</code>。
我们可通过设置<code v-pre> visibility: visible;</code>可以让子孙节点显式。</li>
</ul>
<p>性能：</p>
<ul>
<li><code v-pre>display: none;</code> : 修改元素会造成整个文档的回流，性能消耗较大 。</li>
<li><code v-pre>visibility:hidden</code>: 修改元素会造成重绘,性能消耗较少。</li>
<li><code v-pre>opacity: 0 </code>： 修改元素会造成重绘，性能消耗较少。</li>
</ul>
<h5 id="z-index-如何隐藏元素-原理是什么" tabindex="-1"><a class="header-anchor" href="#z-index-如何隐藏元素-原理是什么" aria-hidden="true">#</a> z-index 如何隐藏元素,原理是什么?</h5>
<p>要隐藏元素，可以使用 <code v-pre>z-index</code> 属性。<code v-pre>z-index</code> 属性用于控制元素的堆叠顺序，即元素在层叠上下文中的显示顺序。</p>
<p>要隐藏元素，可以将其 <code v-pre>z-index</code> 设置为较低的值，比如负数。这样，被隐藏的元素就会被放置在其他元素的下方，从而实现隐藏效果。</p>
<p>例如，可以使用以下 CSS 代码隐藏一个元素：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样设置后，该元素就会被放置在其他具有正数 <code v-pre>z-index</code> 值的元素下面，从而隐藏起来。</p>
<h4 id="html5" tabindex="-1"><a class="header-anchor" href="#html5" aria-hidden="true">#</a> HTML5</h4>
<h5 id="有哪些新增" tabindex="-1"><a class="header-anchor" href="#有哪些新增" aria-hidden="true">#</a> 有哪些新增?</h5>
<ol>
<li>新增的语义化标签（如<code v-pre>&lt;header&gt;、&lt;footer&gt;、&lt;article&gt;、&lt;section&gt;</code>等）</li>
<li>新的表单元素（如<code v-pre>&lt;input type=&quot;date&quot;&gt;、&lt;input type=&quot;email&quot;&gt;</code>等）</li>
<li>视频和音频元素（<code v-pre>&lt;video&gt;和&lt;audio&gt;</code>）</li>
<li>画布元素（<code v-pre>&lt;canvas&gt;</code>）</li>
<li>本地存储（<code v-pre>localStorage和sessionStorage</code>）</li>
<li>地理位置API（<code v-pre>Geolocation</code>）</li>
<li>历史管理API（<code v-pre>history</code>）</li>
<li>拖放API（<code v-pre>Drag and Drop</code>）</li>
<li><code v-pre>Web Worker</code>（在后台运行的<code v-pre>JavaScript</code>）</li>
<li><code v-pre>WebSocket</code>（实现了基于浏览器的远程<code v-pre>Socket</code>）</li>
</ol>
<h5 id="localstore-的缺点" tabindex="-1"><a class="header-anchor" href="#localstore-的缺点" aria-hidden="true">#</a> localStore 的缺点?</h5>
<ol>
<li>
<p>有限的存储空间：localStore 的存储空间是有限的，通常只能存储几十兆字节的数据。对于大型应用程序或需要存储大量数据的应用来说，这可能会成为一个限制。</p>
</li>
<li>
<p>安全性问题：localStore 存储在客户端，因此可能会受到安全攻击。如果存储了敏感信息，如用户凭据或个人信息，可能会面临数据泄露的风险。</p>
</li>
<li>
<p>跨域限制：localStore 存储的数据只能在同一域名下访问，跨域访问会受到限制。这可能会对一些需要在不同域名下共享数据的应用造成困扰。</p>
</li>
<li>
<p>不适合长期存储：localStore 通常用于临时存储数据，不适合长期存储。如果需要长期存储数据，可能需要考虑其他方案，如数据库或云存储。</p>
</li>
<li>
<p>对于某些浏览器可能不支持：虽然大多数现代浏览器都支持 localStore，但仍有一些旧版本的浏览器可能不支持或支持不完全，这可能会影响应用的兼容性。</p>
</li>
</ol>
<h5 id="prefect-和-preload-区别" tabindex="-1"><a class="header-anchor" href="#prefect-和-preload-区别" aria-hidden="true">#</a> prefect 和 preload 区别?</h5>
<p><code v-pre>&lt;link rel=&quot;prefetch&quot;&gt;</code>和<code v-pre>&lt;link rel=&quot;preload&quot;&gt;</code>是用于优化网页加载性能的HTML标签，它们的区别如下：</p>
<ul>
<li>
<p><code v-pre>&lt;link rel=&quot;prefetch&quot;&gt;</code>：用于指示浏览器在空闲时间预加载资源。它告诉浏览器在当前页面加载完成后，开始异步下载指定的资源，以备将来使用。它适用于那些可能在用户后续浏览中需要的资源，但不是当前页面必需的资源。预加载资源的优先级较低，不会影响当前页面的加载速度。</p>
</li>
<li>
<p><code v-pre>&lt;link rel=&quot;preload&quot;&gt;</code>：用于指示浏览器在页面加载过程中立即加载资源。它告诉浏览器在当前页面加载时，优先级较高地加载指定的资源。这对于那些当前页面必需的关键资源非常有用，可以提前加载并减少后续请求的延迟。预加载资源的优先级较高，可以对当前页面的加载速度产生影响。</p>
</li>
</ul>
<p>总结来说，<code v-pre>&lt;link rel=&quot;prefetch&quot;&gt;</code>用于异步预加载未来可能需要的资源，而<code v-pre>&lt;link rel=&quot;preload&quot;&gt;</code>用于立即加载当前页面必需的关键资源。根据具体情况选择使用哪种方式可以更好地优化网页加载性能。</p>
<h4 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> js</h4>
<h5 id="js-继承" tabindex="-1"><a class="header-anchor" href="#js-继承" aria-hidden="true">#</a> js 继承?</h5>
<p>在 JavaScript 中，有多种实现继承的方式，以下是几种常见的继承方式及其代码示例：</p>
<ol>
<li>原型链继承：</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'Parent'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello, I am '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'Child'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> child <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
child<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Hello, I am Child</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>构造函数继承（经典继承）：</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 父类构造函数</span>
<span class="token keyword">function</span> <span class="token function">Animal</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 子类构造函数</span>
<span class="token keyword">function</span> <span class="token function">Dog</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> breed</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 使用call方法调用父类构造函数，将this绑定到子类实例上</span>
  <span class="token function">Animal</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>breed <span class="token operator">=</span> breed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建一个Animal实例</span>
<span class="token keyword">var</span> myAnimal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token string">'Tom'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建一个Dog实例</span>
<span class="token keyword">var</span> myDog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">'Buddy'</span><span class="token punctuation">,</span> <span class="token string">'Golden Retriever'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myAnimal<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Tom</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myDog<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Buddy</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myDog<span class="token punctuation">.</span>breed<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Golden Retriever</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>组合继承（原型链继承 + 构造函数继承）：</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'Parent'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello, I am '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Parent</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'Child'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Child<span class="token punctuation">;</span>

<span class="token keyword">var</span> child <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
child<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Hello, I am Child</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>原型式继承：</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createObject</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> obj<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> parent <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Parent'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">sayHello</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello, I am '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> child <span class="token operator">=</span> <span class="token function">createObject</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span><span class="token punctuation">;</span>
child<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'Child'</span><span class="token punctuation">;</span>
child<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Hello, I am Child</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="this-的理解" tabindex="-1"><a class="header-anchor" href="#this-的理解" aria-hidden="true">#</a> this 的理解?</h5>
<h5 id="如何实现-call-apply" tabindex="-1"><a class="header-anchor" href="#如何实现-call-apply" aria-hidden="true">#</a> 如何实现 call, apply?</h5>
<h5 id="promise-如何终止" tabindex="-1"><a class="header-anchor" href="#promise-如何终止" aria-hidden="true">#</a> promise 如何终止?</h5>
<p>在JavaScript中，Promise是一种用于处理异步操作的对象，它代表了一个异步操作的最终完成或失败，并且其返回值可能未决。通常情况下，Promise是不可取消的，一旦创建就会一直执行直到最终完成或失败。</p>
<p>然而，可以通过一些技巧来实现Promise的终止。</p>
<ol>
<li>
<p>一种方法是使用一个标志变量来控制Promise的执行，当标志变量为true时，Promise继续执行，当标志变量为false时，Promise终止执行。</p>
</li>
<li>
<p>另一种方法是使用Promise.race()方法，它可以接受一个包含多个Promise对象的数组作为参数，返回一个新的Promise对象，当数组中的任意一个Promise对象完成或失败时，新的Promise对象也会相应地完成或失败。</p>
</li>
<li>
<p>另外，可以使用第三方库或工具来实现Promise的终止，例如使用RxJS库中的takeUntil()方法来实现Promise的终止。</p>
</li>
</ol>
<h5 id="typeof-instanceof-区别" tabindex="-1"><a class="header-anchor" href="#typeof-instanceof-区别" aria-hidden="true">#</a> typeof, instanceof 区别?</h5>
<p><code v-pre>typeof</code>和<code v-pre>instanceof</code>是JavaScript中用于检测数据类型的操作符，它们之间有一些区别。</p>
<ul>
<li>
<p><code v-pre>typeof</code>用于检测一个值的数据类型，返回一个表示数据类型的字符串。例如，<code v-pre>typeof 42</code>将返回字符串<code v-pre>&quot;number&quot;</code>，<code v-pre>typeof &quot;Hello&quot;</code>将返回字符串<code v-pre>&quot;string&quot;</code>。它适用于基本数据类型和函数。</p>
</li>
<li>
<p><code v-pre>instanceof</code>用于检测一个对象是否属于某个特定类或构造函数的实例。它返回一个布尔值，表示对象是否是该类的实例。例如，<code v-pre>obj instanceof Array</code>将返回<code v-pre>true</code>，如果<code v-pre>obj</code>是一个数组的实例。它适用于检测对象的实例关系。</p>
</li>
</ul>
<p>总结来说，<code v-pre>typeof</code>用于检测数据类型，而<code v-pre>instanceof</code>用于检测对象的实例关系。</p>
<h4 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> vue</h4>
<h5 id="vue3-有哪些更新" tabindex="-1"><a class="header-anchor" href="#vue3-有哪些更新" aria-hidden="true">#</a> vue3 有哪些更新?</h5>
<p><a href="https://sanlangguo.github.io/learn-notes/vue/v2-v3.html" target="_blank" rel="noopener noreferrer">vue3 有哪些更新<ExternalLinkIcon/></a></p>
<h5 id="vue-如何实现继承" tabindex="-1"><a class="header-anchor" href="#vue-如何实现继承" aria-hidden="true">#</a> vue 如何实现继承?</h5>
<p>在Vue中，可以通过使用<code v-pre>extend</code>方法来实现继承。具体步骤如下：</p>
<ol>
<li>创建一个基础组件，作为父组件。</li>
<li>使用<code v-pre>Vue.extend</code>方法创建一个新的子组件，并将其设置为父组件的扩展。</li>
<li>在子组件中，可以通过<code v-pre>extends</code>选项指定父组件，从而继承父组件的属性和方法。</li>
<li>最后，可以使用子组件进行开发和使用。</li>
</ol>
<p>下面是一个简单的示例代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 父组件</span>
<span class="token keyword">const</span> ParentComponent <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello, I am the parent component!'</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 子组件</span>
<span class="token keyword">const</span> ChildComponent <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> ParentComponent<span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用父组件的方法</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建子组件实例</span>
<span class="token keyword">const</span> child <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ChildComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
child<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Hello, I am the parent component!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过以上步骤，你可以在Vue中实现组件的继承。请注意，Vue的继承是基于原型链的，子组件会继承父组件的属性和方法，并且可以通过扩展和覆盖来进行自定义。</p>
<h5 id="pinia-和-vuex-区别" tabindex="-1"><a class="header-anchor" href="#pinia-和-vuex-区别" aria-hidden="true">#</a> pinia 和 vuex 区别?</h5>
<p><code v-pre>Pinia和Vuex</code>是两种用于状态管理的JavaScript库。它们有一些区别：</p>
<ol>
<li>
<p>语法：<code v-pre>Pinia</code>是基于<code v-pre>Vue 3</code>的新一代状态管理库，它使用了<code v-pre>Vue 3</code>的<code v-pre>Composition API</code>。而<code v-pre>Vuex是Vue 2</code>的官方状态管理库，使用了<code v-pre>Vue 2的Options API</code>。</p>
</li>
<li>
<p>性能：由于<code v-pre>Pinia</code>是基于<code v-pre>Vue 3</code>的<code v-pre>Composition API</code>构建的，它在性能方面可能比Vuex更优秀。<code v-pre>Composition</code> API提供了更灵活和高效的状态管理方式。</p>
</li>
<li>
<p>类型支持：<code v-pre>Pinia</code>在类型支持方面更强大。它使用TypeScript来提供更好的类型推导和类型检查。而<code v-pre>Vuex</code>在Vue 2中对TypeScript的支持相对较弱。</p>
</li>
<li>
<p>生态系统：由于<code v-pre>Vuex是Vue 2</code>的官方状态管理库，因此它有着更庞大和成熟的生态系统。相比之下，<code v-pre>Pinia</code>作为较新的库，其生态系统可能相对较小。</p>
</li>
</ol>
<p><code v-pre>pinia 同时支持Vue 2 和Vue 3</code>, 选择Pinia还是Vuex取决于项目需求和技术栈。如果正在使用Vue 3并且需要更好的类型支持和性能，那么<code v-pre>Pinia</code>可能是一个不错的选择。如果正在使用Vue 2或者需要一个成熟的生态系统，那么Vuex可能更适合。</p>
<p><strong>场景问答</strong>?</p>
<ol>
<li>多个 loading ,多个 http 请求, axios 如何在数据加载完后, 同时取消 多个loading</li>
</ol>
<p><strong>前端工程化</strong>?</p>
<ol>
<li>前端如何做优化</li>
</ol>
<p>结束: 有什么问题要问的</p>
<h3 id="二面" tabindex="-1"><a class="header-anchor" href="#二面" aria-hidden="true">#</a> 二面</h3>
<p>开始: 自我介绍</p>
<h5 id="项目经验" tabindex="-1"><a class="header-anchor" href="#项目经验" aria-hidden="true">#</a> 项目经验**</h5>
<h5 id="qiankun-如何解决内存泄露" tabindex="-1"><a class="header-anchor" href="#qiankun-如何解决内存泄露" aria-hidden="true">#</a> qiankun 如何解决内存泄露?</h5>
<ol>
<li>
<p>清理子应用资源：在子应用卸载时，确保正确地清理子应用所使用的资源，包括事件监听器、定时器等。避免未清理的资源导致内存泄漏。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">unmount</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  instance<span class="token punctuation">.</span><span class="token function">$destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  instance<span class="token punctuation">.</span>$el<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">''</span>
  instance <span class="token operator">=</span> <span class="token keyword">null</span>
  router <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>监控和分析：使用工具对应用进行监控和分析，及时发现和定位内存泄漏问题。可以使用 <code v-pre>Chrome</code> 开发者工具的<code v-pre>Memory</code>面板来检测内存使用情况，并通过<code v-pre> Heap Snapshot</code> 分析内存泄漏的原因。</p>
</li>
</ol>
<h5 id="如何解决跨域" tabindex="-1"><a class="header-anchor" href="#如何解决跨域" aria-hidden="true">#</a> 如何解决跨域?</h5>
<p>前端可以通过以下几种方式解决跨域问题：</p>
<ol>
<li>
<p><code v-pre>JSONP</code>：利用 script 标签没有跨域限制的特点，通过动态创建 <code v-pre>script</code> 标签，将需要获取的数据作为参数传递到服务器端，服务器端再将数据放在回调函数中返回给前端。缺点是只支持<code v-pre> GET</code> 请求。</p>
</li>
<li>
<p><code v-pre>CORS</code>：跨域资源共享，可以在服务端设置响应头，允许指定的域名访问该资源。需要服务端的支持。</p>
</li>
<li>
<p>代理：前端通过自己的服务器请求数据，再将数据返回给前端，相当于前端与后端之间多了一层代理服务器。缺点是需要自己搭建服务器。</p>
</li>
<li>
<p><code v-pre>WebSocket</code>：利用<code v-pre> WebSocket</code> 协议进行通信，<code v-pre>WebSocket </code>协议没有跨域限制。缺点是需要服务端支持 <code v-pre>WebSocket</code> 协议。</p>
</li>
</ol>
<h5 id="多个窗口如何传参" tabindex="-1"><a class="header-anchor" href="#多个窗口如何传参" aria-hidden="true">#</a> 多个窗口如何传参</h5>
<ol>
<li>URL参数传递：在打开新窗口时，可以通过URL参数传递需要的参数信息，例如：<code v-pre>window.open('newWindow.html?param1=value&amp;m2=value2')</code>，在新窗口中可以通过<code v-pre>location.search</code>获取参数值。</li>
<li><code v-pre>localStorage或sessionStorage</code>：可以使用<code v-pre>localStorage或sessionStorage</code>存储需要传递的参数信息，然后在新窗口中通过<code v-pre>localStorage.getItem或sessionStorage.getItem</code>获取参数值。</li>
<li><code v-pre>postMessage</code>：可以使用<code v-pre>postMessage</code>方法在不同窗口之间进行消息传递，例如：<code v-pre>window.postMessage(data, targetOrigin)</code>。在接收窗口中可以通过监听message事件来获取传递的参数信息。</li>
<li><code v-pre>SharedWorker</code>：这是HTML5的一个特性，它可以让多个窗口、标签页或者<code v-pre>iframes</code>共享同一个<code v-pre>JavaScript Worker</code>。</li>
</ol>
<h5 id="http-复杂请求的理解-为什么触发复杂请求" tabindex="-1"><a class="header-anchor" href="#http-复杂请求的理解-为什么触发复杂请求" aria-hidden="true">#</a> http 复杂请求的理解, 为什么触发复杂请求?</h5>
<p><a href="https://mp.weixin.qq.com/s?__biz=Mzg4MTYwMzY1Mw==&amp;mid=2247496420&amp;idx=1&amp;sn=9fa779095ccb3309a09e1931dea275ce&amp;source=41#wechat_redirect" target="_blank" rel="noopener noreferrer">说说对 options 请求的理解<ExternalLinkIcon/></a></p>
<h5 id="app-容器化前端包如何防止拦截包" tabindex="-1"><a class="header-anchor" href="#app-容器化前端包如何防止拦截包" aria-hidden="true">#</a> app 容器化前端包如何防止拦截包?</h5>
<h5 id="中台项目如何做的优化" tabindex="-1"><a class="header-anchor" href="#中台项目如何做的优化" aria-hidden="true">#</a> 中台项目如何做的优化?</h5>
<h5 id="为什么使用qiankun" tabindex="-1"><a class="header-anchor" href="#为什么使用qiankun" aria-hidden="true">#</a> 为什么使用qiankun?</h5>
<h5 id="如何检测-app-离线包的性能" tabindex="-1"><a class="header-anchor" href="#如何检测-app-离线包的性能" aria-hidden="true">#</a> 如何检测 app 离线包的性能?</h5>
<p>app 原生监听 webView 提供的事件 ,上传具体的体检</p>
<h5 id="jsbrige-原理-如何触发回调" tabindex="-1"><a class="header-anchor" href="#jsbrige-原理-如何触发回调" aria-hidden="true">#</a> jsbrige 原理, 如何触发回调?</h5>
<p>首先，有一个概念要明白，例如访问<code v-pre>http://coding.m.juejin.com/classindex.html的时候</code>，服务器端就一定有一个<code v-pre>classindex.html文件</code>吗？—— 不一定，服务器可以拿到这个请求，动态生成一个文件，然后返回。 同理，<code v-pre>&lt;script src=&quot;http://coding.m.juejin.com/api.js&quot;&gt;</code>也不一定加载一个服务器端的静态文件，服务器也可以动态生成文件并返回。OK，接下来正式开始。
例如我们的网站和掘金网，肯定不是一个域。我们需要掘金网提供一个接口，供我们来获取。首先，我们在自己的页面这样定义</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
window<span class="token punctuation">.</span><span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这是我们跨域得到信息</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后掘金网给我提供了一个<code v-pre>http://coding.m.juejin.com/api.js</code>，内容如下（之前说过，服务器可动态生成内容）</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>callback({x:100, y:200})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后我们在页面中加入</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;script src="http://coding.m.juejin.com/api.js">&lt;/script
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="移动端如何做真机调试-v-console-如何做断点" tabindex="-1"><a class="header-anchor" href="#移动端如何做真机调试-v-console-如何做断点" aria-hidden="true">#</a> 移动端如何做真机调试, v-console 如何做断点</h5>
<h5 id="动画有哪些" tabindex="-1"><a class="header-anchor" href="#动画有哪些" aria-hidden="true">#</a> 动画有哪些?</h5>
<p>主要有下面两种方式：<code v-pre>Transition </code>和 <code v-pre>Animation</code>。</p>
<ol>
<li>
<p><code v-pre>Transition</code>（过渡）：<code v-pre>Transition</code> 是元素从一个状态平滑过渡到另一个状态的效果。你需要定义应用过渡效果的 CSS 属性和过渡的持续时间</p>
</li>
<li>
<p><code v-pre>Animation</code>（动画）：<code v-pre>Animation</code> 可以在 CSS 中创建复杂的、多步骤的动画效果。你需要通过<code v-pre>@keyframes </code>规则定义动画的各个阶段</p>
</li>
</ol>
<h5 id="结束-有什么问题要问的" tabindex="-1"><a class="header-anchor" href="#结束-有什么问题要问的" aria-hidden="true">#</a> 结束: 有什么问题要问的</h5>
</div></template>


