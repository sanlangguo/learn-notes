import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.bf7dc909.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h4 id="pick" tabindex="-1"><a class="header-anchor" href="#pick" aria-hidden="true">#</a> Pick</h4><p>在 TypeScript 中，Pick 是一个内置的工具类型，它允许你从一个给定的类型中选择指定的属性并创建一个新的类型。</p><p>Pick 的语法如下所示：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，T 是要选择属性的源类型，K 是要选择的属性的键的联合类型。</p><p>使用 Pick 可以在编译时对类型进行约束，只选择指定的属性，而忽略其他属性。</p><p>例如，假设有一个类型 Person，包含 name、age 和 address 属性：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  address<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们使用 Pick 来选择 Person 类型中的 name 和 age 属性：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">PersonInfo</span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>Person<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;age&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在上述代码中，PersonInfo 类型是从 Person 类型中选择了 name 和 age 属性，而忽略了 address 属性。</p><p>在使用 Pick 后，我们可以使用 PersonInfo 类型来创建新的对象或对现有对象进行类型约束：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> person<span class="token operator">:</span> PersonInfo <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码中，person 对象使用 PersonInfo 类型进行约束，只有 name 和 age 属性是允许的。</p><p>需要注意的是，Pick 只选择指定的属性，并不会改变属性的可选性或只读性。如果源类型中的属性是可选的，那么在 Pick 后，新类型中的属性也是可选的。</p><p>另外，Pick 可以与其他工具类型（如 Partial、Required 等）一起使用，以进一步调整类型的可选性和只读性。</p><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结：</h4><p>TS Pick 是一个内置的工具类型，在 TypeScript 中用于从一个给定的类型中选择指定的属性并创建一个新的类型。它可以在编译时对类型进行约束，忽略不需要的属性。使用 Pick，可以灵活地选择需要的属性，并在代码中增加类型安全性。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/ts/pick.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pick_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "pick.html.vue"]]);
export {
  pick_html as default
};
