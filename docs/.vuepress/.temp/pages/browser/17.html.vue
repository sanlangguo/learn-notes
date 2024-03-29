<template><div><h2 id="webapi-xmlhttprequest是怎么实现的" tabindex="-1"><a class="header-anchor" href="#webapi-xmlhttprequest是怎么实现的" aria-hidden="true">#</a> WebAPI：XMLHttpRequest是怎么实现的？</h2>
<p>在引入 JavaScript 后，我们可以通过操作 DOM 树中的节点来实现各种功能。但是在 XMLHttpRequest 出现之前，如果服务器数据有更新，需要重新刷新整个页面。而 XMLHttpRequest 提供了从 Web 服务器获取数据的能力，如果想要更新某条数据，只需要通过 XMLHttpRequest 请求服务器提供的接口，就可以获取到服务器的数据，然后再操作 DOM 来更新页面内容，整个过程只需要更新网页的一部分就可以了，而不用像之前那样还得刷新整个页面，这样既有效率又不会打扰到用户。</p>
<p>回调函数 VS 系统调用栈
在深入讲解 XMLHttpRequest 之前，需要先介绍同步回调和异步回调这两个概念。将一个函数作为参数传递给另外一个函数，那作为参数的这个函数就是回调函数。</p>
<p>同步回调和异步回调的区别在于：同步回调会阻塞代码的执行，而异步回调不会阻塞代码的执行。</p>
<p>XMLHttpRequest 的基本使用方法
以下是 XMLHttpRequest 的基本使用方法：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> <span class="token string">'/api/data'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 方法用于初始化一个请求。
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 方法用于发送请求。
xhr<span class="token punctuation">.</span>onreadystatechange 事件监听器用于监听请求状态的变化。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>XMLHttpRequest 的工作原理
当调用 xhr.send() 方法时，浏览器会在后台新建一个线程来处理这个请求。当请求完成后，浏览器会将数据传递给主线程，并触发 onreadystatechange 事件。在事件处理函数中，我们可以通过 xhr.readyState 和 xhr.status 来判断请求状态，并根据需要进行处理。</p>
<p>安全问题
由于 XMLHttpRequest 可以直接请求服务器数据，因此存在一些安全问题。浏览器会对跨域请求进行限制，只有在服务器端进行了相应的设置，才能够实现跨域请求。</p>
</div></template>


