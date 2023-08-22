import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.0c09e994.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h4 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly" aria-hidden="true">#</a> readonly</h4><p>可以将readonly关键字用在以下位置：</p><ul><li>类的成员变量</li><li>类的构造函数参数</li><li>对象字面量中的属性</li></ul><ol><li>类的成员变量： 在类中，可以使用readonly关键字来定义只读属性。这意味着只读属性只能在声明时或构造函数中进行赋值，之后不能再被修改。例如：</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token comment">// 类的成员变量</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;John&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出: John</span>

person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Mike&#39;</span><span class="token punctuation">;</span>  <span class="token comment">// 错误，不能修改只读属性</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，name属性在声明时被定义为只读属性，所以在构造函数中可以给它赋值，但之后就不能再修改它的值。</p><ol start="2"><li>类的构造函数参数： readonly关键字也可以用于类的构造函数参数，用来定义只读参数。这样定义的参数可以在类中使用，但不能再被修改，例如：</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;John&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出: John</span>

person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Mike&#39;</span><span class="token punctuation">;</span>  <span class="token comment">// 错误，不能修改只读属性</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，name参数在构造函数的参数列表中使用readonly关键字定义为只读参数。这样在构造函数中可以直接使用name参数，并且在之后不能再修改它的值。</p><ol start="3"><li>对象字面量中的属性： 在对象字面量中，可以使用readonly关键字来定义只读属性。这样定义的属性只能在声明时进行赋值，之后不能再修改它的值。例如：</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token keyword">const</span> person<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;John&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出: John</span>

person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Mike&#39;</span><span class="token punctuation">;</span>  <span class="token comment">// 错误，不能修改只读属性</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，name属性被定义为只读属性，所以在对象字面量中可以给它赋值，但之后就不能再修改它的值。</p><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结：</h4><p>readonly关键字用于创建只读属性，一旦被赋值后，就不能再被修改。它可以应用于类的成员变量、类的构造函数参数以及对象字面量中的属性。只读属性在声明时或构造函数中进行赋值，之后不能再修改。这样可以在代码中确保某些属性的值不会被意外地修改。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/ts/readonly.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const readonly_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "readonly.html.vue"]]);
export {
  readonly_html as default
};
