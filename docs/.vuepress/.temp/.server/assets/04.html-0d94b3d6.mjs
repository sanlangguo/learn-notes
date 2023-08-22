import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.cbae9f3f.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_04-函数表达式-涉及大量概念-函数表达式到底该怎么学" tabindex="-1"><a class="header-anchor" href="#_04-函数表达式-涉及大量概念-函数表达式到底该怎么学" aria-hidden="true">#</a> 04-函数表达式：涉及大量概念，函数表达式到底该怎么学</h2><p>本文介绍了JavaScript中函数表达式的重要性和应用，以及学习函数表达式所需要理解的底层概念。函数表达式在JavaScript中非常基础也非常重要，使用函数表达式可以用来实现代码隐藏，还可以实现变量隔离，因此被广泛地应用在各个项目中。</p><h3 id="函数表达式的学习难度" tabindex="-1"><a class="header-anchor" href="#函数表达式的学习难度" aria-hidden="true">#</a> 函数表达式的学习难度</h3><p>虽然函数表达式在JavaScript中非常基础也非常重要，但是学好函数表达式并不容易。因为它涉及到了很多底层概念，比如表达式、语句、函数即对象（在JavaScript中）等。而且函数表达式和函数声明看起来类似，都是定义一个函数，然后再调用该函数，很容易把二者搞混淆了。</p><h3 id="函数声明与函数表达式的差异" tabindex="-1"><a class="header-anchor" href="#函数声明与函数表达式的差异" aria-hidden="true">#</a> 函数声明与函数表达式的差异</h3><p>实际上，函数表达式和函数声明有着本质上的差异。理解了这种差异，你对函数表达式的理解也就加深了。</p><p>首先，我们来看一段代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这段代码中，我们声明了一个foo函数，然后在foo函数之前调用了foo函数。执行这段代码，我们发现foo函数被正确执行了。这是因为在JavaScript中，函数声明会被提升到作用域的顶部，所以在声明之前就可以调用该函数。</p><p>接下来，我们再来看一段代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这段代码中，我们定义了一个变量foo，并将一个函数赋值给了变量foo。同样在源码中，我们也是在foo函数的前面调用foo。执行这段代码，我们发现报错了，提示变量foo并不是一个函数。</p><p>这是因为在JavaScript中，变量声明也会被提升到作用域的顶部，但是变量的赋值操作并不会被提升。因此，在第一次调用foo时，变量foo还没有被赋值为一个函数，所以会报错。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>本文介绍了JavaScript中函数表达式的重要性和应用，以及学习函数表达式所需要理解的底层概念。同时，本文还通过比较函数声明和函数表达式的差异，帮助读者更好地理解它们之间的区别。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/v8/04.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _04_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "04.html.vue"]]);
export {
  _04_html as default
};
