<template><div><h2 id="_06-作用域链-v8是如何查找变量的" tabindex="-1"><a class="header-anchor" href="#_06-作用域链-v8是如何查找变量的" aria-hidden="true">#</a> 06-作用域链：V8是如何查找变量的</h2>
<h3 id="作用域链" tabindex="-1"><a class="header-anchor" href="#作用域链" aria-hidden="true">#</a> 作用域链</h3>
<p>作用域链是将一个个作用域串起来，实现变量查找的路径。每个函数都有自己的作用域，函数作用域中存放了函数中定义的变量。当在函数内部使用一个变量时，V8便会去作用域链中查找。</p>
<h3 id="变量查找路径" tabindex="-1"><a class="header-anchor" href="#变量查找路径" aria-hidden="true">#</a> 变量查找路径</h3>
<p>当在函数内部使用一个变量时，V8会按照以下顺序查找：</p>
<ol>
<li>查找当前函数作用域中是否有该变量，如果有则直接使用。</li>
<li>如果当前函数作用域中没有该变量，则去上一级作用域中查找，直到找到该变量或者到达全局作用域。</li>
<li>如果在全局作用域中都没有找到该变量，则会报错。</li>
</ol>
<h3 id="构建作用域链" tabindex="-1"><a class="header-anchor" href="#构建作用域链" aria-hidden="true">#</a> 构建作用域链</h3>
<p>在执行函数时，V8会构建一个作用域链。具体构建过程如下：</p>
<ol>
<li>创建当前函数的执行环境。</li>
<li>将当前函数的活动对象添加到执行环境中。</li>
<li>将当前函数的活动对象添加到作用域链的最前端。</li>
<li>将外部函数的活动对象添加到作用域链中。</li>
<li>将全局执行环境的变量对象添加到作用域链中。</li>
</ol>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3>
<p>当在函数内部使用一个变量时，V8会按照以下顺序查找：</p>
<ol>
<li>查找当前函数作用域中是否有该变量，如果有则直接使用。</li>
<li>如果当前函数作用域中没有该变量，则去上一级作用域中查找，直到找到为止。</li>
<li>如果最终仍然没有找到该变量，则会报错。
以下是一个具体的例子：</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'极客时间'</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> type <span class="token operator">=</span> <span class="token string">'global'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'foo'</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'bar'</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> type <span class="token operator">=</span> <span class="token string">'function'</span><span class="token punctuation">;</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们在全局环境中声明了变量name和type，同时还定义了bar函数和foo函数，在bar函数中又再次定义了变量name和type，在foo函数中再次定义了变量name。</p>
<p>当执行到foo函数时，首先需要打印出变量name的值，而我们在三个地方都定义了变量name，那么究竟应该使用哪个变量呢？</p>
<p>在foo函数中使用了变量name，那么V8就应该先使用foo函数内部定义的变量name，最终的结果确实如此，也符合我们的直觉。</p>
<p>接下来，foo函数继续打印变量type，但是在foo函数内部并没有定义变量type，而是在全局环境中和调用foo函数的bar函数中分别定义了变量type，那么这时候的问题来了，你觉得foo函数中打印出来的变量type是bar函数中的，还是全局环境中的呢？答案是全局环境中的。因为在foo函数内部没有找到变量type，所以V8会去上一级作用域（即全局作用域）中查找，最终找到了全局环境中定义的变量type。</p>
</div></template>


