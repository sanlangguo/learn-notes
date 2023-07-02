<template><div><h1 id="ts-使用指南" tabindex="-1"><a class="header-anchor" href="#ts-使用指南" aria-hidden="true">#</a> TS 使用指南</h1>
<h4 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly" aria-hidden="true">#</a> readonly</h4>
<p>可以将readonly关键字用在以下位置：</p>
<ul>
<li>类的成员变量</li>
<li>类的构造函数参数</li>
<li>对象字面量中的属性</li>
</ul>
<ol>
<li>类的成员变量：
在类中，可以使用readonly关键字来定义只读属性。这意味着只读属性只能在声明时或构造函数中进行赋值，之后不能再被修改。例如：</li>
</ol>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>
<span class="token comment">// 类的成员变量</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'John'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出: John</span>

person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'Mike'</span><span class="token punctuation">;</span>  <span class="token comment">// 错误，不能修改只读属性</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，name属性在声明时被定义为只读属性，所以在构造函数中可以给它赋值，但之后就不能再修改它的值。</p>
<ol start="2">
<li>类的构造函数参数：
readonly关键字也可以用于类的构造函数参数，用来定义只读参数。这样定义的参数可以在类中使用，但不能再被修改，例如：</li>
</ol>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'John'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出: John</span>

person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'Mike'</span><span class="token punctuation">;</span>  <span class="token comment">// 错误，不能修改只读属性</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，name参数在构造函数的参数列表中使用readonly关键字定义为只读参数。这样在构造函数中可以直接使用name参数，并且在之后不能再修改它的值。</p>
</div></template>


