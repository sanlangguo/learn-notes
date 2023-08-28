import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.80b21bdd.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_11-堆和栈-函数调用是如何影响到内存布局的" tabindex="-1"><a class="header-anchor" href="#_11-堆和栈-函数调用是如何影响到内存布局的" aria-hidden="true">#</a> 11-堆和栈：函数调用是如何影响到内存布局的</h2><p>本文从函数特性入手，延伸出通用的函数调用模型，分析不同的函数调用方式如何影响运行时内存布局。</p><h3 id="栈结构管理函数调用" tabindex="-1"><a class="header-anchor" href="#栈结构管理函数调用" aria-hidden="true">#</a> 栈结构管理函数调用</h3><p>栈是一种后进先出的数据结构，用于管理函数调用。当一个函数被调用时，CPU 会在栈中为该函数分配一段内存空间，称为栈帧。栈帧中包含了该函数的参数、局部变量、返回地址等信息。当函数执行完毕后，CPU 会将该函数的栈帧出栈，恢复上一个函数的执行。</p><p>使用栈结构管理函数调用的好处在于：</p><ul><li>简单高效：栈的结构非常简单，入栈和出栈操作非常快速。</li><li>空间利用率高：由于栈是后进先出的结构，因此可以很好地利用内存空间。</li><li>堆结构管理动态内存分配</li><li>堆是一种动态内存分配方式，用于管理应用程序的动态内存。堆中的内存空间不会自动释放，需要手动进行释放。</li></ul><p>使用堆结构管理动态内存分配的好处在于：</p><ul><li>灵活性高：堆中的内存空间可以根据需要进行动态分配和释放。</li><li>内存空间大：由于堆中的内存空间不会自动释放，因此可以利用更多的内存空间。</li><li>函数调用对内存布局的影响</li><li>不同的函数调用方式会影响运行时内存布局，从而影响代码的执行逻辑。</li></ul><p>例如，以下三段代码的底层执行逻辑是不同的：</p><ul><li>在同一个任务中重复调用嵌套的函数；</li><li>使用 setTimeout 让函数在不同的任务中执行；</li><li>在同一个任务中执行函数，但不是嵌套执行。</li><li>第一段代码会造成栈溢出的错误，第二段代码能够正确执行，而第三段代码没有栈溢出错误，但会造成页面卡死。这是因为这三段代码在执行时所使用的内存布局不同。</li></ul><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>本文介绍了使用栈结构管理函数调用和使用堆结构管理动态内存分配的优点，并分析了不同的函数调用方式对运行时内存布局的影响。了解这些内容可以帮助我们更好地理解 JavaScript 的执行机制，从而编写出更高效、更可靠的代码。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/v8/11.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _11_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "11.html.vue"]]);
export {
  _11_html as default
};
