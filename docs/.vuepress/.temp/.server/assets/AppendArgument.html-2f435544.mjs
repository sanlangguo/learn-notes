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
  _push(`<div${ssrRenderAttrs(_attrs)}><h4 id="appendargument" tabindex="-1"><a class="header-anchor" href="#appendargument" aria-hidden="true">#</a> AppendArgument</h4><p>在 TypeScript 中，AppendArgument 是一个类型工具，用于在函数类型中追加一个参数。</p><p>AppendArgument 的语法如下所示：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">AppendArgument<span class="token operator">&lt;</span><span class="token constant">F</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span></span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token constant">A</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> Parameters<span class="token operator">&lt;</span><span class="token constant">F</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ReturnType<span class="token operator">&lt;</span><span class="token constant">F</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，F 表示函数类型，A 表示要追加的参数类型。</p><p>使用 AppendArgument 可以方便地在函数类型中添加额外的参数，而无需重新定义函数类型。</p><p>例如，假设有一个函数类型 Add，用于将两个数字相加：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Add</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在，我们想在 Add 的参数列表中追加一个额外的参数 c，类型为 string。可以使用 AppendArgument 来实现：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">AddWithC</span> <span class="token operator">=</span> AppendArgument<span class="token operator">&lt;</span>Add<span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在上述代码中，我们使用 AppendArgument 将参数类型 string 追加到 Add 函数类型中，得到了新的函数类型 AddWithC。</p><p>现在，我们可以使用 AddWithC 来声明变量或进行类型约束：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> addWithC<span class="token operator">:</span> <span class="token function-variable function">AddWithC</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码中，addWithC 是一个满足 AddWithC 类型约束的函数，它接受三个参数 a、b 和 c，并在函数体中打印出参数 c 的值，并返回 a + b 的结果。</p><p>需要注意的是，AppendArgument 只能在函数类型中追加参数，而不能用于接口或类的成员。</p><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结：</h4><p>TS AppendArgument 是一个类型工具，用于在函数类型中追加一个参数。通过使用 AppendArgument，可以方便地在函数类型中添加额外的参数，而无需重新定义函数类型。这样可以提高代码的可读性和可维护性，以及类型安全性。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/ts/AppendArgument.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppendArgument_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "AppendArgument.html.vue"]]);
export {
  AppendArgument_html as default
};
