<template><div><h1 id="ts学习笔记" tabindex="-1"><a class="header-anchor" href="#ts学习笔记" aria-hidden="true">#</a> TS学习笔记</h1>
<h2 id="第一部分-基础知识" tabindex="-1"><a class="header-anchor" href="#第一部分-基础知识" aria-hidden="true">#</a> 第一部分：基础知识</h2>
<h3 id="第1章-介绍typescript" tabindex="-1"><a class="header-anchor" href="#第1章-介绍typescript" aria-hidden="true">#</a> 第1章：介绍TypeScript</h3>
<ul>
<li>
<p>TypeScript是什么</p>
</li>
<li>
<p>TypeScript的优点</p>
</li>
<li>
<p>TypeScript的缺点</p>
</li>
<li>
<p>TypeScript和JavaScript的关系</p>
</li>
<li>
<p>优点：</p>
<ol>
<li>静态类型检查：TypeScript可以在编译时检查代码的类型错误，可以避免在运行时出现类型错误，提高了代码的可靠性和可维护性。</li>
<li>更好的IDE支持：TypeScript提供了更好的IDE支持，可以提供更好的代码补全、错误提示和重构功能等。</li>
<li>更好的可读性：TypeScript可以让代码更易读，因为它可以提供更好的类型注释和代码结构。</li>
<li>更好的可维护性：TypeScript可以让代码更易于维护，因为它可以提供更好的类型检查和代码结构。</li>
<li>更好的生态系统：TypeScript可以让开发者更容易地使用JavaScript库和框架，因为它可以提供更好的类型定义和类型检查。</li>
</ol>
</li>
<li>
<p>缺点：</p>
<ol>
<li>学习成本高：TypeScript需要学习新的语法和类型系统，对于新手来说可能需要一些时间来适应。</li>
<li>开发效率低：由于需要编写类型注释和类型定义，TypeScript开发的效率可能比JavaScript低。</li>
<li>集成问题：TypeScript需要与其他工具和框架进行集成，可能需要一些额外的配置和学习成本。</li>
<li>运行时性能问题：由于需要进行类型检查和转换，TypeScript的运行时性能可能比JavaScript低。</li>
</ol>
</li>
<li>
<p>TypeScript和JavaScript的关系</p>
<p>TypeScript和JavaScript有着密切的关系，可以说TypeScript是JavaScript的超集。具体来说，TypeScript扩展了JavaScript的语法，为JavaScript添加了一些新的特性，如静态类型检查、类和接口等面向对象编程的特性。同时，TypeScript还可以编译成JavaScript代码，这意味着TypeScript代码可以在任何支持JavaScript的环境中运行。</p>
<p>TypeScript是建立在JavaScript之上的，它可以使用JavaScript中的所有特性，同时还可以添加一些新的特性。TypeScript代码可以通过编译器编译成JavaScript代码，这意味着TypeScript代码可以在任何支持JavaScript的环境中运行，如浏览器、Node.js等。</p>
<p>总的来说，TypeScript和JavaScript是密切相关的，TypeScript扩展了JavaScript的语法和特性，同时又保持了与JavaScript的兼容性，这使得TypeScript成为了一种非常有用的编程语言。</p>
</li>
</ul>
<h3 id="第3章-基本类型和变量声明" tabindex="-1"><a class="header-anchor" href="#第3章-基本类型和变量声明" aria-hidden="true">#</a> 第3章：基本类型和变量声明</h3>
<ul>
<li>
<p>元组类型</p>
<p>在TypeScript中，元组（tuple）类型是一种特殊的数组，它允许表示一个已知长度和元素类型的数组，每个元素的类型可以不同。</p>
<p>元组类型的语法是使用方括号 [] 定义一个数组，其中包含每个元素的类型，如 [type1, type2, ..., typeN]，可以通过使用下标进行访问。</p>
<p>例如，我们可以定义一个包含多个数据类型的元组：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">let</span> <span class="token literal-property property">tuple</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">,</span> number<span class="token punctuation">,</span> boolean<span class="token punctuation">]</span><span class="token punctuation">;</span>
tuple <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中定义了一个元组变量 tuple，包含三个元素，分别是字符串类型、数字类型和布尔类型，然后给该变量赋值为一个具体的元素数组。</p>
<p>在访问元组元素时，可以使用下标来进行索引：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tuple<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出 "hello"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tuple<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出 123</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tuple<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出 true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，元组类型可以作为参数传递给函数和返回值类型。在使用元组时，请确保访问的元素不越界，否则会导致运行时错误。</p>
</li>
<li>
<p>枚举类型</p>
<p>在 TypeScript 中，枚举类型是一种特殊的数据类型，用于定义命名常量的集合。使用枚举类型可以使代码更加清晰和易读。</p>
<p>在 TypeScript 中，枚举类型可以使用关键字 <code v-pre>enum</code> 定义，如下所示：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Red<span class="token punctuation">,</span>
  Green<span class="token punctuation">,</span>
  Blue
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，定义了一个名为 <code v-pre>Color</code> 的枚举类型，其中包含三个枚举常量 <code v-pre>Red</code>、<code v-pre>Green</code> 和 <code v-pre>Blue</code>，它们默认对应数字值 <code v-pre>0</code>、<code v-pre>1</code> 和 <code v-pre>2</code>。</p>
<p>使用枚举类型时，可以通过常量名或常量值来引用枚举常量。例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">const</span> color1 <span class="token operator">=</span> Color<span class="token punctuation">.</span>Red<span class="token punctuation">;</span><span class="token comment">// 常量 color1 的值为 0</span>
<span class="token keyword">const</span> color2 <span class="token operator">=</span> Color<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">// 常量 color2 的值为 'Green'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码中，常量 <code v-pre>color1</code> 的值为枚举常量 <code v-pre>Red</code> 的默认数字值 <code v-pre>0</code>，而常量 <code v-pre>color2</code> 的值为数字值 <code v-pre>1</code> 对应的枚举常量 <code v-pre>Green</code> 的名称字符串 <code v-pre>'Green'</code>。</p>
<p>另外，我们还可以指定每个枚举常量的数字值。例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Red <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  Green <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>
  Blue <span class="token operator">=</span> <span class="token number">4</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，枚举常量 <code v-pre>Red</code> 的值为 <code v-pre>1</code>，<code v-pre>Green</code> 的值为 <code v-pre>2</code>，<code v-pre>Blue</code> 的值为 <code v-pre>4</code>。在 TypeScript 中，枚举常量可以是数字或字符串类型。</p>
<p>总结：</p>
<p>TypeScript 中的枚举类型是用于定义命名常量集合的特殊数据类型，使用关键字 <code v-pre>enum</code> 定义。每个枚举常量对应一个数字或字符串值，默认从 <code v-pre>0</code> 开始递增。我们也可以手动指定每个枚举常量的值。</p>
</li>
<li>
<p>Any类型</p>
<p>在 TypeScript 中，Any 类型表示任何类型，即可以是任意类型的值。使用 Any 类型可以在编写代码时不对类型进行限制，从而实现更灵活的编程。</p>
<p>Any 类型的变量可以接受任何类型的值，例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> 
 <span class="token keyword">let</span> <span class="token literal-property property">anyValue</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
 anyValue <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
 anyValue <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>
 anyValue <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用 Any 类型时需要注意，因为 Any 类型可以表示任何类型，所以它的值在编译时不会进行类型检查，这意味着任何类型的值都可以赋给 Any 类型的变量，也可以从 Any 类型的变量中获取任何类型的值。这种灵活性可能会导致一些潜在的类型错误，在使用 Any 类型时需要谨慎。</p>
<p>另外，如果使用 Any 类型过于频繁，会导致代码的可读性和可维护性降低，因为无法清楚地知道变量的实际类型。因此，在编写 TypeScript 代码时应该尽量避免使用 Any 类型，而是使用更具体的类型来进行类型限制。</p>
</li>
<li>
<p>Void类型</p>
<p>在 TypeScript 中，Void 类型表示没有任何类型，即函数没有返回值。使用 Void 类型可以在函数声明时指定函数不返回任何值。</p>
<p>例如，下面的函数声明返回类型为 Void：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">logMessage</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">message</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在函数执行完后，它不会返回任何值，因此可以将其返回类型指定为 Void。</p>
<p>需要注意的是，Void 类型只能用于函数的返回值类型，不能用于变量的类型。如果一个变量的类型为 Void，那么它只能被赋值为 undefined 或 null：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">let</span> <span class="token literal-property property">voidValue</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
voidValue <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
voidValue <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为 Void 类型表示没有任何类型，所以它的主要作用是在函数声明时指定函数没有返回值，从而提高代码的可读性和可维护性。</p>
</li>
<li>
<p>Null和Undefined类型</p>
<p><code v-pre>null</code> 和 <code v-pre>undefined</code> 是 TypeScript 中的特殊数据类型，用来表示缺少值或者非法值。</p>
<p><code v-pre>null</code> 类型表示一个空对象指针或者不存在的对象，表示一个变量已经被赋予了一个空值。在 TypeScript 中，<code v-pre>null</code> 是一个独立的数据类型，可以使用关键字 <code v-pre>null</code> 来表示，例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">let</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，定义了一个变量 <code v-pre>a</code>，类型为 <code v-pre>null</code>，并将其赋值为 <code v-pre>null</code>。</p>
<p><code v-pre>undefined</code> 类型表示一个未定义的值或者缺省值，表示一个变量没有被赋值或者对象没有定义相应的属性。在 TypeScript 中，<code v-pre>undefined</code> 也是一个独立的数据类型，可以使用关键字 <code v-pre>undefined</code> 来表示，例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> 
 <span class="token keyword">let</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，定义了一个变量 <code v-pre>b</code>，类型为 <code v-pre>undefined</code>，并将其赋值为 <code v-pre>undefined</code>。</p>
<p>需要注意的是，<code v-pre>null</code> 和 <code v-pre>undefined</code> 常常作为其他数据类型的子类型使用，表示这些类型的变量既可以存储对应的值，也可以存储 <code v-pre>null</code> 或 <code v-pre>undefined</code>。例如，下面的代码演示了如何使用 <code v-pre>null</code> 和 <code v-pre>undefined</code> 作为其他类型的子类型：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">let</span> <span class="token literal-property property">c</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token comment">// 变量 c 的类型为 string 或 nulllet d: number | undefined;</span>
<span class="token comment">// 变量 d 的类型为 number 或 undefinedlet e: string | null | undefined;</span>
<span class="token comment">// 变量 e 的类型为 string、null 或 undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了可以将 <code v-pre>null</code> 和 <code v-pre>undefined</code> 作为其他类型的子类型使用之外，我们还可以使用 <code v-pre>void</code> 类型来表示一个函数没有返回值，即返回值为 <code v-pre>undefined</code>。例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> 
 <span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个名为 <code v-pre>sayHello</code> 的函数，该函数没有返回值，即返回值类型为 <code v-pre>void</code>。</p>
<p>综上所述，<code v-pre>null</code> 和 <code v-pre>undefined</code> 是 TypeScript 中用来表示缺少和非法值的特殊数据类型，常常作为其他类型的子类型使用，用于表示变量既可以存储对应的值，也可以存储 <code v-pre>null</code> 或 <code v-pre>undefined</code>。<code v-pre>void</code> 类型表示一个函数没有返回值，即返回值为 <code v-pre>undefined</code>。</p>
</li>
<li>
<p>Never类型</p>
<p>在 TypeScript 中，<code v-pre>never</code> 类型表示永远不会出现的值的类型，通常用于表示不可能存在的错误情况或者异常情况的返回类型。它是所有类型的子类型，包括 <code v-pre>any</code> 类型。</p>
<p>在实际开发中，我们需要定义一些函数或方法，当输入参数无法处理时，就会抛出异常或终止程序的执行，此时就可以使用 <code v-pre>never</code> 类型作为返回值类型。下面是一个示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">throwError</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">message</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span><span class="token operator">:</span> never <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个名为 <code v-pre>throwError</code> 的函数，该函数接收一个字符串类型的参数 <code v-pre>message</code>，并且永远不会有返回值，而是直接抛出了一个 <code v-pre>Error</code> 异常。因此，这个函数的返回类型应该是 <code v-pre>never</code>。</p>
<p>另外，当函数内部出现无限循环、无法到达终止点或者调用了一个也返回 <code v-pre>never</code> 类型的函数时，函数的返回类型也应该是 <code v-pre>never</code>。例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">infiniteLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> never <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的示例展示了一个死循环的例子，它永远不会结束，因此函数的返回类型是 <code v-pre>never</code>。</p>
<p>总之，<code v-pre>never</code> 类型在 TypeScript 中表示不可能存在的值的类型，通常用于表示不可能存在的错误情况或异常情况的返回类型，当函数内部出现无限循环、无法到达终止点或者调用了一个也返回 <code v-pre>never</code> 类型的函数时，函数的返回类型也应该是 <code v-pre>never</code>。</p>
</li>
<li>
<p>类型断言</p>
<p>在 TypeScript 中，类型断言（Type Assertion）是一种告诉编译器变量的类型的方式。它可以用来手动指定一个值的类型，从而绕过 TypeScript 的类型检查。</p>
<p>类型断言有两种形式：尖括号语法和 as 语法。</p>
<p>尖括号语法：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> 
 <span class="token keyword">let</span> <span class="token literal-property property">someValue</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token string">"hello world"</span><span class="token punctuation">;</span>
 <span class="token keyword">let</span> <span class="token literal-property property">strLength</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>string<span class="token operator">></span>someValue<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>as 语法：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">let</span> <span class="token literal-property property">someValue</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token string">"hello world"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">strLength</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token punctuation">(</span>someValue <span class="token keyword">as</span> string<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两种形式的效果是一样的，它们都将 someValue 断言为 string 类型，然后获取其 length 属性。</p>
<p>需要注意的是，类型断言并不会真正地转换变量的类型，它只是告诉编译器这个变量应该被当做什么类型来使用。如果类型断言不正确，就会导致运行时错误。</p>
<p>另外，如果一个变量已经被 TypeScript 推断出了类型，那么就不需要使用类型断言了。只有在某些情况下 TypeScript 无法推断出变量类型时，才需要使用类型断言。</p>
</li>
<li>
<p>变量声明</p>
</li>
</ul>
<p>在 TypeScript 中，有多种方式可以声明变量，包括关键字 <code v-pre>let</code>、<code v-pre>const</code> 和 <code v-pre>var</code>。下面分别对它们进行详细介绍：</p>
<h3 id="let-声明" tabindex="-1"><a class="header-anchor" href="#let-声明" aria-hidden="true">#</a> let 声明</h3>
<p><code v-pre>let</code> 声明用于声明一个块级作用域的变量，可以通过赋值语句来初始化变量的值。例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">let</span> <span class="token literal-property property">a</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个名为 <code v-pre>a</code> 的变量，类型为 <code v-pre>number</code>，并将其赋值为 <code v-pre>10</code>。</p>
<p>需要注意的是，<code v-pre>let</code> 声明的变量只在其声明的块级作用域内有效，如果在同一作用域内重复声明同名变量会引发编译错误。</p>
<h3 id="const-声明" tabindex="-1"><a class="header-anchor" href="#const-声明" aria-hidden="true">#</a> const 声明</h3>
<p><code v-pre>const</code> 声明用于声明一个常量，一旦被赋值之后就不能再被修改。例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">const</span> <span class="token literal-property property">b</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个名为 <code v-pre>b</code> 的常量，类型为 <code v-pre>string</code>，并将其赋值为 <code v-pre>&quot;hello&quot;</code>。</p>
<p>需要注意的是，与 <code v-pre>let</code> 声明不同，<code v-pre>const</code> 声明的变量在声明时必须进行初始化赋值，并且不能在之后修改其值。</p>
<h3 id="var-声明" tabindex="-1"><a class="header-anchor" href="#var-声明" aria-hidden="true">#</a> var 声明</h3>
<p><code v-pre>var</code> 声明用于声明一个全局或函数作用域的变量，可以通过赋值语句来初始化变量的值。例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">var</span> <span class="token literal-property property">c</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">"world"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个名为 <code v-pre>c</code> 的变量，类型为 <code v-pre>string</code>，并将其赋值为 <code v-pre>&quot;world&quot;</code>。</p>
<p>需要注意的是，<code v-pre>var</code> 声明的变量存在变量提升的特性，在函数内部使用 <code v-pre>var</code> 声明的变量会被提升到函数的顶部。此外，由于 <code v-pre>var</code> 存在变量提升的特性，也可能会导致多次声明同名变量而不会引发编译错误。</p>
<p>综上所述，<code v-pre>let</code>、<code v-pre>const</code> 和 <code v-pre>var</code> 是 TypeScript 中用于声明变量的关键字，它们分别用于声明块级作用域变量、常量和全局或函数作用域变量。在实际开发中，我们应该根据实际需求来选择合适的声明方式。</p>
<h2 id="第二部分-面向对象编程" tabindex="-1"><a class="header-anchor" href="#第二部分-面向对象编程" aria-hidden="true">#</a> 第二部分：面向对象编程</h2>
<h3 id="第4章-类和接口" tabindex="-1"><a class="header-anchor" href="#第4章-类和接口" aria-hidden="true">#</a> 第4章：类和接口</h3>
<ul>
<li>类的定义和使用</li>
<li>类的继承</li>
<li>抽象类</li>
<li>接口的定义和使用</li>
</ul>
<h3 id="类的定义和使用" tabindex="-1"><a class="header-anchor" href="#类的定义和使用" aria-hidden="true">#</a> 类的定义和使用</h3>
<p>在 TypeScript 中，我们可以使用 <code v-pre>class</code> 关键字来定义类。下面是一个示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> string <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个名为 <code v-pre>Person</code> 的类，包含一个私有属性 <code v-pre>name</code> 和一个公共方法 <code v-pre>getName()</code>。其中，构造函数用于初始化实例对象时的属性值。</p>
<p>我们可以通过以下方式来使用这个类：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出：张三</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类的继承" tabindex="-1"><a class="header-anchor" href="#类的继承" aria-hidden="true">#</a> 类的继承</h3>
<p>在 TypeScript 中，类还支持继承。通过继承，我们可以让一个类从另一个类中继承属性和方法。下面是一个示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token literal-property property">grade</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">grade</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> grade<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token function">getGrade</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>grade<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个名为 <code v-pre>Student</code> 的类，继承了之前定义的 <code v-pre>Person</code> 类，同时新增了一个私有属性 <code v-pre>grade</code> 和一个公共方法 <code v-pre>getGrade()</code>。</p>
<p>我们可以通过以下方式来使用这个类：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"李四"</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>student<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出：李四console.log(student.getGrade());// 输出：90</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="抽象类" tabindex="-1"><a class="header-anchor" href="#抽象类" aria-hidden="true">#</a> 抽象类</h3>
<p>在 TypeScript 中，我们也可以使用抽象类来定义一些不能直接实例化的类。抽象类只能用作其他类的基类，不能直接用于创建对象。下面是一个示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
abstract <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> abstract <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个名为 <code v-pre>Animal</code> 的抽象类，包含一个抽象方法 <code v-pre>makeSound()</code>，该方法没有具体的实现逻辑。</p>
<p>我们可以通过派生类来实现抽象方法：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"汪汪汪"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个名为 <code v-pre>Dog</code> 的类，继承了之前定义的抽象类 <code v-pre>Animal</code>，同时实现了抽象方法 <code v-pre>makeSound()</code>。</p>
<h3 id="接口的定义和使用" tabindex="-1"><a class="header-anchor" href="#接口的定义和使用" aria-hidden="true">#</a> 接口的定义和使用</h3>
<p>在 TypeScript 中，我们可以使用接口来描述对象的形状。接口定义了对象应该具有哪些属性和方法，但不提供具体的实现。下面是一个示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个名为 <code v-pre>Person</code> 的接口，描述了一个人的基本信息和说话的行为，但并没有提供具体的实现逻辑。</p>
<p>我们可以通过以下方式来使用这个接口：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">const</span> <span class="token literal-property property">person</span><span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token function-variable function">sayHi</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">我叫</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">，今年</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">岁</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
person<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出：我叫张三，今年18岁</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，接口只描述了对象应该具有哪些属性和方法，而并不限制对象的具体实现方式。因此，我们可以自由地在对象上添加其他属性和方法。</p>
<p>综上所述，类和接口是 TypeScript 中非常重要的概念，可以帮助我们更好地组织代码，提高代码的可读性和可维护性。我们应该根据实际需求来选择合适的声明方式</p>
<h3 id="第5章-函数和泛型" tabindex="-1"><a class="header-anchor" href="#第5章-函数和泛型" aria-hidden="true">#</a> 第5章：函数和泛型</h3>
<ul>
<li>函数的定义和使用</li>
<li>函数类型</li>
<li>可选参数和默认参数</li>
<li>剩余参数</li>
<li>泛型的定义和使用</li>
<li>泛型约束</li>
</ul>
<h3 id="函数和泛型" tabindex="-1"><a class="header-anchor" href="#函数和泛型" aria-hidden="true">#</a> 函数和泛型</h3>
<p>在 TypeScript 中，函数和泛型都是一等公民，可以被灵活地使用。</p>
<ul>
<li>
<p>函数：函数是一个可执行的代码块，它接收输入参数并返回输出参数。</p>
</li>
<li>
<p>泛型：泛型是一种通用的类型，可以用于描述不同类型之间的相似性，并使代码更加灵活和可重用。</p>
<p>下面是一个示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">function</span> identity<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个名为 <code v-pre>identity</code> 的函数，使用了泛型类型参数 <code v-pre>T</code>。该函数接收一个类型为 <code v-pre>T</code> 的参数 <code v-pre>arg</code>，并返回该参数的值。</p>
<p>我们可以通过以下方式来调用这个函数：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">const</span> result1 <span class="token operator">=</span> <span class="token function">identity</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回值类型为 string </span>
<span class="token keyword">const</span> result2 <span class="token operator">=</span> <span class="token function">identity</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回值类型为 number</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在调用时，可以明确指定泛型参数的类型，也可以让 TypeScript 根据参数类型自动推断出泛型参数的类型。这使得代码更加灵活和可读。</p>
<h3 id="函数的定义和使用" tabindex="-1"><a class="header-anchor" href="#函数的定义和使用" aria-hidden="true">#</a> 函数的定义和使用</h3>
<p>在 TypeScript 中，函数的定义和使用与 JavaScript 类似。下面是一个示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> 
 <span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">"world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出：Hello, world!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个名为 <code v-pre>greet</code> 的函数，接收一个类型为 <code v-pre>string</code> 的参数 <code v-pre>name</code>，并输出一句问候语。</p>
</li>
</ul>
<h3 id="函数类型" tabindex="-1"><a class="header-anchor" href="#函数类型" aria-hidden="true">#</a> 函数类型</h3>
<p>在 TypeScript 中，函数也有自己的类型。函数类型包含函数输入参数类型和返回值类型的定义。下面是一个示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    
    type <span class="token function-variable function">GreetFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token literal-property property">greet</span><span class="token operator">:</span> <span class="token function-variable function">GreetFunction</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">"world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出：Hello, world!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码先使用 <code v-pre>type</code> 关键字定义了一个名为 <code v-pre>GreetFunction</code> 的函数类型，接着定义了一个名为 <code v-pre>greet</code> 的函数，并将其赋值给一个类型为 <code v-pre>GreetFunction</code> 的变量。这样可以明确指定函数类型，从而提高代码的可读性和可维护性。</p>
<h3 id="可选参数和默认参数" tabindex="-1"><a class="header-anchor" href="#可选参数和默认参数" aria-hidden="true">#</a> 可选参数和默认参数</h3>
<ul>
<li>
<p>在 TypeScript 中，函数的参数可以有两种类型：可选参数和默认参数。</p>
</li>
<li>
<p>可选参数：通过在参数名后面添加 <code v-pre>?</code> 标记来表示该参数是可选的。</p>
</li>
<li>
<p>默认参数：通过在参数名后面添加等号 <code v-pre>=</code> 和默认值来表示该参数的默认值。</p>
<p>下面是一个示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> 
 <span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">,</span> age<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> greeting <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     greeting <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">, age </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">"Alice"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出：Hello, </span>
 <span class="token function">Alicegreet</span><span class="token punctuation">(</span><span class="token string">"Bob"</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出：Hello, Bob, age 25</span>
 <span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">"Charlie"</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token string">"Hi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出：Hi, Charlie, age 30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个名为 <code v-pre>greet</code> 的函数，接收三个参数：<code v-pre>name</code>、<code v-pre>age</code> 和 <code v-pre>message</code>。其中，<code v-pre>age</code> 和 <code v-pre>message</code> 是可选的，默认值分别是 <code v-pre>undefined</code> 和 <code v-pre>&quot;Hello&quot;</code>。如果传入了 <code v-pre>age</code> 参数，会在输出中加入对年龄的说明。</p>
<h3 id="剩余参数" tabindex="-1"><a class="header-anchor" href="#剩余参数" aria-hidden="true">#</a> 剩余参数</h3>
<p>在 TypeScript 中，我们还可以使用剩余参数语法来接收任意数量的参数，并将它们作为一个数组来处理。剩余参数可以在参数列表的最后一个位置使用，通过 <code v-pre>...</code> 来标记。</p>
<p>下面是一个示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>numbers<span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span>
  <span class="token keyword">return</span> numbers<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">total<span class="token punctuation">,</span> num</span><span class="token punctuation">)</span> <span class="token operator">=></span> total <span class="token operator">+</span> num<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出：0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出：6</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出：22</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个名为 <code v-pre>sum</code> 的函数，接收任意数量的数字参数，并返回它们的总和。</p>
<h3 id="泛型的定义和使用" tabindex="-1"><a class="header-anchor" href="#泛型的定义和使用" aria-hidden="true">#</a> 泛型的定义和使用</h3>
<p>在 TypeScript 中，泛型用于描述不同类型之间的相似性，可以使用泛型类型参数来定义函数、类等通用的数据结构和算法。下面是一个示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">function</span> identity<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
	  <span class="token keyword">return</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">identity</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出：hello</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">identity</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出：123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个名为 <code v-pre>identity</code> 的函数，使用了泛型类型参数 <code v-pre>T</code>。该函数接收一个类型为 <code v-pre>T</code> 的参数 <code v-pre>arg</code>，并返回该参数的值。调用时可以明确指定泛型参数的类型，也可以让 TypeScript 根据参数类型自动推断出泛型参数的类型。</p>
<h3 id="泛型约束" tabindex="-1"><a class="header-anchor" href="#泛型约束" aria-hidden="true">#</a> 泛型约束</h3>
<p>在 TypeScript 中，我们还可以使用泛型约束来限制泛型类型参数的类型范围。泛型约束可以使用 <code v-pre>extends</code> 关键字来定义。</p>
<p>下面是一个示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">interface</span> <span class="token class-name">Lengthwise</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">length</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> loggingIdentity<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Lengthwise</span><span class="token operator">></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">length of </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>arg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>arg<span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">loggingIdentity</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出：length of hello: 5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">loggingIdentity</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出：length of 1,2,3: 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">loggingIdentity</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出：length of [object Object]: 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个名为 <code v-pre>Lengthwise</code> 的接口，包含一个数字属性 <code v-pre>length</code>。接着定义了一个名为 <code v-pre>loggingIdentity</code> 的函数，使用了泛型类型参数 <code v-pre>T</code>，并使用了泛型约束 <code v-pre>extends Lengthwise</code>，表示泛型类型参数必须符合 <code v-pre>Lengthwise</code> 接口的要求。</p>
<p>调用 <code v-pre>loggingIdentity</code> 函数时，传入了三个不同类型的参数：字符串、数组和一个自定义对象。由于它们都符合 <code v-pre>Lengthwise</code> 接口的要求，因此可以正常输出结果。</p>
<p>综上所述，函数和泛型是 TypeScript 中非常重要的概念，可以帮助我们更好地组织代码，提高代码的可读性和可维护性。我们应该根据实际需求来选择合适的声明方式，并善于使用泛型约束等技巧来提高代码的类型安全性和健壮性。</p>
</li>
</ul>
<h2 id="第三部分-高级特性" tabindex="-1"><a class="header-anchor" href="#第三部分-高级特性" aria-hidden="true">#</a> 第三部分：高级特性</h2>
<h3 id="第6章-模块" tabindex="-1"><a class="header-anchor" href="#第6章-模块" aria-hidden="true">#</a> 第6章：模块</h3>
<ul>
<li>
<p>模块的概念和使用</p>
</li>
<li>
<p>模块的导入和导出</p>
</li>
<li>
<p>命名空间</p>
<h3 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> <strong>模块</strong></h3>
<p>在 TypeScript 中，模块是一种组织代码的方式，它将相关的代码放在一个独立的文件中，从而实现代码的复用和分离。</p>
<h3 id="模块的概念和使用" tabindex="-1"><a class="header-anchor" href="#模块的概念和使用" aria-hidden="true">#</a> <strong>模块的概念和使用</strong></h3>
<p>模块的定义使用 export 关键字，例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token comment">// person.ts</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, I'm </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> years old.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个 Person 类，并使用 export 关键字将其导出。</p>
<p>在另一个文件中，可以使用 import 关键字导入该模块：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Person <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./person"</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"Tom"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
person<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码导入了 person.ts 文件中导出的 Person 类，并创建了一个 person 对象。</p>
<h3 id="模块的导入和导出" tabindex="-1"><a class="header-anchor" href="#模块的导入和导出" aria-hidden="true">#</a> <strong>模块的导入和导出</strong></h3>
<p>模块的导入和导出使用 import 和 export 关键字，例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token comment">// person.ts</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Person <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./person"</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，person.ts 文件中的 Person 类被导出，main.ts 文件中使用 import 关键字导入该模块。</p>
<h3 id="命名空间" tabindex="-1"><a class="header-anchor" href="#命名空间" aria-hidden="true">#</a> <strong>命名空间</strong></h3>
<p>命名空间是一种将代码隔离到独立的命名空间中的方式，它可以避免命名冲突和全局变量污染。</p>
<p>命名空间的定义使用 namespace 关键字，例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> 
 namespace MyNamespace <span class="token punctuation">{</span>
   <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
     <span class="token comment">// ...</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个名为 MyNamespace 的命名空间，并在其中定义了一个 MyClass 类。在另一个文件中，可以使用该命名空间中的类：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span> MyNamespace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./mynamespace"</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> myClass <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyNamespace<span class="token punctuation">.</span>MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，使用 import 关键字导入了 MyNamespace 命名空间，并通过 MyNamespace.MyClass 的方式访问其中的类。</p>
</li>
</ul>
<h3 id="第7章-装饰器" tabindex="-1"><a class="header-anchor" href="#第7章-装饰器" aria-hidden="true">#</a> 第7章：装饰器</h3>
<ul>
<li>装饰器的概念和使用</li>
<li>类装饰器</li>
<li>方法装饰器</li>
<li>属性装饰器</li>
<li>参数装饰器</li>
</ul>
<h3 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器" aria-hidden="true">#</a> <strong>装饰器</strong></h3>
<p>在 TypeScript 中，装饰器是一种特殊的声明，它可以被附加到类声明、方法、属性或参数上，以修改类的行为。</p>
<h3 id="装饰器的概念和使用" tabindex="-1"><a class="header-anchor" href="#装饰器的概念和使用" aria-hidden="true">#</a> <strong>装饰器的概念和使用</strong></h3>
<p>装饰器使用 @ 符号，例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

@log
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, I'm </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> years old.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个 log 装饰器，它会在类被声明时打印类的信息。在 Person 类上应用了 log 装饰器。</p>
<h3 id="类装饰器" tabindex="-1"><a class="header-anchor" href="#类装饰器" aria-hidden="true">#</a> <strong>类装饰器</strong></h3>
<p>类装饰器是应用于类声明的装饰器。类装饰器可以用来检查类的定义是否符合规范，或者修改类的行为。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

@log
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, I'm </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> years old.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个 log 装饰器，并应用于 Person 类。</p>
<h3 id="方法装饰器" tabindex="-1"><a class="header-anchor" href="#方法装饰器" aria-hidden="true">#</a> <strong>方法装饰器</strong></h3>
<p>方法装饰器是应用于方法声明的装饰器。方法装饰器可以用来检查方法的定义是否符合规范，或者修改方法的行为。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">descriptor</span><span class="token operator">:</span> PropertyDescriptor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>descriptor<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  @log
  <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, I'm </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> years old.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个 log 装饰器，并应用于 Person 类中的 sayHello 方法。</p>
<h3 id="属性装饰器" tabindex="-1"><a class="header-anchor" href="#属性装饰器" aria-hidden="true">#</a> <strong>属性装饰器</strong></h3>
<p>属性装饰器是应用于属性声明的装饰器。属性装饰器可以用来检查属性的定义是否符合规范，或者修改属性的行为。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  @log
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, I'm </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> years old.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个 log 装饰器，并应用于 Person 类中的 name 属性。</p>
<h3 id="参数装饰器" tabindex="-1"><a class="header-anchor" href="#参数装饰器" aria-hidden="true">#</a> <strong>参数装饰器</strong></h3>
<p>参数装饰器是应用于参数声明的装饰器。参数装饰器可以用来检查参数的定义是否符合规范，或者修改参数的行为。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">index</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> @log age<span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, I'm </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> years old.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个 log 装饰器，并应用于 Person 类中的 age 参数。</p>
<h3 id="第8章-命名空间和模块的混合使用" tabindex="-1"><a class="header-anchor" href="#第8章-命名空间和模块的混合使用" aria-hidden="true">#</a> 第8章：命名空间和模块的混合使用</h3>
<ul>
<li>命名空间和模块的区别</li>
<li>命名空间和模块的混合使用</li>
</ul>
<h3 id="命名空间和模块的区别" tabindex="-1"><a class="header-anchor" href="#命名空间和模块的区别" aria-hidden="true">#</a> <strong>命名空间和模块的区别</strong></h3>
<p>在 TypeScript 中，命名空间和模块都是用来组织代码的方式，但它们有一些区别。</p>
<p>命名空间用于在全局作用域内提供唯一的名称，以避免命名冲突。命名空间中的代码可以通过 namespace 关键字进行定义。而模块用于在文件级别上提供唯一的名称，以避免文件之间的命名冲突。模块中的代码可以通过 export 和 import 关键字进行定义和引用。</p>
<h3 id="命名空间和模块的混合使用" tabindex="-1"><a class="header-anchor" href="#命名空间和模块的混合使用" aria-hidden="true">#</a> <strong>命名空间和模块的混合使用</strong></h3>
<p>在 TypeScript 中，可以将命名空间和模块混合使用，以实现更好的代码组织和复用。例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// shapes.ts</span>
<span class="token keyword">export</span> namespace Shapes <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">public</span> <span class="token literal-property property">width</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token keyword">public</span> <span class="token literal-property property">height</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// app.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Shapes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./shapes'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> rectangle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Shapes<span class="token punctuation">.</span>Rectangle</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们定义了一个 <code v-pre>Shapes</code> 命名空间，并将 <code v-pre>Rectangle</code> 类导出。然后在 <code v-pre>app.ts</code> 中，我们通过 <code v-pre>import</code> 关键字引入了 <code v-pre>Shapes</code> 命名空间，并创建了一个 <code v-pre>Rectangle</code> 的实例。这样就可以在不同的文件中共享代码，同时避免了命名冲突。</p>
</div></template>


