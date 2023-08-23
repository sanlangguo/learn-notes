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
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_08-调用栈-为什么javascript代码会出现栈溢出" tabindex="-1"><a class="header-anchor" href="#_08-调用栈-为什么javascript代码会出现栈溢出" aria-hidden="true">#</a> 08-调用栈：为什么JavaScript代码会出现栈溢出？</h2><p>本文主要讲解 JavaScript 引擎的工作原理中的调用栈相关内容。理解调用栈对于理解 JavaScript 语言本身，以及调试 JavaScript 代码非常重要。同时，在面试过程中，调用栈也是出现频率非常高的题目。</p><h3 id="执行上下文的创建" tabindex="-1"><a class="header-anchor" href="#执行上下文的创建" aria-hidden="true">#</a> 执行上下文的创建</h3><ul><li>在 JavaScript 执行代码之前，JavaScript 引擎会对代码进行编译，并创建执行上下文。一般情况下，执行上下文会在以下三种情况下被创建：</li></ul><ol><li><p>当 JavaScript 执行全局代码时，会编译全局代码并创建全局执行上下文。在整个页面的生存周期内，全局执行上下文只有一份。</p></li><li><p>当调用一个函数时，函数体内的代码会被编译，并创建函数执行上下文。函数执行结束后，创建的函数执行上下文会被销毁。</p></li><li><p>当使用 eval 函数时，eval 的代码也会被编译，并创建执行上下文。</p></li></ol><h3 id="调用栈的作用" tabindex="-1"><a class="header-anchor" href="#调用栈的作用" aria-hidden="true">#</a> 调用栈的作用</h3><p>调用栈是用来管理函数调用关系的一种数据结构。当一个函数被调用时，它就会被添加到调用栈的顶部。当函数执行完成后，它就会从调用栈中弹出。调用栈是一个先进后出（LIFO）的数据结构。</p><h3 id="栈溢出错误" tabindex="-1"><a class="header-anchor" href="#栈溢出错误" aria-hidden="true">#</a> 栈溢出错误</h3><p>当调用栈空间不足时，就会出现栈溢出错误。在 JavaScript 中，每当一个函数被调用时，它就会被添加到调用栈的顶部。如果在函数内部又调用了另外一个函数，并且这个函数也将自己添加到调用栈的顶部，那么就会形成一个嵌套的调用栈。如果这种嵌套调用过于深入，超出了 JavaScript 引擎所能处理的范围，就会导致栈溢出错误。</p><h3 id="函数调用和栈结构" tabindex="-1"><a class="header-anchor" href="#函数调用和栈结构" aria-hidden="true">#</a> 函数调用和栈结构</h3><p>函数调用就是运行一个函数，具体使用方式是使用函数名称跟着一对小括号。当一个函数被调用时，它就会被添加到调用栈的顶部。当函数执行完成后，它就会从调用栈中弹出。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>了解 JavaScript 引擎的工作原理中的调用栈相关内容对于理解 JavaScript 语言本身，以及调试 JavaScript 代码非常重要。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/08.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _08_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "08.html.vue"]]);
export {
  _08_html as default
};
