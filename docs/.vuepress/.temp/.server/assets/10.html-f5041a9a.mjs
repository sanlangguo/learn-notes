import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.696937cd.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_10-作用域链和闭包-代码中出现相同的变量-javascript-引擎是如何选择的" tabindex="-1"><a class="header-anchor" href="#_10-作用域链和闭包-代码中出现相同的变量-javascript-引擎是如何选择的" aria-hidden="true">#</a> 10-作用域链和闭包：代码中出现相同的变量，JavaScript 引擎是如何选择的？</h2><p>本文主要讲解 JavaScript 中作用域链和闭包的概念，以及当代码中出现相同的变量时，JavaScript 引擎是如何选择变量的。</p><h3 id="作用域链" tabindex="-1"><a class="header-anchor" href="#作用域链" aria-hidden="true">#</a> 作用域链</h3><p>作用域链是指当 JavaScript 引擎查找变量时所使用的一种机制。在 JavaScript 中，每个执行上下文都有一个与之相关的变量环境或词法环境，这些环境按照嵌套关系形成了一条链，这条链就是作用域链。当 JavaScript 引擎查找变量时，会从当前环境开始，依次沿着作用域链向上查找，直到找到该变量或者到达全局环境为止。</p><h3 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h3><p>闭包是指一个函数能够访问其词法作用域之外的变量。在 JavaScript 中，由于函数具有词法作用域，因此函数内部可以访问到函数外部的变量。如果一个函数内部定义了另一个函数，并且内部函数引用了外部函数的变量，那么这个内部函数就形成了一个闭包。</p><p>示例代码 接下来，我们通过一个示例代码来说明作用域链和闭包的概念：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> myName <span class="token operator">=</span> <span class="token string">&quot;极客邦&quot;</span><span class="token punctuation">;</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> myName <span class="token operator">=</span> <span class="token string">&quot;极客时间&quot;</span><span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这段代码中，我们定义了三个函数：bar、foo 和全局作用域中的匿名函数。foo 函数内部定义了一个名为 myName 的变量，并调用了 bar 函数。bar 函数内部并没有定义 myName 变量，因此会沿着作用域链向上查找。</p><h3 id="作用域链查找" tabindex="-1"><a class="header-anchor" href="#作用域链查找" aria-hidden="true">#</a> 作用域链查找</h3><p>当执行 bar 函数时，JavaScript 引擎会先在 bar 函数内部查找 myName 变量。由于 bar 函数内部并没有定义该变量，因此会沿着作用域链向上查找。</p><p>在 foo 函数内部查找到了 myName 变量，并将其值设置为 &quot;极客邦&quot;。因此，当 bar 函数打印 myName 变量时，应该输出 &quot;极客邦&quot;。</p><h3 id="闭包实现" tabindex="-1"><a class="header-anchor" href="#闭包实现" aria-hidden="true">#</a> 闭包实现</h3><p>接下来，我们再通过一个示例代码来说明闭包的实现：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  
  <span class="token keyword">function</span> <span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    count<span class="token operator">++</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> counter<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> counter1 <span class="token operator">=</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> counter2 <span class="token operator">=</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">counter1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 1</span>
<span class="token function">counter1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 2</span>
<span class="token function">counter2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 1</span>
<span class="token function">counter2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 2</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这段代码中，我们定义了一个名为 createCounter 的函数，该函数返回一个内部函数 counter。在 createCounter 函数内部定义了一个名为 count 的变量，并将其初始值设置为 0。</p><p>当调用 createCounter 函数时，会返回一个内部函数 counter。由于 counter 函数引用了外部函数 createCounter 的变量 count，因此 counter 函数形成了一个闭包。</p><p>当调用 counter1() 函数时，会将 count 变量加一，并输出 1。再次调用 counter1() 函数时，会将 count 变量再次加一，并输出 2。同样地，当调用 counter2() 函数时，会将 count 变量加一，并输出 1。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>本文主要介绍了 JavaScript 中作用域链和闭包的概念，并通过示例代码来说明作用域链和闭包的实现方式。当代码中出现相同的变量时，JavaScript 引擎会根据作用域链的顺序来选择变量。闭包可以让函数访问其词法作用域之外的变量，并且可以在多次调用中保留其状态。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/10.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _10_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "10.html.vue"]]);
export {
  _10_html as default
};
