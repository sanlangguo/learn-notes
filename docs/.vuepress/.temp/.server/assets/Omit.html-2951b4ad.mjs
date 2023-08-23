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
  _push(`<div${ssrRenderAttrs(_attrs)}><h4 id="omit" tabindex="-1"><a class="header-anchor" href="#omit" aria-hidden="true">#</a> Omit</h4><p>TS Omit 是 TypeScript 中的一个类型工具，用于创建一个新类型，从原始类型中排除指定的属性。</p><p>在 TypeScript 中，我们可能需要从一个类型中删除（排除）某些属性，以创建一个新的类型。这时可以使用 TS Omit 工具来实现。</p><p>下面是一个示例：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  address<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// NewPerson 的类型为 { name: string; }</span>
<span class="token keyword">type</span> <span class="token class-name">NewPerson</span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span>Person<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;address&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> a<span class="token operator">:</span>NewPerson <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;john&#39;</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述示例中，我们定义了一个名为 Person 的接口类型，它包含了 name、age 和 address 三个属性。然后，我们使用 TS.Omit 工具从 Person 类型中排除了 &#39;age&#39; 和 &#39;address&#39; 这两个属性，得到一个新的类型 NewPerson。</p><p>通过使用 TS.Omit 工具，我们成功地从 Person 类型中排除了 &#39;age&#39; 和 &#39;address&#39; 这两个属性，并创建了一个新的类型 NewPerson，其中只剩下了 { name: string; } 这个属性。</p><p>需要注意的是，TS.Omit 工具可以应用于接口类型和字面量类型。如果尝试将其应用于非对象类型，TypeScript 编译器将会报错。此外，当指定要排除的属性不存在于原始类型中时，TS.Omit 也不会引发错误，而是仅仅保留原始类型的所有属性。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/ts/Omit.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Omit_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Omit.html.vue"]]);
export {
  Omit_html as default
};
