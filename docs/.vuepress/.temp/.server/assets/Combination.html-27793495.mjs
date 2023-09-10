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
  _push(`<div${ssrRenderAttrs(_attrs)}><h4 id="combination" tabindex="-1"><a class="header-anchor" href="#combination" aria-hidden="true">#</a> Combination</h4><p>在 TypeScript 中，Combination 是一个类型工具，用于将多个类型组合成一个新的类型。它可以通过使用交叉类型和联合类型来实现类型的组合。</p><p>交叉类型（Intersection Types）： 交叉类型是将多个类型合并为一个类型的方式。通过使用 &amp; 运算符，可以将多个类型的属性和方法合并到一个新的类型中。 例如，假设有两个类型 A 和 B：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们可以使用交叉类型将类型 A 和类型 B 组合成一个新的类型 C：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token operator">=</span> <span class="token constant">A</span> <span class="token operator">&amp;</span> <span class="token constant">B</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在上述代码中，C 是类型 A 和类型 B 的交叉类型，它包含了 A 和 B 的所有属性和方法。</p><p>联合类型（Union Types）： 联合类型是将多个类型定义为一个类型的方式。通过使用 | 运算符，可以将多个类型组合成一个新的类型，表示该类型可以是其中任意一个类型。 例如，假设有两个类型 A 和 B：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们可以使用联合类型将类型 A 和类型 B 组合成一个新的类型 C：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token operator">=</span> <span class="token constant">A</span> <span class="token operator">|</span> <span class="token constant">B</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在上述代码中，C 是类型 A 和类型 B 的联合类型，表示 C 可以是 A 或 B 中的任意一个类型。</p><p>需要注意的是，交叉类型和联合类型可以结合使用，形成更复杂的类型组合。</p><p>例如，假设有三个类型 A、B 和 C：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  gender<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们可以使用交叉类型和联合类型将类型 A、B 和 C 组合成一个新的类型 D：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">D</span></span> <span class="token operator">=</span> <span class="token constant">A</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token constant">B</span> <span class="token operator">|</span> <span class="token constant">C</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在上述代码中，D 是类型 A 和 (B | C) 的交叉类型，表示 D 包含了 A 的所有属性，并且可以是 B 或 C 中的任意一个类型。</p><p>通过使用交叉类型和联合类型，可以灵活地组合多个类型，以满足不同的需求。这样可以提高代码的可读性、可维护性和类型安全性，使代码更具灵活性和复用性。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/ts/Combination.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Combination_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Combination.html.vue"]]);
export {
  Combination_html as default
};
