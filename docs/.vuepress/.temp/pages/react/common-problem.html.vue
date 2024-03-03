<template><div><h3 id="为什么不能直接在-jsx-中使用-if-else-实现条件染-而只能借用函数逻现呢" tabindex="-1"><a class="header-anchor" href="#为什么不能直接在-jsx-中使用-if-else-实现条件染-而只能借用函数逻现呢" aria-hidden="true">#</a> 为什么不能直接在 JSX 中使用 if else 实现条件染，而只能借用函数逻现呢?</h3>
<p>实际上，我们都知道<code v-pre>JSX</code> 会被编译为 <code v-pre>React.createElement</code>。直白地说，<code v-pre>React.createElement</code> 底层逻辑是无法运行<code v-pre>JavaScript</code>代码的，只能染一个结果。因此，<code v-pre>JSX</code> 中除了 <code v-pre>JavaScript</code> 表达式不能直接写 <code v-pre>JavaScript</code> 语法。准确来讲，<code v-pre>JSX</code> 只是函数调用和表达式的语法糖</p>
<h3 id="原生事件和-react合成事件" tabindex="-1"><a class="header-anchor" href="#原生事件和-react合成事件" aria-hidden="true">#</a> 原生事件和 React合成事件</h3>
<p><code v-pre>React</code> 中的事件机制并不是原生的那一套，事件没有绑定在原生 <code v-pre>DOM</code> 上,大多数事件都绑定在 <code v-pre>document</code> 上(除了少数不会冒泡到 <code v-pre>document</code> 的事件，如 <code v-pre>video</code> 等)</p>
<p>同时，<code v-pre>React</code> 触发的事件也是对原生事件的包装，并不是原生 <code v-pre>event</code> 对象。
出于对性能方面的考虑，合成事件( syntheticEvent)是被池化的。这意味着合成事件对象将会被重用，因此在调用事件回调函数后，合成事件对象上的所有属性都将会被废弃。这样做可以大大节省内存，而不会频繁地创建和销毁事件对象。</p>
<p>这样的事件系统设计，无疑会使性能有所提升，但同时也会引发几个潜在现象现象</p>
<h4 id="异步访问事件对象" tabindex="-1"><a class="header-anchor" href="#异步访问事件对象" aria-hidden="true">#</a> 异步访问事件对象</h4>
<p>我们不能以异步的方式访问合成事件对象。以下代码所展示的是一个典型的错误示例,</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">handleclick</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在以上代码中，第二个 <code v-pre>console.log</code> 总会输出 <code v-pre>undefined</code>
为此，<code v-pre>React</code> 也贴心地为我们准备了持久化合成事件的方法，如下。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">handleclick</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>

    e<span class="token punctuation">.</span><span class="token function">persist</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="阻止原生事件冒泡" tabindex="-1"><a class="header-anchor" href="#阻止原生事件冒泡" aria-hidden="true">#</a> 阻止原生事件冒泡</h4>
<p>React 的合成事件为使用原生事件留了一个口子，通过合成事件上的 <code v-pre>nativeEvent</code> 层。以访问原生事件。原生事件上的 <code v-pre>stopImmcdiatePropagation</code> 方法除了能做到像 <code v-pre>stopPropagation</code>一样事件向父级冒泡，还能阻止当前元素剩余的、同类型事件的执行(第一个 <code v-pre>click</code> 事件触发时，<code v-pre>e.stopImmcdiatePropagation</code> 能够阻止当前元素的第二个 <code v-pre>click</code> 事件触发 )</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">componentDidMount</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>
    document<span class="token punctuation">.</span><span class="token function">addEventlistener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'document click'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'div click'</span><span class="token punctuation">)</span>
    e<span class="token punctuation">.</span>nativeEvent<span class="token punctuation">.</span><span class="token function">stopImmediatePropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span><span class="token operator">></span>click<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="react-diff" tabindex="-1"><a class="header-anchor" href="#react-diff" aria-hidden="true">#</a> react diff</h3>
<p>我们都知道，React 把对比两个树的时间复杂度从 O(n)降低到 O()。但是，其中的优化细节和具方案可能并不为人所知，那么下面就对其中的细节和方案，以及 React 兄弟列表的 diff细节介绍一下</p>
<h4 id="react-的三个假设" tabindex="-1"><a class="header-anchor" href="#react-的三个假设" aria-hidden="true">#</a> React 的三个假设</h4>
<p>React 通过大胆的假设，制定对应的 diff 策略，将 O(n3) 复杂度的问题转换成 O(n) 复杂度的问题</p>
<ul>
<li>通过分层对比策略，对 tree diff 进行算法优化</li>
<li>通过相同类生成相似树形结构，不同类生成不同树形结构以及shouldComponentUpdate策略，对 component diff 进行算法优化</li>
<li>通过设置唯一 key 策略，对 element diff 进行算法优化</li>
</ul>
<p>但是React 的三个假设在对比 element 时存在短板，所以需要开发者为每一个 element 提供 key，以便React 可以准确地发现新旧集合节点中的相同节点，对于相同节点无须进行节点删除和创建，只需要将旧集合中节点的位置进行移动，更新为新集合中节点的位置</p>
<h3 id="加上-key-就一定性能最优吗" tabindex="-1"><a class="header-anchor" href="#加上-key-就一定性能最优吗" aria-hidden="true">#</a> 加上 key 就一定性能最优吗？</h3>
<p>不是的，在频发移动元素的操作开销时，不一定是最优的</p>
<h3 id="react-hooks-为什么不能在循环、条件语句或嵌套函数中调用" tabindex="-1"><a class="header-anchor" href="#react-hooks-为什么不能在循环、条件语句或嵌套函数中调用" aria-hidden="true">#</a> react hooks 为什么不能在循环、条件语句或嵌套函数中调用</h3>
<p>因为 React 内部实现需要按照调用顺序来记录每个 useState 的调用，以做区分; 如果在循环体中使用 Hooks，React 将无法确定每个 Hook 的调用顺序，可能导致状态混乱或不一致</p>
<h3 id="为什么-react-事件处理函数还需要手动绑定-this" tabindex="-1"><a class="header-anchor" href="#为什么-react-事件处理函数还需要手动绑定-this" aria-hidden="true">#</a> 为什么 react 事件处理函数还需要手动绑定 this</h3>
<p>在 React 中，事件处理函数需要手动绑定 <code v-pre>this</code>，原因如下：</p>
<p><strong>1. 箭头函数的词法作用域：</strong></p>
<p>React 事件处理函数通常使用箭头函数（<code v-pre>=&gt;</code>）编写。箭头函数使用词法作用域，这意味着它们继承了定义它们的函数的作用域。因此，在事件处理函数内部，<code v-pre>this</code> 指向定义它的组件实例。</p>
<p><strong>2. React 组件的事件委托：</strong></p>
<p>React 使用事件委托来提高性能。当一个事件发生时，它会冒泡到 DOM 树的根节点，然后 React 会根据事件目标来触发适当的事件处理函数。这会导致 <code v-pre>this</code> 指向 DOM 元素，而不是组件实例。</p>
<p><strong>3. 异步事件：</strong></p>
<p>事件处理函数可能包含异步操作，例如使用 <code v-pre>setTimeout</code> 或 <code v-pre>fetch</code>。在异步操作完成时，组件实例可能已经重新渲染或卸载。如果没有手动绑定 <code v-pre>this</code>，<code v-pre>this</code> 将指向一个无效的组件实例。</p>
<p><strong>手动绑定 this 的好处：</strong></p>
<ul>
<li>确保 <code v-pre>this</code> 在事件处理函数中始终指向正确的组件实例。</li>
<li>防止在异步操作中出现无效的 <code v-pre>this</code> 引用。</li>
<li>提高代码的可维护性和可读性。</li>
</ul>
<p><strong>手动绑定 this 的方法：</strong></p>
<p>有两种方法可以手动绑定 <code v-pre>this</code>：</p>
<ul>
<li>**使用箭头函数：**在事件处理函数中使用箭头函数，它会自动绑定 <code v-pre>this</code>。</li>
<li>**使用 <code v-pre>bind()</code> 方法：**在组件的构造函数中使用 <code v-pre>bind()</code> 方法来绑定事件处理函数。</li>
</ul>
<p><strong>示例：</strong></p>
<p>使用箭头函数：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 指向组件实例</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code v-pre>bind()</code> 方法：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 指向组件实例</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为什么-react-生命周期不需要手动绑定-this" tabindex="-1"><a class="header-anchor" href="#为什么-react-生命周期不需要手动绑定-this" aria-hidden="true">#</a> 为什么 react 生命周期不需要手动绑定 this</h3>
<p>React 生命周期方法不需要手动绑定 <code v-pre>this</code>，因为 React 在内部自动绑定它们。</p>
<p>在 React 组件的构造函数中，React 会自动绑定所有生命周期方法，包括：</p>
<ul>
<li><code v-pre>componentDidMount</code></li>
<li><code v-pre>componentDidUpdate</code></li>
<li><code v-pre>componentWillUnmount</code></li>
<li><code v-pre>shouldComponentUpdate</code></li>
<li><code v-pre>getDerivedStateFromProps</code></li>
<li><code v-pre>getSnapshotBeforeUpdate</code></li>
</ul>
<p>这意味着，在生命周期方法中，<code v-pre>this</code> 始终指向正确的组件实例，无需手动绑定。</p>
<p>这是因为生命周期方法是在组件实例创建时绑定的，并且在组件整个生命周期中保持不变。它们不会像事件处理函数那样被重新创建或重新绑定。</p>
<p>因此，在 React 生命周期方法中，你可以直接使用 <code v-pre>this</code>，而无需担心它指向错误的组件实例。</p>
<p><strong>示例：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// `this` refers to the component instance</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


