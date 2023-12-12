<template><div><h3 id="vue2或者vue3兼容性" tabindex="-1"><a class="header-anchor" href="#vue2或者vue3兼容性" aria-hidden="true">#</a> vue2或者vue3兼容性</h3>
<ul>
<li>
<p>Vue3 不兼容 IE11 及以下的浏览器版本。</p>
</li>
<li>
<p>Vue3 使用了 ES2015 的语法和特性，而 IE11 不支持 ES2015。因此，Vue3 在 IE11 中会出现无法运行或运行异常的情况。</p>
</li>
</ul>
<p>如果您需要在 IE11 中运行 Vue3，可以使用 Vue2。Vue2 支持 IE11 及以下的浏览器版本。</p>
<p>以下是 Vue3 支持的浏览器版本：</p>
<ol>
<li>Chrome 49 或更高版本</li>
<li>Firefox 21 或更高版本</li>
<li>Safari 10 或更高版本</li>
<li>Edge 79 或更高版本</li>
<li>Opera 40 或更高版本</li>
</ol>
<p>如果您使用的是其他浏览器，请先检查该浏览器是否支持 ES2015。</p>
<h3 id="vue-3与vue-2有哪些主要的区别" tabindex="-1"><a class="header-anchor" href="#vue-3与vue-2有哪些主要的区别" aria-hidden="true">#</a> Vue 3与Vue 2有哪些主要的区别？</h3>
<ul>
<li><code v-pre>Composition API：Vue 3</code>引入了<code v-pre>Composition API</code>，它提供了一种基于函数的组合式编程的方式，使得代码更加可复用和可组合。而<code v-pre>Vue 2</code>使用的是Options API。</li>
<li>性能优化：Vue 3在虚拟DOM的更新算法上进行了优化，提高了渲染性能。</li>
<li>TypeScript：Vue 3对TypeScript的支持更加友好，内置了更多的类型声明，可以提供更好的开发体验和代码提示。</li>
<li>包大小：Vue 3的包体积相比Vue 2更小，减少了运行时的体积。</li>
</ul>
<h3 id="vue-3中的teleport是什么-有什么作用" tabindex="-1"><a class="header-anchor" href="#vue-3中的teleport是什么-有什么作用" aria-hidden="true">#</a> Vue 3中的Teleport是什么？有什么作用？</h3>
<ul>
<li>Teleport是Vue 3中新增的一个特性，它允许你将组件的内容渲染到指定的目标位置上。
它的作用是帮助我们处理在HTML结构上需要移动的元素，并且不会打破语义化。</li>
</ul>
<h3 id="vue-3中的响应式系统与vue-2有何改进" tabindex="-1"><a class="header-anchor" href="#vue-3中的响应式系统与vue-2有何改进" aria-hidden="true">#</a> Vue 3中的响应式系统与Vue 2有何改进？</h3>
<ul>
<li>Vue 3使用Proxy代替了Vue 2中的Object.defineProperty，从而提供了更好的性能和更全面的响应式能力。</li>
<li>Vue 3中的响应式系统可以监听动态添加的属性。</li>
<li>Vue 3中的响应式系统支持了嵌套对象的深层监听。</li>
</ul>
<h3 id="vue-3中的suspense是什么-如何使用它" tabindex="-1"><a class="header-anchor" href="#vue-3中的suspense是什么-如何使用它" aria-hidden="true">#</a> Vue 3中的Suspense是什么？如何使用它？</h3>
<ul>
<li>Suspense是Vue 3中新增的一个特性，用于处理异步组件的加载状态。</li>
<li>使用Suspense，可以在组件树中定义一个fallback内容，当异步组件尚未加载完成时，可以显示fallback内容，提供更好的用户体验。</li>
<li>在Vue 3中，通过在父组件中使用<code v-pre>&lt;Suspense&gt;</code>标签包裹异步组件，并通过<code v-pre>&lt;template #default&gt;</code>来定义fallback内容，即可使用Suspense。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>Suspense<span class="token operator">></span>
    <span class="token operator">&lt;</span>template #<span class="token keyword">default</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>AsyncComp<span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>template #fallback<span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span>
<span class="token operator">&lt;</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">const</span> AsyncComp <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./AsyncComp.vue'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    AsyncComp
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-3中的fragment是什么-为什么要使用它" tabindex="-1"><a class="header-anchor" href="#vue-3中的fragment是什么-为什么要使用它" aria-hidden="true">#</a> Vue 3中的Fragment是什么？为什么要使用它？</h3>
<ul>
<li>Fragment是Vue 3中新增的一个特性，允许我们在不增加额外DOM元素的情况下，渲染多个子元素。</li>
<li>在Vue 2中，组件的模板必须有一个根元素进行包裹，而Fragment可以帮助我们去除这个额外的包裹元素，使得组件更加简洁和灵活。</li>
</ul>
<h3 id="vue-3中的composition-api是什么-它与options-api有何不同" tabindex="-1"><a class="header-anchor" href="#vue-3中的composition-api是什么-它与options-api有何不同" aria-hidden="true">#</a> Vue 3中的Composition API是什么？它与Options API有何不同？</h3>
<ul>
<li>Composition API是Vue 3中新增的一种API风格，它基于函数的组合方式来组织组件的逻辑。
与Options API相比，Composition API更加灵活和可组合，可以将相关的逻辑组织在一起，提高代码的复用性。</li>
<li>Composition API使用setup()函数来替代Vue 2中的data()、methods()等选项，并且可以使用ref、reactive等函数来创建响应式数据。</li>
</ul>
<h3 id="vue-3中的proxy和reflect在响应式系统中起到了什么作用" tabindex="-1"><a class="header-anchor" href="#vue-3中的proxy和reflect在响应式系统中起到了什么作用" aria-hidden="true">#</a> Vue 3中的Proxy和Reflect在响应式系统中起到了什么作用？</h3>
<ul>
<li>Vue 3使用Proxy来实现响应式系统，它可以拦截对象上的各种操作，如属性访问、属性设置、删除等。</li>
<li>Proxy可以提供更全面的响应式能力，并且可以监听动态添加的属性。</li>
<li>Reflect是一个内置的对象，它提供了一组处理对象的默认操作方法，可以简化对Proxy的调用。</li>
</ul>
<h3 id="vue-3中的v-model指令有哪些新的特性" tabindex="-1"><a class="header-anchor" href="#vue-3中的v-model指令有哪些新的特性" aria-hidden="true">#</a> Vue 3中的v-model指令有哪些新的特性？</h3>
<ul>
<li>在Vue 3中，v-model指令支持通过modelValue和update:modelValue来自定义组件的双向绑定。</li>
<li>可以使用v-model简化对表单元素的绑定，无需再使用value和@input事件。</li>
<li>可以使用.sync修饰符来实现子组件与父组件之间的双向数据绑定。</li>
</ul>
<h3 id="vue-3中的teleport和portal的区别是什么" tabindex="-1"><a class="header-anchor" href="#vue-3中的teleport和portal的区别是什么" aria-hidden="true">#</a> Vue 3中的Teleport和Portal的区别是什么？</h3>
<ul>
<li>Teleport是Vue 3中新增的特性，用于将组件的内容渲染到指定的目标位置上，它是一种更加灵活的替代方案。</li>
<li>Portal是React中的概念，在Vue中可以通过Teleport实现类似的功能，但Portal并不是Vue中内建的特性。</li>
</ul>
<h3 id="vue-3中的动态组件是如何使用的" tabindex="-1"><a class="header-anchor" href="#vue-3中的动态组件是如何使用的" aria-hidden="true">#</a> Vue 3中的动态组件是如何使用的？</h3>
<ul>
<li>在Vue 3中，可以通过<code v-pre>&lt;component&gt;</code>元素来实现动态组件的渲染。</li>
<li>可以使用:is属性来指定要渲染的组件类型，也可以通过v-bind动态绑定组件类型。</li>
</ul>
<p>在Vue 3中，可以使用<code v-pre>&lt;component&gt;</code>元素来实现动态组件的使用。以下是一个基本的示例：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentComponent<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> ComponentA <span class="token keyword">from</span> <span class="token string">'./ComponentA.vue'</span>
<span class="token keyword">import</span> ComponentB <span class="token keyword">from</span> <span class="token string">'./ComponentB.vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">currentComponent</span><span class="token operator">:</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 根据条件设置当前组件</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>currentComponent <span class="token operator">=</span> ComponentA
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>currentComponent <span class="token operator">=</span> ComponentB
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ComponentA<span class="token punctuation">,</span>
    ComponentB
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们使用了<code v-pre>&lt;component&gt;</code>元素，并通过<code v-pre>:is</code>属性将其绑定到一个动态的组件变量<code v-pre>currentComponent</code>上。在<code v-pre>mounted</code>生命周期钩子中，根据条件设置<code v-pre>currentComponent</code>的值，从而动态地渲染不同的组件。</p>
<p>需要注意的是，动态组件的名称可以是一个组件对象、组件的选项对象或者是一个组件的字符串标识。</p>
<h3 id="vue-3中的全局api和实例方法有哪些变化" tabindex="-1"><a class="header-anchor" href="#vue-3中的全局api和实例方法有哪些变化" aria-hidden="true">#</a> Vue 3中的全局API和实例方法有哪些变化？</h3>
<ul>
<li>在Vue 3中，全局API（如Vue.use()、Vue.directive()等）都被移除了，取而代之的是使用app.use()、app.directive()等实例方法来注册全局功能。</li>
</ul>
<h3 id="vue-3中的事件处理方式有何改变" tabindex="-1"><a class="header-anchor" href="#vue-3中的事件处理方式有何改变" aria-hidden="true">#</a> Vue 3中的事件处理方式有何改变？</h3>
<ul>
<li>在Vue 3中，事件处理函数不再自动绑定到组件实例上，需要显式地使用.bind()或箭头函数绑定。</li>
<li>使用事件修饰符时，需要在事件名称后面使用句点.进行分隔，如@click.stop、@keydown.enter等。</li>
</ul>
<h3 id="vue-3中的虚拟dom算法有何优化" tabindex="-1"><a class="header-anchor" href="#vue-3中的虚拟dom算法有何优化" aria-hidden="true">#</a> Vue 3中的虚拟DOM算法有何优化？</h3>
<ul>
<li>Vue 3中引入了基于Proxy的观察机制，使得虚拟DOM可以更精确地跟踪响应式数据的变化，提高了渲染性能。</li>
<li>Vue 3还优化了diff算法，减少了不必要的DOM操作，提高了更新效率。</li>
</ul>
<h3 id="vue-3中新增的响应式api有哪些" tabindex="-1"><a class="header-anchor" href="#vue-3中新增的响应式api有哪些" aria-hidden="true">#</a> Vue 3中新增的响应式API有哪些？</h3>
<ul>
<li>在Vue 3中，新增了一些响应式的API，包括ref、reactive、toRef、toRefs等。</li>
<li>ref用于创建一个单一的响应式数据，而reactive用于创建一个响应式的对象。</li>
<li>toRef和toRefs用于创建一个对已有响应式数据的引用。</li>
</ul>
<p>以下是<code v-pre>ref</code>、<code v-pre>reactive</code>、<code v-pre>toRef</code>和<code v-pre>toRefs</code>的使用案例：</p>
<ol>
<li><code v-pre>ref</code>：用于创建一个响应式的数据引用。</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 输出: 0</span>

count<span class="token punctuation">.</span>value<span class="token operator">++</span> <span class="token comment">// 修改值</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 输出: 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><code v-pre>reactive</code>：用于创建一个响应式的对象。</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// 输出: John</span>

state<span class="token punctuation">.</span>age<span class="token operator">++</span> <span class="token comment">// 修改值</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 输出: 31</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li><code v-pre>toRef</code>：用于创建一个指向响应式对象属性的单独引用。</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> toRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> nameRef <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token string">'name'</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nameRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 输出: John</span>

state<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'Jane'</span> <span class="token comment">// 修改值</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nameRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 输出: Jane</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li><code v-pre>toRefs</code>：用于将响应式对象转换为普通对象，其中每个属性都是一个独立的引用。</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> toRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> refs <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>refs<span class="token punctuation">.</span>name<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 输出: John</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>refs<span class="token punctuation">.</span>age<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 输出: 30</span>

state<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'Jane'</span> <span class="token comment">// 修改值</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>refs<span class="token punctuation">.</span>name<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 输出: Jane</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些函数是Vue 3中用于处理响应式数据的重要工具，可以根据不同的需求选择适合的使用方式。</p>
<h3 id="vue2-和-vue3-双向绑定方法不同" tabindex="-1"><a class="header-anchor" href="#vue2-和-vue3-双向绑定方法不同" aria-hidden="true">#</a> vue2 和 vue3 双向绑定方法不同</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Vue2 : Object.defineProperty()
***后添加的属性是劫持不到的

Vue3 : new Proxy()
***即使后添加的也可以劫持到***还不需要循环
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="set在vue3中没有-因为new-proxy不需要" tabindex="-1"><a class="header-anchor" href="#set在vue3中没有-因为new-proxy不需要" aria-hidden="true">#</a> $set在vue3中没有，因为new Proxy不需要</h3>
<h3 id="v-if和v-for优先级不同了" tabindex="-1"><a class="header-anchor" href="#v-if和v-for优先级不同了" aria-hidden="true">#</a> v-if和v-for优先级不同了</h3>
<ul>
<li>vue2 v-for优先级高</li>
<li>vue3 v-if 优先级高</li>
</ul>
</div></template>


