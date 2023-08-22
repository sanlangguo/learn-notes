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
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_14-编译器和解释器-v8是如何执行一段javascript代码的" tabindex="-1"><a class="header-anchor" href="#_14-编译器和解释器-v8是如何执行一段javascript代码的" aria-hidden="true">#</a> 14-编译器和解释器：V8是如何执行一段JavaScript代码的？</h2><h3 id="编译器和解释器" tabindex="-1"><a class="header-anchor" href="#编译器和解释器" aria-hidden="true">#</a> 编译器和解释器</h3><p>编译器和解释器的存在是因为机器不能直接理解人类所写的代码，需要将代码“翻译”成机器能读懂的机器语言。根据语言的执行流程，语言可以分为编译型语言和解释型语言。</p><p>编译型语言在程序执行之前需要经过编译器的编译过程，并且编译之后会直接保留机器能读懂的二进制文件，每次运行程序时，都可以直接运行该二进制文件而无需重新编译。而解释型语言则在程序运行时进行解释执行。</p><h3 id="v8-执行机制" tabindex="-1"><a class="header-anchor" href="#v8-执行机制" aria-hidden="true">#</a> V8 执行机制</h3><p>V8 是 JavaScript 的一种实现，它包括了一个编译器和一个解释器。当我们运行一段 JavaScript 代码时，V8 会先将代码解析成抽象语法树（AST），然后将其转换成字节码（Bytecode），最后使用即时编译器（JIT）将字节码转换成机器码并执行。</p><p>V8 的编译流程可以分为两个阶段：解释执行阶段和编译执行阶段。</p><ul><li>在解释执行阶段，V8 使用解释器将 JavaScript 代码逐行翻译成机器码并执行。</li><li>在编译执行阶段，V8 使用即时编译器将字节码转换成机器码并执行，这个过程中，即时编译器会对代码进行优化以提高执行效率。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/14.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _14_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "14.html.vue"]]);
export {
  _14_html as default
};
