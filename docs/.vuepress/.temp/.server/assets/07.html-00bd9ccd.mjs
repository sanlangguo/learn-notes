import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.3b32e088.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_07-变量提升-javascript代码是按顺序执行的吗" tabindex="-1"><a class="header-anchor" href="#_07-变量提升-javascript代码是按顺序执行的吗" aria-hidden="true">#</a> 07-变量提升：JavaScript代码是按顺序执行的吗？</h2><p>本文主要讲解 JavaScript 执行原理中的执行上下文相关内容。理解执行上下文对于理解 JavaScript 语言本身，如变量提升、作用域和闭包等非常重要。同时，了解执行上下文和调用栈的概念也能帮助开发者更好地编写 JavaScript 代码。</p><h3 id="javascript-代码的顺序执行" tabindex="-1"><a class="header-anchor" href="#javascript-代码的顺序执行" aria-hidden="true">#</a> JavaScript 代码的顺序执行</h3><p>JavaScript 是按顺序执行的，但是在执行之前，JavaScript 引擎会对代码进行编译。在编译过程中，JavaScript 引擎会将变量和函数声明提升到当前作用域的顶部。这就是所谓的变量提升。</p><h3 id="变量提升的实例" tabindex="-1"><a class="header-anchor" href="#变量提升的实例" aria-hidden="true">#</a> 变量提升的实例</h3><p>文章给出了一个实例来说明变量提升的概念：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">showName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myname<span class="token punctuation">)</span>
<span class="token keyword">var</span> myname <span class="token operator">=</span> <span class="token string">&#39;极客时间&#39;</span>
<span class="token keyword">function</span> <span class="token function">showName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;函数showName被执行&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，由于变量和函数声明被提升到了当前作用域的顶部，因此代码可以正常执行。具体来说：</p><p>在第一行调用 showName() 函数时，由于函数声明被提升到了当前作用域的顶部，因此函数可以正常执行。 在第二行输出 myname 变量时，由于变量声明被提升到了当前作用域的顶部，因此变量存在但未被赋值，输出结果为 undefined。 需要注意的是，虽然变量和函数声明被提升到了当前作用域的顶部，但是赋值操作并不会被提升。因此，在上面的例子中，虽然 myname 变量被声明了，但是直到第三行才被赋值。</p><h3 id="变量提升的注意事项" tabindex="-1"><a class="header-anchor" href="#变量提升的注意事项" aria-hidden="true">#</a> 变量提升的注意事项</h3><p>文章还给出了一些关于变量提升的注意事项：</p><ul><li>变量和函数声明都会被提升。</li><li>变量声明会被提升，但是赋值操作不会被提升。</li><li>函数声明会被提升，但是函数表达式不会被提升。</li><li>变量和函数声明都会被提升到当前作用域的顶部。</li><li>需要注意的是，在 ES6 中引入了 let 和 const 关键字，它们不会像 var 关键字一样存在变量提升的问题。</li></ul><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>本文主要讲解了 JavaScript 代码的顺序执行和变量提升的概念。理解变量提升对于理解 JavaScript 语言本身非常重要，同时也需要注意变量提升的一些注意事项。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/07.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _07_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "07.html.vue"]]);
export {
  _07_html as default
};
