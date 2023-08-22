import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.11715a5c.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_07-类型转换-v8是怎么实现1-2-的" tabindex="-1"><a class="header-anchor" href="#_07-类型转换-v8是怎么实现1-2-的" aria-hidden="true">#</a> 07-类型转换：V8是怎么实现1-“2”的</h2><p>本文主要讲解 JavaScript 中的类型系统，探讨在 JavaScript 中让数字和字符串相加是会报错，还是可以正确执行，以及相加后的结果是数字还是字符串的问题。</p><h3 id="问题引入" tabindex="-1"><a class="header-anchor" href="#问题引入" aria-hidden="true">#</a> 问题引入</h3><p>在 JavaScript 中，“1+‘2’等于多少？”这个问题，实际上是在问，让数字和字符串相加是会报错，还是可以正确执行。如果能正确执行，那么结果是等于数字3，还是字符串“3”，还是字符串“12”呢？</p><h3 id="类型系统" tabindex="-1"><a class="header-anchor" href="#类型系统" aria-hidden="true">#</a> 类型系统</h3><p>要想理清以上问题，我们需要了解类型的概念，以及 JavaScript 操作类型的策略。</p><p>在机器语言中，所有的数据都是一堆二进制代码，CPU 处理这些数据的时候，并没有类型的概念，CPU 所做的仅仅是移动数据，比如对其进行移位、相加或相乘。</p><p>而在高级语言中，我们都会为操作的数据定义类型。类型系统就是一套规则，用于定义程序中所有可能存在的类型，并规定了这些类型之间可以进行哪些运算。</p><p>JavaScript 中的类型系统是动态类型系统，也就是说，变量的类型是在运行期间确定的。这意味着，在 JavaScript 中，同一个变量在不同的时间内可能会存储不同类型的值。</p><h3 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换" aria-hidden="true">#</a> 类型转换</h3><p>在 JavaScript 中，有两种类型转换：隐式类型转换和显式类型转换。</p><p>隐式类型转换就是在运行期间自动发生的类型转换。例如，当我们对数字和字符串进行相加操作时，JavaScript 引擎会自动将数字转换为字符串，并将两个字符串拼接起来。</p><p>显式类型转换就是我们在代码中直接指定要进行类型转换。例如，我们可以使用 Number() 函数将字符串转换为数字。</p><h3 id="问题解答" tabindex="-1"><a class="header-anchor" href="#问题解答" aria-hidden="true">#</a> 问题解答</h3><p>回到最初的问题：“1+‘2’等于多少？”在 JavaScript 中执行这段表达式，会返回字符串“12”。</p><p>这是因为，在 JavaScript 中进行加法运算时，如果其中一个操作数是字符串类型，那么 JavaScript 引擎会将另一个操作数也转换为字符串类型，并将两个字符串拼接起来。</p><p>所以，在这个例子中，数字 1 被转换为字符串 &quot;1&quot;，然后与字符串 &quot;2&quot; 进行拼接，得到了结果 &quot;12&quot;。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>JavaScript 中的类型系统是动态类型系统，在运行期间确定变量的类型。</p><p>JavaScript 中有两种类型转换：隐式类型转换和显式类型转换。</p><p>当进行加法运算时，如果其中一个操作数是字符串类型，那么 JavaScript 引擎会将另一个操作数也转换为字符串类型，并将两个字符串拼接起来。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/v8/07.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _07_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "07.html.vue"]]);
export {
  _07_html as default
};
