import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.d4b4a16d.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_11-this-从javascript执行上下文的视角讲清楚this" tabindex="-1"><a class="header-anchor" href="#_11-this-从javascript执行上下文的视角讲清楚this" aria-hidden="true">#</a> 11-this：从JavaScript执行上下文的视角讲清楚this</h2><p>本文主要讲解 JavaScript 中的 this 关键字，从执行上下文的视角出发，详细介绍了 this 的概念、使用方法以及注意事项。</p><h3 id="javascript-中的-this-是什么" tabindex="-1"><a class="header-anchor" href="#javascript-中的-this-是什么" aria-hidden="true">#</a> JavaScript 中的 this 是什么</h3><p>在 JavaScript 中，this 是一个关键字，用于指向当前函数执行时所在的对象。this 的值在函数执行时才能确定，取决于函数的调用方式。</p><h3 id="执行上下文" tabindex="-1"><a class="header-anchor" href="#执行上下文" aria-hidden="true">#</a> 执行上下文</h3><p>JavaScript 中的执行上下文是指在代码执行过程中所创建的一个对象，用于存储代码执行时所需的所有信息。每个执行上下文都有三个重要的属性：变量对象、作用域链和 this 值。</p><h3 id="this-的使用方法" tabindex="-1"><a class="header-anchor" href="#this-的使用方法" aria-hidden="true">#</a> this 的使用方法</h3><p>在函数中使用 this 关键字时，它会根据函数的调用方式来确定其值。具体来说，当函数作为对象的方法调用时，this 指向该对象；当函数作为普通函数调用时，this 指向全局对象；当使用 new 运算符调用构造函数时，this 指向新创建的对象。</p><p>此外，在使用 call、apply 和 bind 方法时，可以显式地指定函数执行时所在的对象。</p><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3><p>在使用 this 关键字时需要注意以下几点：</p><ul><li>在严格模式下，当函数作为普通函数调用时，this 的值为 undefined；</li><li>在箭头函数中，this 的值不会因为调用方式不同而发生改变；</li><li>在嵌套函数中，this 的值可能会发生改变，需要注意绑定正确的 this 值。</li></ul><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>本文通过讲解执行上下文和 this 的概念，详细介绍了 JavaScript 中 this 关键字的使用方法和注意事项。掌握 this 的正确使用方法可以帮助开发人员编写更加健壮、可维护的 JavaScript 代码。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/11.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _11_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "11.html.vue"]]);
export {
  _11_html as default
};
