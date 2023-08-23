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
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_19-promise-告别回调函数" tabindex="-1"><a class="header-anchor" href="#_19-promise-告别回调函数" aria-hidden="true">#</a> 19-Promise：告别回调函数</h2><p>本文介绍了 Promise 的概念和应用。文章首先介绍了 JavaScript 的异步编程模型，包括页面的事件循环系统和主线程之外的进程或线程执行耗时任务的方式。接着，文章详细解释了 Promise 解决的问题，即异步编码风格的问题，以及 Promise 的动机和核心关键点。然后，文章介绍了 Promise 的基本用法，包括 Promise 对象的状态、Promise 实例的创建、Promise 实例的状态转换和 Promise 实例的链式调用。接下来，文章讲解了 Promise 的高级应用，包括 Promise.all()、Promise.race()、Promise.resolve() 和 Promise.reject() 等方法。最后，文章总结了 Promise 的优点和缺点，并提醒读者注意在编写代码时对 Promise 的合理使用。</p><h3 id="异步编程的问题-代码逻辑不连续" tabindex="-1"><a class="header-anchor" href="#异步编程的问题-代码逻辑不连续" aria-hidden="true">#</a> 异步编程的问题：代码逻辑不连续</h3><p>JavaScript 的异步编程模型会导致代码逻辑不连续，即代码执行的顺序与书写的顺序不一致。这是因为异步操作需要等待结果返回后才能执行后续操作，而 JavaScript 的单线程执行模型无法在等待期间执行其他任务。因此，开发者需要使用回调函数来处理异步操作的结果，但回调函数嵌套过多会导致代码难以维护。Promise 解决了这个问题。</p><h3 id="promise-的动机和核心关键点" tabindex="-1"><a class="header-anchor" href="#promise-的动机和核心关键点" aria-hidden="true">#</a> Promise 的动机和核心关键点</h3><p>Promise 的动机是解决异步编码风格的问题。Promise 通过封装异步操作并返回一个 Promise 对象来实现代码逻辑的连续性。Promise 有三个状态：pending、fulfilled 和 rejected。Promise 实例创建后可以通过 resolve() 和 reject() 方法将其状态从 pending 转换为 fulfilled 或 rejected。Promise 实例的状态转换只能发生一次。Promise 实例可以通过 then() 方法进行链式调用，实现代码逻辑的连续性。</p><h3 id="promise-的基本用法" tabindex="-1"><a class="header-anchor" href="#promise-的基本用法" aria-hidden="true">#</a> Promise 的基本用法</h3><p>Promise 的基本用法包括 Promise 对象的状态、Promise 实例的创建、Promise 实例的状态转换和 Promise 实例的链式调用。</p><h3 id="promise-对象的状态" tabindex="-1"><a class="header-anchor" href="#promise-对象的状态" aria-hidden="true">#</a> Promise 对象的状态</h3><p>Promise 对象有三种状态：</p><ul><li>pending：初始状态，既不是成功也不是失败状态。</li><li>fulfilled：意味着操作成功完成。</li><li>rejected：意味着操作失败。 Promise 实例的创建 使用 Promise 构造函数创建 Promise 实例：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 异步操作</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token comment">/* 操作成功 */</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Promise 实例的状态转换 使用 resolve() 和 reject() 方法将 Promise 实例的状态从 pending 转换为 fulfilled 或 rejected：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  <span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 操作成功时执行</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 操作失败时执行</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Promise 实例的链式调用 使用 then() 方法进行链式调用：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>promise
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 操作成功时执行</span>
    <span class="token keyword">return</span> newValue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 上一个 then() 返回的值作为参数传入，继续执行</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 操作失败时执行</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="promise-的高级应用" tabindex="-1"><a class="header-anchor" href="#promise-的高级应用" aria-hidden="true">#</a> Promise 的高级应用</h3><p>Promise 的高级应用包括 Promise.all()、Promise.race()、Promise.resolve() 和 Promise.reject() 等方法。</p><ul><li>Promise.all()：将多个 Promise 实例包装成一个新的 Promise 实例，并在所有实例都成功时返回一个包含所有返回值的数组；在任何一个实例失败时返回该实例的错误信息。</li><li>Promise.race()：将多个 Promise 实例包装成一个新的 Promise 实例，并在其中任何一个实例完成时返回该实例的返回值或错误信息。</li><li>Promise.resolve()：将某个值或对象包装成一个 Promise 实例，并立即返回该实例。</li><li>Promise.reject()：将某个错误信息包装成一个 Promise 实例，并立即返回该实例。</li></ul><h3 id="promise-的优点和缺点" tabindex="-1"><a class="header-anchor" href="#promise-的优点和缺点" aria-hidden="true">#</a> Promise 的优点和缺点</h3><p>Promise 的优点是可以解决异步编码风格的问题，使代码逻辑更加连续；可以进行链式调用，使代码更加简洁易读；可以使用高级应用方法处理多个异步操作。Promise 的缺点是需要学习新的语法和概念；可能会导致过度使用链式调用和嵌套，影响代码可读性和可维护性；无法取消已经开始执行的异步操作。因此，在编写代码时需要注意对 Promise 的合理使用。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/19.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _19_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "19.html.vue"]]);
export {
  _19_html as default
};
